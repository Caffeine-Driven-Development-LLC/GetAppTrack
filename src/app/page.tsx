import {Typography, Box, Container} from "@mui/material";
import AppTitle from "@/app/components/app_title";

export default function Home() {
  return (
    <Box sx={{ p: 3}}>
      <AppTitle />
        <Container>
            <Typography>
                Your search for a new position is your own, There's no need to share that data with the cloud. But keep it organized.
            </Typography>
            <Typography>
                AppTrack was built with this mindset, It provides a simple user interface to track your journey finding new
                employment, without letting the world know your searching. Nothing leaves your computer, and
                anything/everything can be permanently deleted when/if you chose.
                All while providing a simple way to access relevant data for your job search.
            </Typography>
        </Container>
    </Box>
  );
}
