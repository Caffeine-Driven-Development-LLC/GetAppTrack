import {Stack, Typography} from "@mui/material";
import DocumentationLayout from "@/components/documentation-layout";

export default function Settings() {
  return (
    <DocumentationLayout>
      <Stack spacing={2}>
        <Typography variant="h2">
          Settings
        </Typography>
        <Typography>
          On the left side of the application there is a set of icons, one for each page. Clicking the gear icon at the
          bottom of this list will open the settings page.
        </Typography>
        <Typography>
          There is a ghost period that can be set, This is the number of days an application will stay on the
          application list if no new events take place.
        </Typography>
      </Stack>
    </DocumentationLayout>
  )
}