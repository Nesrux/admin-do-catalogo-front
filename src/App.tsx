import { Box, ThemeProvider, createTheme } from '@mui/material';
import './App.css';
import { Header } from './components/Header';
import { Layout } from './components/Layout';

const theme = createTheme({});

function App() {
  return (
    <ThemeProvider theme={{}}>
      <Box component="main" sx={{
        height: "100vh",
      }}>
        <Header />
        <Layout >
          <h1>SALVE SALVE FAMILIAA</h1>
        </Layout>
      </Box>
    </ThemeProvider>
  )
}

export default App;
