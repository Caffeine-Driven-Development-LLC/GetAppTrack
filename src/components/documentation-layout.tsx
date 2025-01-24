'use client';

import React from 'react';
import {
  Container,
  Drawer,
  Fab,
  Stack,
  Theme,
  useMediaQuery,
} from '@mui/material';
import DocumentationNavigationList from '@/components/documentation-navigation-list';
import MenuIcon from '@mui/icons-material/Menu';

interface DocumentationLayoutProps {
  children: React.ReactNode;
}

const DocumentationLayout: React.FC<DocumentationLayoutProps> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const isXsScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm')
  );

  const NavigationContent = isXsScreen ? (
    <Drawer open={isOpen} onClose={() => setIsOpen(false)}>
      <DocumentationNavigationList />
    </Drawer>
  ) : (
    <DocumentationNavigationList />
  );

  const floatingActionButton = isXsScreen ? (
    <Fab
      aria-label="open drawer"
      onClick={() => setIsOpen(true)}
      sx={{
        position: 'fixed',
        bottom: 10,
        right: 10,
      }}
    >
      <MenuIcon />
    </Fab>
  ) : (
    <></>
  );

  return (
    <Container>
      <Stack direction={'row'} spacing={2}>
        {NavigationContent}
        {floatingActionButton}
        <Container>{children}</Container>
      </Stack>
    </Container>
  );
};

export default DocumentationLayout;
