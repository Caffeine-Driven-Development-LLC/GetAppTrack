import {Stack, Typography} from "@mui/material";
import DocumentationLayout from "@/components/documentation-layout";

export default function AddApplicationDocumentationPage() {
  return (
    <DocumentationLayout>
      <Stack spacing={2}>
        <Typography variant="h2">
          Add a new Application
        </Typography>
        <Typography>
          Adding a new application is done by selecting the New Application button on the Applications page. This will bring up a modal to fill out the basic information for the application.
        </Typography>
        <Typography>
          Some fields are required, including the Company, So that may need
        </Typography>
      </Stack>
    </DocumentationLayout>
  )
}