import DocumentationLayout from '@/components/documentation-layout';
import { Link, Stack, Typography } from '@mui/material';
import Head from 'next/head';
import React from 'react';

export default function ApplicationsDocumentationIndex() {
  return (
    <DocumentationLayout>
      <Head>
        <title>App Track - Application</title>
      </Head>
      <Stack spacing={2}>
        <Typography variant="h2">Applications</Typography>
        <Typography>
          The Application Page is the nerve center of the application. It
          provides a list of all active application, sorted by application
          progression. (Applications that have progressed beyond initial steps
          will appear at the top of the list for ease of access.)
        </Typography>
        <Typography>
          Every application is shown with its most relevant data: position name,
          company name, most recent event, and a timestamp of the last update.
          On the right hand side, you will see a visual indicator of how close
          the application is to becoming &#34;ghosted&#34; - the longer the bar,
          the longer the application has sat idle.
        </Typography>
        <Typography>
          Selecting an application from the list will take you to the{' '}
          <Link href={'/documentation/applications/application-details'}>
            Application&#39;s Details
          </Link>{' '}
          page, where you can view more information about it, including a
          timeline of events.
        </Typography>
        <Typography>
          You are able to search for any application by name or by company using
          the search bar. Please note this will display all applications, even
          ones that are no longer active.
        </Typography>
        <Typography>
          To add a new opportunity, click the{' '}
          <Link href={'/documentation/applications/add-application'}>
            Add Application
          </Link>{' '}
          button. This will take you to the form where you can provide more
          information.
        </Typography>
      </Stack>
    </DocumentationLayout>
  );
}
