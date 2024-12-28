'use client';

import React from "react";
import {IconButton, Paper, Stack, Typography} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

export default function FaqQuestionAndAnswer({ question, answer }) {
    const [isExpanded, setIsExpanded] = React.useState(false);

    const chevronIcon = () => {
        if (isExpanded) {
            return (
                <IconButton
                    color="primary"
                    aria-label="Less"
                    onClick={() => setIsExpanded(!isExpanded)}
                    sx={{ "height": "40px", "width": "40px" }}
                    size="large"
                >
                    <ExpandLessIcon
                        fontSize="inherit"
                    />
                </IconButton>
            )
        } else {
            return (
                <IconButton
                    color="primary"
                    aria-label="More"
                    onClick={() => setIsExpanded(!isExpanded)}
                    sx={{ "height": "40px", "width": "40px" }}
                    size="large"
                >
                    <ExpandMoreIcon
                        fontSize="inherit"
                    />
                </IconButton>
            )
        }
    }


    return (
        <Paper sx={{ "padding": 2 }}>
            <Stack direction="row" spacing={2}>
                {chevronIcon()}
                <Stack spacing={2} direction="column">
                    <Typography
                        variant="h4"
                    >
                        {question}
                    </Typography>
                    {isExpanded &&
                        <Typography
                            variant="h5"
                        >
                            {answer}
                        </Typography>
                    }
                </Stack>
            </Stack>
        </Paper>
    )
}