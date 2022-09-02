import { Box } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <Box display='flex' flexDirection='column' minHeight='100vh'>
      <Navbar />
      <Box
        display='flex'
        flexDirection='column'
        flexGrow={1}
        padding='1rem'
        margin='0 auto'
        maxWidth='1200px'
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
}
