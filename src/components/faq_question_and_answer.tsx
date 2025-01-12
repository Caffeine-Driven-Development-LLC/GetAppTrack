'use client';

import React from "react";
import {Box, Collapse, IconButton, Paper, Stack, Typography} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

export default function FaqQuestionAndAnswer({question, children}: { question: string, children: React.ReactNode }) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const chevronIcon = () => {
    if (isExpanded) {
      return (
        <IconButton
          color="primary"
          aria-label="Less"
          onClick={() => setIsExpanded(!isExpanded)}
          sx={{"height": "30px", "width": "30px"}}
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
          sx={{"height": "30px", "width": "30px"}}
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
    <Paper sx={{"padding": 2}}>
      <Stack direction="row" spacing={2}>
        {chevronIcon()}
        <Box>
          <Typography
            variant="h5"
          >
            {question}
          </Typography>
          <Collapse in={isExpanded}>
            <Box sx={{marginTop: 1}}>
              <Stack spacing={2}>
                {children}
              </Stack>
            </Box>
          </Collapse>
        </Box>
      </Stack>
    </Paper>
  )
}