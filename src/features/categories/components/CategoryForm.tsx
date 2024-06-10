import { Box, Button, FormControl, FormControlLabel, FormGroup, Grid, Switch, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import { Category } from '../CategorySlice';


type Props = {
  category: Category;
  isDisable?: boolean;
  isLoading?: boolean;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleToggle: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export function CategoryForm({
  category,
  isDisable = false,
  isLoading = false,
  handleSubmit: onSubmit,
  handleChange,
  handleToggle
}: Props) {

  return (
    <Box p={2}>
      <form onSubmit={onSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField
                required
                name="name"
                label="Name"
                value={category.name}
                disabled={isDisable}
                onChange={handleChange}>

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
                disabled={isDisable}
                onChange={handleChange}>

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
                disabled={isDisable}>Back</Button>
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                component={Link}
                to="/categories"
                disabled={isDisable}>Send</Button>

            </Box>
          </Grid>
        </Grid>
      </form>
    </Box>
  )
}
