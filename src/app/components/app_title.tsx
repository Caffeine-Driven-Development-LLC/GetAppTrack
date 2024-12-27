import Image from "next/image";
import {Stack, Divider, Link, Button, Paper} from "@mui/material";
import { useRouter } from 'next/navigation';

export default function AppTitle() {
  const router = useRouter();

  return (
    <Paper sx={{padding: 3}}>
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={3}
    >
      <Link
        component="button"
        onClick={() => router.push('/')}
      >
        <Image
          src="/Full Logo.svg"
          alt="AppTrack logo"
          width={400}
          height={100}
        />
      </Link>
      <Stack
        direction="row-reverse"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        <Button
          variant="contained"
          fontFamily="Roboto"
          color="success"
          size="large"
        >
          Download
        </Button>
        <Link
          component="button"
          variant="h5"
          fontFamily="Roboto"
          onClick={() => router.push('/About')}
        >
          About
        </Link>
        <Link
          component="button"
          variant="h5"
          fontFamily="Roboto"
          onClick={() => router.push('https://www.google.com')}
        >
          GitHub
        </Link>
      </Stack>
    </Stack>
    </Paper>
  )
}