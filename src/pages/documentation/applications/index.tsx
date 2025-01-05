import DocumentationLayout from "@/components/documentation-layout";
import {Stack, Typography} from "@mui/material";

export default function ApplicationsDocumentationIndex() {
  return (
    <DocumentationLayout>
      <Stack spacing={2}>
        <Typography variant="h2">
          Applications
        </Typography>
      </Stack>
    </DocumentationLayout>
  )
}