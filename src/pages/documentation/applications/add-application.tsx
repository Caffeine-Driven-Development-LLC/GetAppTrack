import {Stack, Typography} from "@mui/material";
import DocumentationLayout from "@/components/documentation-layout";

export default function AddApplicationDocumentationPage() {
  return (
    <DocumentationLayout>
      <Stack spacing={2}>
        <Typography variant="h2">
          Add a new Application
        </Typography>
      </Stack>
    </DocumentationLayout>
  )
}