import Image from 'next/image';
import { Box } from '@mui/material';

export default function Footer() {
  return (
    <Box
      display='flex'
      flexDirection='row'
      justifyContent='space-between'
      alignItems='center'
      alignContent='center'
      padding='1rem'
      backgroundColor='#fff'
      borderBottom='1px solid #eaeaea'
    >
      <a
        href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
        target='_blank'
        rel='noopener noreferrer'
      >
        Powered by{' '}
        <span>
          <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
        </span>
      </a>
    </Box>
  );
}
