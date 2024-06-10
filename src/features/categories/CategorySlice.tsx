import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"

export interface Category {
  id: string,
  name: string,
  description: string | null
  is_active: boolean,
  created_at: string,
  updated_at: string
  deleted_at: string | null

}

const category: Category = {
  id: "93aa8a78-1173-4730-a960-a7ed500923a4",
  name: "Aventura",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing",
  is_active: true,
  created_at: "2024-06-15T14:05:00+0000",
  updated_at: "2024-06-15T14:05:00+0000",
  deleted_at: null,
}

export const initialState =
  [
    category,
    { ...category, id: "94aa8a78-1173-4730-a960-a7ed500923a4", name: "Terror" },
    { ...category, id: "95aa8a78-1173-4730-a960-a7ed500923a4", name: "Suspense" },
    { ...category, id: "96aa8a78-1173-4730-a960-a7ed500923a4", name: "Ação" }
  ]


const categorySlice = createSlice({
  name: "categories",
  initialState: initialState,
  reducers: {
    createCategory(state, action) { },
    updateCategory(state, action) {
      const index = state.findIndex((category) => category.id === action.payload.id);
      state[index] = action.payload;
    },
    deleteCategory(state, action) { }
  }
});

//Selectors
export const selectCategories = (state: RootState) => state.categories

//select categoryById
export const selectCategoryById = (state: RootState, id: string) => {
  const category = state.categories.find((category) => category.id === id)
  return category || {
    id: "",
    name: "",
    description: "",
    is_active: false,
    created_at: "",
    updated_at: "",
    deleted_at: ""
  };
}



export default categorySlice.reducer
export const { createCategory, updateCategory, deleteCategory } = categorySlice.actions