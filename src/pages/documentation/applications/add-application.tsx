import {
  Link,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import DocumentationLayout from '@/components/documentation-layout';
import CheckIcon from '@mui/icons-material/Check';

export default function AddApplicationDocumentationPage() {
  const fields = [
    {
      name: 'Company',
      description: (
        <>
          The Company is a required field, if it does not exist yet, it needs to
          be created (The{' '}
          <Link href={'/documentation/companies/add-company'}>Add Company</Link>{' '}
          button on the <Link href={'/documentation/companies'}>Companies</Link>{' '}
          page).
        </>
      ),
      required: true,
    },
    {
      name: 'Initial Event',
      description: (
        <>
          If multiple{' '}
          <Link href={'/documentation/settings/application-events'}>
            Application Events
          </Link>{' '}
          are marked as Initial Events, a dropdown will appear to select which
          is appropriate. If only one Application Event is marked as Initial, no
          dropdown will appear, and that event will be selected by default.
        </>
      ),
      required: true,
    },
    {
      name: 'Date Applied',
      description: (
        <>The date of this application. It defaults to the current date.</>
      ),
      required: true,
    },
    {
      name: 'Role',
      description: <>The job title or role of the job</>,
      required: true,
    },
    {
      name: 'Salary',
      description: (
        <>
          Split into two fields, for the advertised range of the role if it
          exists
        </>
      ),
      required: false,
    },
    {
      name: 'Link',
      description: <>The URL to the job listing</>,
      required: false,
    },
    {
      name: 'Notes',
      description: (
        <>Any additional notes about the application you may wish to add</>
      ),
      required: false,
    },
  ];

  return (
    <DocumentationLayout>
      <Stack spacing={2}>
        <Typography variant="h2">Add a new Application</Typography>
        <Typography>
          Adding a new application is done by selecting the New Application
          button on the Applications page. This will bring up a modal to fill
          out the basic information for the application.
        </Typography>
        <Typography>
          The Submit button at the bottom will save the application, and bring
          you back to the Applications page.
        </Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="Modal Fields">
            <TableHead>
              <TableRow>
                <TableCell>Field</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Required</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {fields.map((field) => (
                <TableRow key={field.name}>
                  <TableCell>{field.name}</TableCell>
                  <TableCell>{field.description}</TableCell>
                  <TableCell>{field.required && <CheckIcon />}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </DocumentationLayout>
  );
}
