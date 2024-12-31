import {Box, Stack, Typography} from "@mui/material";
import Head from "next/head";

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
        <video
          autoPlay
          muted
          playsInline
          style={{
            width: '100%',
            maxWidth: '776px',
            display: 'block',
            margin: '0 auto',
            paddingTop: '20px',
            paddingBottom: '20px'
          }}
        >
          <source src="/appTrackScreenshots/AppTrackDemo.mp4" type="video/mp4"/>
        </video>
        <Typography fontFamily="Roboto">
          App Track is free, open sourced, and private way to help you stay organized within your job search! We all
          know how frustrating it can be to view countless listings, not realize whether you've already seen them,
          already applied, have already received a rejection, etc. By logging the opportunities you've applied for in
          App Track, you can keep yourself organized, up-to-date, and agile within your job search.
        </Typography>
        <Typography fontFamily="Roboto">
          App Track will display your active applications so you can quickly see the state of your job search. It's
          smart enough to sort applications that have progressed further to the top of the list, and will automatically
          stop showing applications that have not had any progress after some time. All of this works right out of the
          box and can be configured as you see fit.
        </Typography>
        <Typography fontFamily="Roboto">
          Have confidence in the confidentiality of your data. App Track was built with privacy in mind. None of the
          data leaves your computer and can be deleted at a moments notice. No account is required, or login is needed,
          simply download the application and it is ready to use.
        </Typography>
      </Stack>
    </Box>
  );
}