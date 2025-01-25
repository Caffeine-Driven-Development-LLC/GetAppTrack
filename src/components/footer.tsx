import { Box, Divider, Link, Stack, Typography } from '@mui/material';

export default function Footer() {
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
          <Link href="https://github.com/Caffeine-Driven-Development-LLC/getAppTrack">
            Github
          </Link>
          <Link href="mailto:Support@getAppTrack.com">Contact us</Link>
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
          App Track is the result of an exercise in self improvement, both
          professionally and personally. App Track was built in Chicago, and
          distributed under Caffeine Driven Development LLC.
        </Typography>
      </Stack>
    </Box>
  );
}
