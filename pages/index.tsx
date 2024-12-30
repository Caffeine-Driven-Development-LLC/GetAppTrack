import {Box, Stack, Typography} from "@mui/material";
import Head from "next/head";
import Image from "next/image";

export default function Index() {
  return (
    <Box>
      <Head>
        <title>App Track</title>
      </Head>
      <Stack spacing={2}>
        <Typography fontFamily="Roboto" variant={'h5'} sx={{textAlign: 'center'}}>
          Your search for a new position is your own, keep it organized, don't share it.
        </Typography>
        <Image
          src="/appTrackScreenshots/applicationsPage.png"
          alt="App Track applications page"
          width={857}
          height={573}
          style={{display: 'block', margin: '0 auto', marginTop: 20}}
        />
        <Typography fontFamily="Roboto">
          App Track is free, open sourced, and private way to help you stay organized within your job search! We all
          know how frustrating it can be to view countless listings, not realize whether you've already seen them,
          already applied, have already received a rejection, etc. By logging the opportunities you've applied for in
          App Track, you can keep yourself organized, up-to-date, and agile within your job search.
        </Typography>
      </Stack>
    </Box>
  );
}