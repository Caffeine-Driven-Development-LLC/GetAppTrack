import {Box, Stack, Typography} from "@mui/material";
import AppTitle from "@/app/components/app_title";
import Head from "next/head";

export default function Index() {
  return (
    <Box sx={{ p: 3}}>
      <Head>
        <title>AppTrack</title>
      </Head>
      <AppTitle />
      <Stack spacing={2}>
        <Typography>
          Your search for a new position is your own, There's no need to share that data with the cloud. But keep it organized.
        </Typography>
        <Typography>
          AppTrack was built with this mindset, It provides a simple user interface to track your journey finding new
          employment, without letting the world know your searching. Nothing leaves your computer, and
          anything/everything can be permanently deleted when/if you chose.
          All while providing a simple way to access relevant data for your job search.
        </Typography>
      </Stack>
    </Box>
  );
}