import React from 'react';
import { Link, List, ListItem } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function DocumentationNavigationList() {
  const router = useRouter();

  const pages = [
    { name: 'Getting Started', href: '/documentation/getting-started' },
    {
      name: 'Applications',
      href: '/documentation/applications',
      children: [
        {
          name: 'Add Application',
          href: '/documentation/applications/add-application',
        },
        {
          name: 'Application Details',
          href: '/documentation/applications/application-details',
        },
      ],
    },
    {
      name: 'Companies',
      href: '/documentation/companies',
      children: [
        { name: 'Add Company', href: '/documentation/companies/add-company' },
        {
          name: 'Company Details',
          href: '/documentation/companies/company-details',
        },
      ],
    },
    {
      name: 'Settings',
      href: '/documentation/settings',
      children: [
        {
          name: 'Application Events',
          href: '/documentation/settings/application-events',
        },
        {
          name: 'Sankey Diagrams',
          href: '/documentation/settings/sankey-diagram',
        },
      ],
    },
  ];

  return (
    <List
      sx={{ width: '100%', maxWidth: 300, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      {pages.map((page) => (
        <React.Fragment key={page.name}>
          <ListItem>
            <Link component="button" onClick={() => router.push(page.href)}>
              {page.name}
            </Link>
          </ListItem>
          {page.children && (
            <List component="div" disablePadding>
              {page.children.map((child) => (
                <ListItem key={child.name} sx={{ pl: 4 }}>
                  <Link
                    component="button"
                    onClick={() => router.push(child.href)}
                  >
                    {child.name}
                  </Link>
                </ListItem>
              ))}
            </List>
          )}
        </React.Fragment>
      ))}
    </List>
  );
}
