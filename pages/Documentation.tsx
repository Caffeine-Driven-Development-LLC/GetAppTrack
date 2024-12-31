import Head from "next/head";
import {List, ListItem, Stack, Typography} from "@mui/material";

export default function Documentation() {
  return (
    <div>
      <Head>
        <title>App Track - Documentation</title>
      </Head>
      <Stack spacing={2}>
        <Typography variant="h2">Documentation</Typography>
        <Typography variant="h3">Getting Started</Typography>
        <Typography>
          When you first download App Track it comes with a default configuration that should fit most people's needs,
          but it is recommend to view and make any changes you would like early on.
        </Typography>
        <Typography variant="h4">The Settings page</Typography>
        <Typography>
          On the left side of the application there is a set of icons, one for each page. Clicking the gear icon at the
          bottom of this list will open the settings page.
        </Typography>
        <Typography>
          There is a ghost period that can be set, This is the number of days an application will stay on the
          application list if no new events take place.
        </Typography>
        <Typography variant="h4">Application Events</Typography>
        <Typography>App Track applications follow a flow of steps called `Application Events` These are the states that
          an application can be in at any given time, and what what events can come next.
        </Typography>
        <Typography>
          On the Settings page there is button `Configure Application Events` that will bring up the Application Events
          configuration page.
        </Typography>
        <Typography>
          Events can be tagged as either an `Initial Step` or `Always Available`
        </Typography>
        <List>
          <ListItem>
            <Typography variant={'h6'}>Initial Steps:</Typography>
            <Typography>An event that can start the
              application
              process, the easiest example is simply the Applied event to note you have applied for a position, but this
              might not be comprehensive enough, a Referred event or even Head Hunted event have been added in the
              default
              configurations.</Typography>
          </ListItem>
          <ListItem>
            <Typography variant={'h6'}>Always Available:</Typography>
            <Typography>These events are always
              available when
              picking the next step of an application, at any time you can chose to withdraw your application, or you
              may
              receive a rejection, but you can add or remove more events as you see fit. </Typography>
          </ListItem>
        </List>
        <Typography>
          Events can be added using the Add New Event button on the Configure Application Events page. This brings up a
          window where you can name your event, mark it as an Initial Step or Always Available, and add any possible
          next steps that can come after it. This window is the same if you select the pencil icon in the list of events
          if you wish to edit an existing event.
        </Typography>
        <Typography>
          You can also order the events, This order is used to determine how far an application has progressed, and will
          effect the order that applications are displayed in the application list. It is best to order events so the
          further down in the list, the further down in the application process they are.
        </Typography>
        <Typography variant="h4">Sankey Diagrams</Typography>
        <Typography>
          Sankey Diagrams show a visual representation of how many applications have progressed with a simple visual of
          bars and nodes. Each node represents an application event, and the size of the bar indicates the number of
          applications that have taken the path between two events. It can be overwhelming to have a node for each
          Application Event, so here you can pick what evens you want to track.
        </Typography>
      </Stack>
    </div>
  )
}