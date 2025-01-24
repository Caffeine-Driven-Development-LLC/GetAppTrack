import { Link, Paper, Stack, Typography } from '@mui/material';
import DocumentationLayout from '@/components/documentation-layout';
import ExampleSankeyGraph from '@/components/example-sankey-graph';
import { Edit } from '@mui/icons-material';
import Head from 'next/head';
import React from 'react';

export default function SankeyDiagramDocumentationPage() {
  return (
    <DocumentationLayout>
      <Head>
        <title>App Track - Sankey Diagrams</title>
      </Head>
      <Stack spacing={2}>
        <Typography variant="h2">Sankey Diagrams</Typography>
        <Paper sx={{ padding: 2 }} elevation={0}>
          <Typography variant="body2">An example Sankey Diagram</Typography>
          <ExampleSankeyGraph />
        </Paper>
        <Typography>
          Sankey Diagrams are a visual representation of the lifecycle of your
          applications, consisting of a Visual Bar and Nodes.
        </Typography>
        <Typography>
          Nodes represent an{' '}
          <Link href={'/documentation/settings/application-events'}>
            Application Event
          </Link>
          , and the size of the Visual bar indicates the number of applications
          that have taken the path between the two events.
        </Typography>
        <Typography>
          It can be overwhelming to have a node for each Application Event, so
          here you can customize which events you want to track.
        </Typography>
        <Typography>
          To create a node, simply click the Add Node button.
        </Typography>
        <Typography>
          Enter the desired name of the node and choose its corresponding color
          for the graph. After the node is created, you can edit it by selecting
          the <Edit fontSize="small" /> icon next to it. When editing, you have
          the ability to change the Event associated to the node, the
          name/color, or delete it entirely.
        </Typography>
      </Stack>
    </DocumentationLayout>
  );
}
