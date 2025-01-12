import DocumentationLayout from '@/components/documentation-layout';
import { Link, Stack, Typography } from '@mui/material';

export default function ApplicationsDocumentationIndex() {
  return (
    <DocumentationLayout>
      <Stack spacing={2}>
        <Typography variant="h2">Applications</Typography>
        <Typography>
          The Application Page is the heart of the application, The default view
          gives a list of all active applications sorted so that applications
          that have progressed further hare at the top and easy to find.
        </Typography>
        <Typography>
          Each application is shown with its most relevant data. To the left
          there is the position name, as well as the company name. To the right
          is the most recent event that has happened to the application and how
          long ago it happened. To the far right is a visual indicator of how
          close the applications is to becoming ghosted. The longer the bar, the
          longer the applicants has grown stale.
        </Typography>
        <Typography>
          Selecting an application will take you to the{' '}
          <Link href={'/documentation/applications/application-details'}>
            Application&#39;s Details
          </Link>{' '}
          page where you can see more information about the application
          including a timeline of events.
        </Typography>
        <Typography>
          You are able to search for any application by its name or company
          using the search bar. This will display all applications, even ones
          who are no longer active.
        </Typography>
        <Typography>
          To add a new application, click the{' '}
          <Link href={'/documentation/applications/add-application'}>
            Add Application
          </Link>{' '}
          button. This will take you to a form where you can fill out the
          application&#39;s name and company.
        </Typography>
      </Stack>
    </DocumentationLayout>
  );
}
