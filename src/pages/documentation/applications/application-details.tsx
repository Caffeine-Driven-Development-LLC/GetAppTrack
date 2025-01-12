import DocumentationLayout from '@/components/documentation-layout';
import { Stack, Typography } from '@mui/material';

export default function ApplicationDetails() {
  return (
    <DocumentationLayout>
      <Stack spacing={2}>
        <Typography variant="h2">Application Details</Typography>
        <Typography>
          All information for an application will be displayed on this page.
          Including A link to the job description if it was provided, The salary
          range if that was provided, and a List of events that have happened to
          the application.
        </Typography>
        <Typography>
          The Edit button allows you to change any of the Applications
          information, as well as delete the application. Please note this
          acting is irreversible, and can not be undone.
        </Typography>
        <Typography>
          The Add Note button will let you add anything you like to the
          applications timeline without changing it&#39;s current status.
        </Typography>
      </Stack>
    </DocumentationLayout>
  );
}
