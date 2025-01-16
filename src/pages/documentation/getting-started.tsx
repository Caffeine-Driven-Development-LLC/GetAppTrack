import React from 'react';
import {
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import DocumentationLayout from '@/components/documentation-layout';
import { Business, Settings, ViewList } from '@mui/icons-material';

export default function GettingStarted() {
  return (
    <DocumentationLayout>
      <Stack spacing={2}>
        <Typography variant="h2">Getting Started</Typography>
        <Typography>Let&#39;s go over some basic navigation!</Typography>
        <Typography>
          An application has 3 main pages accessible, as indicated by the icons
          on the left side.
        </Typography>
        <List>
          <ListItem
            disablePadding
            component={Link}
            href="/documentation/applications"
          >
            <ListItemIcon>
              <ViewList color={'primary'} />
            </ListItemIcon>
            <ListItemText primary="Applications" />
          </ListItem>
          <ListItem
            disablePadding
            component={Link}
            href="/documentation/companies"
          >
            <ListItemIcon>
              <Business color={'primary'} />
            </ListItemIcon>
            <ListItemText primary="Companies" />
          </ListItem>
          <ListItem
            disablePadding
            component={Link}
            href="/documentation/settings"
          >
            <ListItemIcon>
              <Settings color={'primary'} />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
        </List>
        <Typography>
          App Track helps organize your job search by organizing the list of
          positions you have applied to. Each application is for a specific
          company and you can create and and manage the companies in the
          Companies tab. Likewise, applications can be created or managed in the
          applications tab.
        </Typography>
        <Typography>
          Every job application will have a series of events that take place as
          the hiring process unfolds. For instance, passing a phone screen,
          scheduling an interview, or receiving a verbal offer. App Track will
          help keep you organized by classifying which stage each of your
          applications are in at a quick glance.
        </Typography>
        <Typography>
          When you first download App Track, it comes &#34;turnkey ready&#34;
          with a default set of events applicable to standard hiring processes.
          That said, App Track can be configured at any point, and we encourage
          you to make any changes that you would like to incorporate! This can
          be done in the Settings {'>'}{' '}
          <Link href="/documentation/settings/application-events">
            Application Events
          </Link>{' '}
          page.
        </Typography>
        <Typography>
          Once your Application events are set up, its time to get organized! To
          create an application, you will first need to{' '}
          <Link href={'/documentation/companies/add-company'}>
            add the company
          </Link>{' '}
          if it does not already exist. Once you have your Company ready, select
          the{' '}
          <Link href={'/documentation/applications/add-application'}>
            New Application
          </Link>{' '}
          button on the Applications page, and enter your details. From there,
          the application will be added to your list and can be managed
          accordingly.
        </Typography>
      </Stack>
    </DocumentationLayout>
  );
}
