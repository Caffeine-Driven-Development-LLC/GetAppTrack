import DocumentationLayout from '@/components/documentation-layout';
import { Link, Stack, Typography } from '@mui/material';

export default function CompanyDetailsDocumentationPage() {
  return (
    <DocumentationLayout>
      <Stack spacing={2}>
        <Typography variant="h2">Company Details</Typography>
        <Typography>
          Information about the company including any notes on the company, the list of applications, and a <Link
          href={'/documentation/settings/sankey-diagram'}>Sankey Diagram</Link> of applications sent to the company can
          be found on the company details page.
        </Typography>
        <Typography>
          The application list contains relevant data such as the role, A salary range if it was provided, and the date
          the application was started. Selecting any application in the list will navigate to that <Link
          href={'/documentation/applications/application-details'}>Applications Details</Link> page.
        </Typography>
        <Typography>
          If a career page url, or homepage url was provided for, buttons will appear for both that will open the
          provided url in a browser.
        </Typography>
        <Typography>
          The Edit button allows you to change any of the Company information, as well as delete the company. Please
          note this acting is irreversible, and can not be undone.
        </Typography>
      </Stack>
    </DocumentationLayout>
  );
}

