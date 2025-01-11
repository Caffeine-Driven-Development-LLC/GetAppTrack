import {Link, Paper, Stack, Typography} from "@mui/material";
import DocumentationLayout from "@/components/documentation-layout";
import ExampleSankeyGraph from "@/components/example-sankey-graph";
import {Edit} from '@mui/icons-material'

export default function SankeyDiagramDocumentationPage() {
  return (
    <DocumentationLayout>
      <Stack spacing={2}>
        <Typography variant="h2">
          Sankey Diagram
        </Typography>
        <Paper sx={{padding: 2}} elevation={0}>
          <ExampleSankeyGraph/>
          <Typography variant="body2">
            An example Sankey Diagram
          </Typography>
        </Paper>
        <Typography>
          Sankey Diagrams show a visual representation of how many applications have progressed with a simple visual of
          bars and nodes. Each node represents an <Link href={"/documentation/settings/application-events"}>Application
          Event</Link>, and the size of the bar indicates the number of applications that have taken the path between
          two events. It can be overwhelming to have a node for each Application Event, so here you can pick what evens
          you want to track.
        </Typography>
        <Typography>
          To create a node, simply click the Add Node button. This will ask you what you would like to name the node and
          the color it should appear as in the graph. After the node is created, you can edit it by selecting the <Edit
          fontSize="small"/> icon next to it. Here you can chose Application Events to associate with this node, change
          its name/color, or delete it altogether.
        </Typography>
      </Stack>
    </DocumentationLayout>
  )
}