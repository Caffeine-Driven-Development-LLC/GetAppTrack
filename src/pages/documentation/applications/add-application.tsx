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
          Company is a required field. If the company does not yet exist im the
          drop down menu, it will need to be added (the{' '}
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
        <Stack spacing={2}>
          <Typography>The event that started the application.</Typography>
          <Typography>
            <Link href={'/documentation/settings/application-events.tsx'}>
              Application Events
            </Link>{' '}
            can be configured in the settings page, if multiple events are
            marked as possible a possible initial event, a dropdown is displayed
            for you to select from.
          </Typography>
        </Stack>
      ),
      required: true,
    },
    {
      name: 'Date Applied',
      description: (
        <>
          The date of your entry. When entering events, it will default to the
          current date.
        </>
      ),
      required: true,
    },
    {
      name: 'Role',
      description: <>The title of the position.</>,
      required: true,
    },
    {
      name: 'Salary',
      description: (
        <>
          Two fields to allow you to enter the advertised range on the role
          listing.
        </>
      ),
      required: false,
    },
    {
      name: 'URL',
      description: <>The link to the URL for the listing.</>,
      required: false,
    },
    {
      name: 'Notes',
      description: (
        <>
          Any additional notes or supporting information that you may wish to
          add with your entry.
        </>
      ),
      required: false,
    },
  ];

  return (
    <DocumentationLayout>
      <Stack spacing={2}>
        <Typography variant="h2">Add a new Application</Typography>
        <Typography>
          To add a new opportunity to your list, go to the Applications page and
          click the New Application button.
        </Typography>
        <Typography>
          A window will pop up to provide supporting information for your entry.
          Once you&#39;ve entered the details, click the Submit button to return
          to the main Applications page.
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
