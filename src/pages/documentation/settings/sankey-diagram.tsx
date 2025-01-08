import {Stack, Typography} from "@mui/material";
import DocumentationLayout from "@/components/documentation-layout";
import SankeyGraph from "@/components/sankey-graph";

export default function SankeyDiagram() {
  return (
    <DocumentationLayout>
      <Stack spacing={2}>
        <Typography variant="h2">
          Sankey Diagram
        </Typography>
        <SankeyGraph/>
        <Typography>
          Sankey Diagrams show a visual representation of how many applications have progressed with a simple visual of
          bars and nodes. Each node represents an application event, and the size of the bar indicates the number of
          applications that have taken the path between two events. It can be overwhelming to have a node for each
          Application Event, so here you can pick what evens you want to track.
        </Typography>
      </Stack>
    </DocumentationLayout>
  )
}