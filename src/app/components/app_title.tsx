import Image from "next/image";
import {Typography, Stack} from "@mui/material";

export default function AppTitle() {

    return (
        <Stack direction="row" spacing={2} alignItems="center">
            <Image
                src="/AppTrackGhost.svg"
                alt="AppTrack logo"
                width={100}
                height={150}
                priority
            />
            <Typography variant="h1">
                AppTrack
            </Typography>
        </Stack>
    )
}