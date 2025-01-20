import {
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
import { Delete, Edit } from '@mui/icons-material';
import CheckIcon from '@mui/icons-material/Check';

export default function AddCompanyDocumentationPage() {
  const fields = [
    {
      name: 'Name',
      description: (
        <>
          The name of the organization.
        </>
      ),
      required: true,
    },
    {
      name: 'Home page',
      description: (
        <>
          The URL of the company home page.
        </>
      ),
      required: false,
    },
    {
      name: 'Career page',
      description: (
        <>
          The URL of the company career page.
        </>
      ),
      required: false,
    },
    {
      name: 'Notes',
      description: (
        <>
          Any notes or supporting information that you wish to add.
        </>
      ),
      required: false,
    },
  ];

  return (
    <DocumentationLayout>
      <Stack spacing={2}>
        <Typography variant="h2">Add a new company</Typography>
        <Typography>
          You can add a new Company by clicking the Add Company button at the top of the Companies page. This will bring
          up a window to provide basic information for the organization.
        </Typography>
        <Typography>
          A logo can be added by selecting the <Edit fontSize="small" /> icon. This will open a file chooser where you
          can select a .png, .jpeg .gif, or .webp file. There is also a <Delete fontSize="small" /> icon to remove the logo.
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
