import { Box, ThemeProvider, Typography } from '@mui/material';
import './App.css';
import { Header } from './components/Header';
import { Layout } from './components/Layout';
import { appTheme } from './config/theme';
import { Routes, Route, Link } from 'react-router-dom';

const Home = () => (
  <Box>
    <Typography variant='h3' component="h3">
      HOME
    </Typography>
  </Box>
)
const About = () => (
  <Box>
    <Typography variant='h3' component="h3">
      About
    </Typography>
  </Box>
)

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <Box component="main" sx={{
        height: "100vh",
        backgroundColor: (theme) => theme.palette.grey[900],
      }}>
        <Header />
        <Layout >
          <h1>Minha Rota</h1>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/' element={<About />} />
          </Routes>
        </Layout>
      </Box>
    </ThemeProvider>
  )
}

export default App;
