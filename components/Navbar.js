import Link from 'next/link';
import { Box, Button } from '@mui/material';

export default function Navbar() {
  return (
    <Box
      display='flex'
      flexDirection='row'
      justifyContent='space-between'
      alignItems='center'
      padding='1rem'
      backgroundColor='#fff'
      borderBottom='1px solid #eaeaea'
    >
      <Link href='/'>
        <Button variant='text'>
          <span>
            <strong>Waktu Solat</strong>
          </span>
        </Button>
      </Link>
      <Link href='/quran'>
        <Button variant='text'>
          <span>
            <strong>Quran</strong>
          </span>
        </Button>
      </Link>
      <Link href='/quran'>
        <Button variant='text'>
          <span>
            <strong>Hadith</strong>
          </span>
        </Button>
      </Link>
      <Link href='/quran'>
        <Button variant='text'>
          <span>
            <strong>Radio</strong>
          </span>
        </Button>
      </Link>
      <Link href='/quran'>
        <Button variant='text'>
          <span>
            <strong>Chat</strong>
          </span>
        </Button>
      </Link>
      <Link href='/quran'>
        <Button variant='text'>
          <span>
            <strong>About</strong>
          </span>
        </Button>
      </Link>
    </Box>
  );
}
