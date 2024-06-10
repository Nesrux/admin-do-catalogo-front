import { Box, Button, FormControl, FormControlLabel, FormGroup, Grid, Paper, Switch, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Category } from "./CategorySlice";

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

  const handlerChange = () => { };

  const handleToggle = () => { };

  return (
    <Box>
      <Paper>
        <Box p={2}>
          <Box mb={2}>
            <Typography variant="h4">Create Category</Typography>
          </Box>
        </Box>
        <Box p={2}>
          <form>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <TextField
                    required
                    name="name"
                    label="Name"
                    value={category.name}
                    disabled={isDisabled}
                    onChange={handlerChange}>

                  </TextField>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth>
                  <TextField
                    required
                    name="description"
                    label="Description"
                    value={category.description}
                    disabled={isDisabled}
                    onChange={handlerChange}>

                  </TextField>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Switch
                        name="is_active"
                        color="secondary"
                        onChange={handleToggle}
                        checked={category.is_active}
                        inputProps={{ "aria-label": "contolled" }}
                      />
                    }
                    label="Active"
                  />
                </FormGroup>
              </Grid>
              <Grid item xs={12}>
                <Box display="flex" gap={2} >
                  <Button
                    variant="contained"
                    component={Link}
                    to="/categories"
                    disabled={isDisabled}>Back</Button>
                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    component={Link}
                    to="/categories"
                    disabled={isDisabled}>Send</Button>

                </Box>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Paper>
    </Box>
  );
}