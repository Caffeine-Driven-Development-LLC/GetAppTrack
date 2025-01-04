import DocumentationLayout from "@/app/components/DocumentationLayout";
import {Typography} from "@mui/material";

export default function SankeyDiagram() {
    return (
        <DocumentationLayout>
            <Typography>
                Sankey Diagrams show a visual representation of how many applications have progressed with a simple visual of
                bars and nodes. Each node represents an application event, and the size of the bar indicates the number of
                applications that have taken the path between two events. It can be overwhelming to have a node for each
                Application Event, so here you can pick what evens you want to track.
            </Typography>
        </DocumentationLayout>
    )
}