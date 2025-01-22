import { Box, Divider, Stack, Typography } from '@mui/material';

export default function Footer() {
  // TODO Add links to Github for code and email for the company
  return (
    <Box
      component="footer"
      sx={{
        padding: 3,
        bgcolor: 'primary.light',
      }}
    >
      <Stack
        spacing={2}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
        >
          <Typography>Github</Typography>
          <Typography>Support@getAppTrack.com</Typography>
        </Stack>
        <Typography
          variant="body2"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          App Track is the result of continuous focus on self-improvement, both
          professionally and personally. App Track was built in Chicago,
          Illinois. Do you know what else is located in Chicago, Illinois?
          Coffee shops. Want me to be able to visit one of those coffee shops?
          Please click here to buy me a coffee.
        </Typography>
      </Stack>
    </Box>
  );
}
