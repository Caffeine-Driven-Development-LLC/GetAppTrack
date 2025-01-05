import React from "react";
import {Link, List, ListItem} from "@mui/material";
import {useRouter} from "next/navigation";

export default function DocumentationNavigationList() {
  const router = useRouter();

  const pages = [
    {name: 'Getting Started', href: '/documentation/getting-started'},
    {
      name: 'Settings',
      href: '/documentation/settings',
      children: [
        {name: 'Application Events', href: '/documentation/settings/application-events'},
        {name: 'Sankey Diagrams', href: '/documentation/settings/sankey-diagram'},
        {name: 'Danger Zone', href: '/documentation/settings/danger-zone'},
      ]
    },
    {name: 'Applications', href: '/documentation/applications'},
    {name: 'Companies', href: '/documentation/companies'},
  ]

  return (
    <List
      sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      {
        pages.map((page) => (
          <React.Fragment key={page.name}>
            <ListItem>
              <Link
                component="button"
                fontFamily="Roboto"
                onClick={() => router.push(page.href)}
              >
                {page.name}
              </Link>
            </ListItem>
            {page.children && (
              <List component="div" disablePadding>
                {page.children.map((child) => (
                  <ListItem key={child.name} sx={{pl: 4}}>
                    <Link
                      component="button"
                      fontFamily="Roboto"
                      onClick={() => router.push(child.href)}
                    >
                      {child.name}
                    </Link>
                  </ListItem>
                ))}
              </List>
            )}
          </React.Fragment>
        ))
      }
    </List>
  )
}