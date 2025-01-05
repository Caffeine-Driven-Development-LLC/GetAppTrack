import {Stack, Typography} from "@mui/material";
import DocumentationLayout from "@/components/documentation-layout";

export default function DangerZone() {
  return (
    <DocumentationLayout>
      <Stack spacing={2}>
        <Typography variant="h2">
          Danger Zone
        </Typography>
        <Typography>
          The danger zone is where you would delete data. Currently there are 2 options, delete all data, or delete
          Application data. Deleting all data will remove all Application, Company, and Application Events data.
          Deleting Application data will only remove applications, any Companies or application events have been added
          or modified will be retained.
        </Typography>
        <Typography>
          Keep in mind, both of these actions are irreversible. once data is deleted it cannot be recovered.
        </Typography>
      </Stack>
    </DocumentationLayout>
  )
}