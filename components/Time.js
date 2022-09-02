import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { Box, Card, CardContent, Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2

export default function Time() {
  const router = useRouter();
  const { zone } = router.query;
  const [timeNow, setTimeNow] = useState(new Date());
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data, error } = useSWR(
    `https://api.waktusolat.me/waktusolat/today/${zone}`,
    fetcher,
    {
      suspense: true,
    }
  );
  useEffect(() => {
    const startTimer = () => {
      const timer = setInterval(() => {
        setTimeNow(new Date());
      }, 1000);
      return () => clearInterval(timer);
    };
    startTimer();
  }, []);
  if (error) return <div>failed to load</div>;
  return (
    <>
      <Box>
        <Card variant='outlined'>
          <CardContent>
            <Typography
              sx={{ fontSize: 24 }}
              color='text.secondary'
              gutterBottom
            >
              {timeNow.toLocaleTimeString()}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color='text.secondary'>
              {data.today.day}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color='text.secondary'>
              {data.data[0].hijri.split(' ')[2]},{' '}
              {data.data[0].date.split(' ')[0]}
            </Typography>
            <Typography variant='body2'>
              {data.zone}
              <br />
              Waktu {data.nextSolat.name} akan masuk dalam{' '}
              {data.nextSolat.hours} jam {data.nextSolat.minutes} minit
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Box>
        <Grid2 container spacing={2}>
          <Grid2>
            <Card variant='outlined'>
              <CardContent>
                <Typography variant='h5' component='div'>
                  Subuh
                </Typography>
                <Typography variant='body2'>{data.data[0].fajr}</Typography>
              </CardContent>
            </Card>
          </Grid2>

          <Grid2>
            <Card variant='outlined'>
              <CardContent>
                <Typography variant='h5' component='div'>
                  Syuruk
                </Typography>
                <Typography variant='body2'>{data.data[0].syuruk}</Typography>
              </CardContent>
            </Card>
          </Grid2>

          <Grid2>
            <Card variant='outlined'>
              <CardContent>
                <Typography variant='h5' component='div'>
                  Zuhur
                </Typography>
                <Typography variant='body2'>{data.data[0].dhuhr}</Typography>
              </CardContent>
            </Card>
          </Grid2>

          <Grid2>
            <Card variant='outlined'>
              <CardContent>
                <Typography variant='h5' component='div'>
                  Asar
                </Typography>
                <Typography variant='body2'>{data.data[0].asr}</Typography>
              </CardContent>
            </Card>
          </Grid2>

          <Grid2>
            <Card variant='outlined'>
              <CardContent>
                <Typography variant='h5' component='div'>
                  Maghrib
                </Typography>
                <Typography variant='body2'>{data.data[0].maghrib}</Typography>
              </CardContent>
            </Card>
          </Grid2>

          <Grid2>
            <Card variant='outlined'>
              <CardContent>
                <Typography variant='h5' component='div'>
                  Isha
                </Typography>
                <Typography variant='body2'>{data.data[0].isha}</Typography>
              </CardContent>
            </Card>
          </Grid2>
        </Grid2>
      </Box>
    </>
  );
}
