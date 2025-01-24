import { List, ListItem, Paper, Stack, Typography } from '@mui/material';
import DocumentationLayout from '@/components/documentation-layout';
import { ArrowDownward, ArrowUpward, Edit } from '@mui/icons-material';
import Head from 'next/head';
import React from 'react';

export default function ApplicationEvents() {
  return (
    <DocumentationLayout>
      <Head>
        <title>App Track - Application Events</title>
      </Head>
      <Stack spacing={2}>
        <Typography variant="h2">Application Events</Typography>
        <Typography>
          Using App Track, applications follow a series of events known as
          &#34;Application Events&#34;.
        </Typography>
        <Typography>
          An Application Event refers to the status that an application can be
          in at any given time throughout the lifecycle of the application
          process. Each event has a name, and can have a list of possible next
          events.
        </Typography>
        <Paper sx={{ p: 2 }}>
          <Typography variant="body2" component="div">
            For example, Application Events could be the following:
          </Typography>
          <List>
            <ListItem disablePadding>
              <Typography variant="body2">- Applied</Typography>
            </ListItem>
            <ListItem disablePadding>
              <Typography variant="body2">- Scheduled Phone Screen</Typography>
            </ListItem>
            <ListItem disablePadding>
              <Typography variant="body2">- Completed Phone Screen</Typography>
            </ListItem>
            <ListItem disablePadding>
              <Typography variant="body2">- Withdrawn</Typography>
            </ListItem>
          </List>
        </Paper>
        <Typography>
          On the Settings page, you can choose to &#34;Configure Application
          Events&#34; to align with your preferences.
        </Typography>
        <Typography>
          Events can be tagged as either an &#34;Initial Step&#34; or
          &#34;Always Available&#34;.
        </Typography>
        <Typography variant={'h5'}>Initial Steps</Typography>
        <Typography>
          Initial Steps refer to events that are classified as &#34;initiating
          the application process&#34;. A commonly used example of an Initial
          Step could be &#34;Applied&#34; or &#34;Referred&#34;.
        </Typography>
        <Typography variant={'h5'}>Always Available</Typography>
        <Typography>
          Always Available Events are events that are classified as having the
          possibility to occur at any time throughout the process. This could
          include &#34;Withdrawing&#34; or &#34;Rejection&#34;.
        </Typography>
        <Typography variant={'h4'}>Add New Event</Typography>
        <Typography>
          Events can be added to the list using the &#34;Add New Event&#34;
          button. Clicking this button will open a window where you can name
          your desired event, mark it as an Initial Step (IS) or Always
          Available (AA), and add any possible next steps that could occur after
          it throughout the application process.
        </Typography>
        <Typography>
          Selecting the <Edit fontSize="small" /> icon for any event in the list
          will bring up the same window, and enable you edit any details about
          the event, or delete it entirely.
        </Typography>
        <Typography variant={'h4'}>Changing the Order of Events</Typography>
        <Typography>
          The sequential order of Application Events is entirely customizable.
          The order of events is used to determine how far an application has
          progressed throughout its lifecycle, and will impact the order in
          which applications are displayed in your list.
        </Typography>
        <Typography>
          It is best to order the events as such that the lower down on the
          list, the further along in the application process they are. Use the
          arrow keys (
          <ArrowUpward fontSize="small" />, <ArrowDownward fontSize="small" />)
          on the left to change the order of an Event.
        </Typography>
      </Stack>
    </DocumentationLayout>
  );
}
