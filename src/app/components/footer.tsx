import {Box, Divider, Stack, Typography} from "@mui/material";

export default function Footer() {
  return (
    <Box>
      <Stack spacing={2} sx={{
        padding: 3,
        bgcolor: "primary.light",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <Stack direction="row"
               divider={<Divider orientation="vertical" flexItem/>}
               spacing={2}
        >
          <Typography>Github</Typography>
          <Typography>Contact Us</Typography>
        </Stack>
        <Typography variant="body2" sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center"
        }}>
          AppTrack is the result of continuous focus on self-improvement, both
          professionally and personally. AppTrack was built in Chicago, Illinois. Do you know what else is located in
          Chicago, Illinois? Coffee shops. Want me to be able to visit one of those coffee shops? Please click here to
          buy me a coffee.
        </Typography>
      </Stack>
    </Box>
  )
}