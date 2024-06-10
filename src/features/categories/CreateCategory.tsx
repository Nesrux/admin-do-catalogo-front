import { Box, Paper, Typography } from "@mui/material";
import { useState } from "react";
import { Category } from "./CategorySlice";
import { CategoryForm } from "./components/CategoryForm";

export const CategoryCreate = () => {
  const [isDisabled, setIsDisabled] = useState(false)
  const [category, setCategory] = useState<Category>({
    id: "",
    name: "",
    description: "",
    is_active: false,
    created_at: "",
    updated_at: "",
    deleted_at: ""
  });

  const handleChange = () => { };

  const handleToggle = () => { };

  return (
    <Box>
      <Paper>
        <Box p={2}>
          <Box mb={2}>
            <Typography variant="h4">Create Category</Typography>
          </Box>
        </Box>
        <CategoryForm
          category={category}
          handleChange={handleChange}
          handleToggle={handleToggle}
          handleSubmit={() => { }}
          isDisable={isDisabled}
          isLoading={false}
        />
      </Paper>
    </Box>
  );
}