import { Link, Stack, Typography } from '@mui/material';
import { Settings } from '@mui/icons-material';
import DocumentationLayout from '@/components/documentation-layout';
import React from 'react';

export default function SettingsDocumentationPage() {
  return (
    <DocumentationLayout>
      <Stack spacing={2}>
        <Typography variant="h2">Settings</Typography>
        <Typography>
          To access the Settings page, click the{' '}
          <Settings color={'primary'} fontSize={'small'} /> ion in the bottom
          left of the app. This page can be used to configure App Track from its
          default settings to better align with your specific needs.
        </Typography>
        <Typography variant="h4">General</Typography>
        <Typography>
          App Track has the ability to let you know if App updates are
          available. To enable this, select the &#34;Automatically Check for
          Updates&#34;. If this switch is not enabled, you also have the ability
          to use the button to manually check for updates.
        </Typography>
        <Typography>
          Appearance allows you to change the theme of the app. Options
          available are the standard Light, Dark, or System Default modes.
        </Typography>
        <Typography variant="h4">Application Tracking</Typography>
        <Typography>
          Unlike online dating, App Track can actually can let you know when
          you&#39;re being ghosted. The app monitors a &#34;ghost&#34; period,
          which is the number of days that an application will still be
          considered active without an update. After the allotted number of days
          sans updates, the application will be considered &#34;ghosted&#34; and
          will no longer show on your Applications page.
        </Typography>
        <Typography>
          You will still have the ability to access ghosted applications, either
          by searching for it on the Applications page or by navigating to the
          Company and selecting it from the list of previous applications.
        </Typography>
        <Typography>
          <Link href={'/documentation/settings/application-events'}>
            Configure Application Events
          </Link>{' '}
          will allow you to alter the types of events (or sequential order of
          events) that are available to choose from.
        </Typography>
        <Typography>
          <Link href={'/documentation/settings/sankey-diagram'}>
            Configure Sankey Diagram
          </Link>{' '}
          will allow you to view a customizable visual representation of the
          lifeline of your applications.
        </Typography>
        <Typography variant="h4">Danger Zone</Typography>
        <Typography>
          The &#34;Danger Zone&#34; is where you can delete data. Currently,
          there are two available options: Delete All Data, or Delete
          Application Data.
        </Typography>
        <Typography>
          Deleting All Data will remove all Application, Company, and
          Application Events data.
        </Typography>
        <Typography>
          Deleting Application Data will only remove applications; any Companies
          added or Events will remain.
        </Typography>
        <Typography>
          Please Note: Both of the above actions with deleting data are
          permanent. Once data is delivered, it cannot be recovered.
        </Typography>
      </Stack>
    </DocumentationLayout>
  );
}
