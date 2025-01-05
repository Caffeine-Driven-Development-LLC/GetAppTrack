import DocumentationLayout from "@/components/documentation-layout";
import {Stack, Typography} from "@mui/material";

export default function CompaniesDocumentationIndex() {
  return (
    <DocumentationLayout>
      <Stack spacing={2}>
        <Typography variant="h2">
          Companies
        </Typography>
      </Stack>
    </DocumentationLayout>
  )
}