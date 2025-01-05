import React from "react";
import {Link, List, ListItem, ListItemIcon, ListItemText, Stack, Typography} from "@mui/material";
import DocumentationLayout from "@/components/documentation-layout";
import {Business, Settings, ViewList} from "@mui/icons-material";


export default function GettingStarted() {
  return (
    <DocumentationLayout>
      <Stack spacing={2}>
        <Typography variant="h2">
          Getting Started
        </Typography>
        <Typography>
          Lets go over some basic navigation. The application has 3 main pages accessible by the icons on the left side of the application.
        </Typography>
        <List>
          <ListItem disablePadding>
            <ListItemIcon>
              <ViewList color={"primary"}/>
            </ListItemIcon>
            <ListItemText primary="Applications"/>
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>
              <Business color={"primary"}/>
            </ListItemIcon>
            <ListItemText primary="Companies" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>
              <Settings color={"primary"}/>
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
        </List>
        <Typography>
          Part of the way App Track helps organize your applications is by tracking who you have applied to, Each application is for a specific company and you can create and and manage the companies in the companies tab. Likewise, applications can be created or managed in the applications tab.
        </Typography>
        <Typography>
          Applications will have a series of events that take place. Say you have an interview scheduled, or you pass a phone screen. App Track will show you what applications are in what state with just a quick glance.
        </Typography>
        <Typography>
          When you first download App Track it comes with a default set of events that should fit most people&apos;s needs, but it is recommend to view and make any changes you would like early on. This can be done in the Settings, <Link href="/documentation/settings/application-events">Application Events</Link> page.
        </Typography>
        <Typography>
          Once your Application events are setup. It&apos;s time to get to work! To create an application, you need to first <Link href={"/documentation/companies/add-company"}>create the company</Link> if it does not already exist. Then select the <Link href={"/documentation/applications/add-application"}>New Application</Link> button on the Applications page and enter the details! From there the application will be added to the list and can be managed from there.
        </Typography>
      </Stack>
    </DocumentationLayout>
  )
}
