import DocumentationLayout from '@/components/documentation-layout';
import { Stack, Typography } from '@mui/material';

export default function CompanyDetailsDocumentationPage() {
  return (
    <DocumentationLayout>
      <Stack spacing={2}>
        <Typography variant="h2">Company Details</Typography>
      </Stack>
    </DocumentationLayout>
  );
}
