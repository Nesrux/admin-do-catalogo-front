import { Box, Button, FormControl, FormControlLabel, FormGroup, Grid, Paper, Switch, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { selectCategoryById } from "./CategorySlice";
import { CategoryForm } from "./components/CategoryForm";

export const CategoryEdit = () => {
  const id = useParams().id || "";
  const category = useAppSelector((state) => selectCategoryById(state, id))
  const [isDisabled, setIsDisabled] = useState(false)
  const handleChange = () => { };
  const handleToggle = () => { };

  return (
    <Box>
      <Paper>
        <Box p={2}>
          <Box mb={2}>
            <Typography variant="h4">Edit Category</Typography>
          </Box>
        </Box>
        <CategoryForm
          category={category}
          handleChange={handleChange}
          handleToggle={handleToggle}
          isDisable={isDisabled}
          onSubmit={() => { }}
          isLoading={false}
        />
      </Paper>
    </Box>
  );
};