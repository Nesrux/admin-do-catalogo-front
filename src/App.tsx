import { Box, ThemeProvider } from '@mui/material';
import './App.css';
import { Header } from './components/Header';
import { Layout } from './components/Layout';
import appTheme from './config/theme';


function App() {
  return (
    <ThemeProvider theme={appTheme}>
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
