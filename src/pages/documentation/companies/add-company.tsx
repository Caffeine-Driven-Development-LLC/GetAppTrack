import {Stack, Typography} from "@mui/material";
import DocumentationLayout from "@/components/documentation-layout";

export default function AddCompanyDocumentationPage() {
  return (
    <DocumentationLayout>
      <Stack spacing={2}>
        <Typography variant="h2">
          Add a new company
        </Typography>
      </Stack>
    </DocumentationLayout>
  )
}