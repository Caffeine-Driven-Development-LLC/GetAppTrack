import { Box, Stack, Typography } from '@mui/material';
import Head from 'next/head';

export default function Index() {
  return (
    <Box>
      <Head>
        <title>App Track</title>
      </Head>
      <Stack spacing={2}>
        <Typography variant={'h4'} sx={{ textAlign: 'center' }}>
          Your Private Job Search Companion
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
            paddingBottom: '20px',
          }}
        >
          <source
            src="/appTrackScreenshots/AppTrackDemo.mp4"
            type="video/mp4"
          />
        </video>
        <Typography>
          App Track is A free, open-sourced, and private way to help you get and
          stay organized within your job search. We all know how frustrating it
          can be to view countless listings, not realize whether you&apos;ve
          already seen them, already applied, have already received a rejection,
          etc. By logging the opportunities you&apos;ve applied for in App
          Track, you can keep yourself organized, up-to-date, and agile within
          your job search.
        </Typography>
        <Typography>
          App Track will display your active applications so that you can easily
          assess the state of your job search. It can sort applications that
          have progressed further throughout the process to the top of the list,
          and will automatically stop showing applications that have not seen
          any progress after some time. App Track is ready to go as-is, or can
          be configured as you see fit.
        </Typography>
        <Typography>
          Have confidence in the confidentiality of your data. App Track was
          built with privacy in mind; no data leaves your computer, and data can
          be deleted at any time. No account is required, and no login is needed
          - simply download the application and it&#39;s ready to go.
        </Typography>
      </Stack>
    </Box>
  );
}
