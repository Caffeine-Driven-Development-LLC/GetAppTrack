import Image from "next/image";
import {Typography} from "@mui/material";
import {Stack} from "@mui/system";

export default function AppTitle() {

    return (
        <Stack direction="row" spacing={2} alignItems="center">
            <Image
                src="/AppTrackGhost.svg"
                alt="AppTrack logo"
                width={80}
                height={38}
                priority
            />
            <Typography variant="h1">
                AppTrack
            </Typography>
        </Stack>
    )
}