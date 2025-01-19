import { Link, Stack, Typography } from '@mui/material';
import { Settings } from '@mui/icons-material';
import DocumentationLayout from '@/components/documentation-layout';
import React from 'react';

export default function SettingsDocumentationPage() {
  return (
    <DocumentationLayout>
      <Stack spacing={2}>
        <Typography variant="h2">
          Settings
        </Typography>
        <Typography>
          Access your Settings page by clicking the <Settings color={'primary'} /> icon in the bottom left of the
          application. Here you can configure App Track from its original default settings to align more with your
          specific needs.
        </Typography>
        <Typography variant="h4">
          General
        </Typography>
        <Typography>
          Selecting the "Automatically Check for Updates" switch will let App Track periodically check if a newer
          version of App Track is available. If this switch is in the off position, you can use the button to manually
          check for updates.
        </Typography>
        <Typography>
          The appearance changes the theme of the application and allows you to choose from light, dark, or system
          default modes.
        </Typography>
        <Typography variant="h4">
          Application Tracking
        </Typography>
        <Typography>
          App Track monitors a "ghost" period, which is the number of days an application will be considered active
          without being update. After the allotted number of days sans updates, the application is considered "ghosted"
          (much like a bad date), and will no longer show on your Applications page.
        </Typography>
        <Typography>
          You still have the ability to access ghosted applications, either by searching for it on the Applications page
          or by navigating to the Company and selecting it from your list of applications there.
        </Typography>
        <Typography>
          <Link
            href={'/documentation/settings/application-events'}>Configure Application Events</Link> will allow you to
          alter the types of events (or sequential
          order of events) that are available to choose from.
        </Typography>
        <Typography>
          <Link href={'/documentation/settings/sankey-diagram.tsx'}>Configure Sankey Diagram</Link> will allow you to
          view a customizable visual representation of your applications.
        </Typography>
        <Typography variant="h4">
          Danger Zone
        </Typography>
        <Typography>
          The "danger zone" is where you would delete data. Currently, there are two options: Delete All Data, or Delete
          Application Data.
        </Typography>
        <Typography>
          Deleting All Data will remove all Application, Company, and Application Events data.
        </Typography>
        <Typography>
          Deleting Application Data will only remove applications; any Companes or Events will remain. Please note that
          both of the above actions are permanent. Once you delete data, it cannot be recovered.
        </Typography>
      </Stack>
    </DocumentationLayout>
  );
}