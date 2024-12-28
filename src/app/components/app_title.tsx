import Image from "next/image";
import {Stack, Divider, Link, Button, Paper, Box} from "@mui/material";
import { useRouter } from 'next/navigation';

export default function AppTitle() {
  const router = useRouter();

  return (
    <Box
      sx={{
        padding: 3,
        bgcolor: "primary.light"
    }}
    >
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
            color="success"
            size="large"
            onClick={() => alert('Download')}
          >
            Download
          </Button>
          <Link
              component="button"
              variant="h5"
              fontFamily="Roboto"
              onClick={() => router.push('/FAQ')}
          >
            FAQ
          </Link>
          <Link
            component="button"
            variant="h5"
            fontFamily="Roboto"
            onClick={() => router.push('/About')}
          >
            About
          </Link>
        </Stack>
      </Stack>
    </Box>
  )
}