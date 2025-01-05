import React from "react";
import {useRouter} from "next/navigation";
import {Container, Link, List, ListItem, Stack} from "@mui/material";

interface DocumentationLayoutProps {
  children: React.ReactNode;
}

const DocumentationLayout: React.FC<DocumentationLayoutProps> = ({children}) => {

  const router = useRouter();

  return (
    <Container>
      <Stack direction={'row'} spacing={2}>
        <List
          sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItem>
            <Link
              component="button"
              fontFamily="Roboto"
              onClick={() => router.push('/documentation/getting-started')}
            >
              Getting Started
            </Link>
          </ListItem>
          <ListItem>
            <Link
              component="button"
              fontFamily="Roboto"
              onClick={() => router.push('/documentation/settings')}
            >
              Settings
            </Link>
          </ListItem>
          <List component="div" disablePadding>
            <ListItem sx={{pl: 4}}>
              <Link
                component="button"
                fontFamily="Roboto"
                onClick={() => router.push('/documentation/settings/application-events')}
              >
                Application Events
              </Link>
            </ListItem>
            <ListItem sx={{pl: 4}}>
              <Link
                component="button"
                fontFamily="Roboto"
                onClick={() => router.push('/documentation/settings/sankey-diagram')}
              >
                Sankey Diagrams
              </Link>
            </ListItem>
            <ListItem sx={{pl: 4}}>
              <Link
                component="button"
                fontFamily="Roboto"
                onClick={() => router.push('/documentation/settings/danger-zone')}
              >
                Danger Zone
              </Link>
            </ListItem>
          </List>
        </List>
        <Container>
          {children}
        </Container>
      </Stack>
    </Container>
  )
}
export default DocumentationLayout;