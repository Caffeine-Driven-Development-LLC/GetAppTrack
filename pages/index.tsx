import {Box, Stack, Typography} from "@mui/material";
import Head from "next/head";
import Image from "next/image";

export default function Index() {
  return (
    <Box>
      <Head>
        <title>AppTrack</title>
      </Head>
      <Stack spacing={2}>
        <Typography fontFamily="Roboto">
          Your search for a new position is your own, There's no need to share that data with the cloud. But keep it organized.
        </Typography>
        <Typography fontFamily="Roboto">
          AppTrack was built with this mindset, It provides a simple user interface to track your journey finding new
          employment, without letting the world know your searching. Nothing leaves your computer, and
          anything/everything can be permanently deleted when/if you chose.
          All while providing a simple way to access relevant data for your job search.
        </Typography>
        <Image
          src="/appTrackScreenshots/applicationsPage.png"
          alt="AppTrack applications page"
          width={857}
          height={573}
        />
      </Stack>
    </Box>
  );
}