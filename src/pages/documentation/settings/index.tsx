import {Link, Stack, Typography} from "@mui/material";
import {Settings} from "@mui/icons-material";
import DocumentationLayout from "@/components/documentation-layout";
import React from "react";

export default function SettingsDocumentationPage() {
  return (
    <DocumentationLayout>
      <Stack spacing={2}>
        <Typography variant="h2">
          Settings
        </Typography>
        <Typography>
          The Settings page is accessible by clicking the <Settings color={"primary"}/> icon in the bottom left of the
          application. Here you can configure App Track to your needs.
        </Typography>
        <Typography variant="h4">
          General
        </Typography>
        <Typography>
          Selecting automatically check for updates, will let the application periodically check if a newer version of
          the App Track application is released. Turning this off presents a button you can use to manually check for
          updates.
        </Typography>
        <Typography>
          The appearance simply changes the theme of the application, and allows you to pick from light, dark, or system
          default.
        </Typography>
        <Typography variant="h4">
          Application Tracking
        </Typography>
        <Typography>
          The &#34;ghost&#34; period is the number of days an application will be considered active if it is not
          updated. After the allotted number of days with no updates, the application is considered &#34;ghosted&#34;,
          and will no long show on the Applications page. Any ghosted application can still be accessed, either by
          searching for it on the applications page or by navigating to the company and selecting it in the list of
          applications presented there.
        </Typography>
        <Typography>
          Selecting the Configure Application Events button will allow you to change the events and order of events that
          an application can use. See the <Link href={"/documentation/settings/application-events"}>Configure
          Application Events</Link> section for more information around what configurations are possible for events.
        </Typography>
        <Typography>
          Selecting the Configure Sankey Diagram button will allow you customize the graphs in the company details page.
          The <Link href={"/documentation/settings/sankey-diagram.tsx"}>Configure Sankey Diagram</Link> page has more
          documentation around what is possible with this graph.
        </Typography>
        <Typography variant="h4">
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