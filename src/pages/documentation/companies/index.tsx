import DocumentationLayout from '@/components/documentation-layout';
import { Link, Stack, Typography } from '@mui/material';
import Head from 'next/head';
import React from 'react';

export default function CompaniesDocumentationIndex() {
  return (
    <DocumentationLayout>
      <Head>
        <title>App Track - Companies</title>
      </Head>
      <Stack spacing={2}>
        <Typography variant="h2">Companies</Typography>
        <Typography>
          Companies that you&#39;re applying to are managed from this page.
          Basic information is displayed for each company, including the total
          number of applications sent and how long it has been since your last
          application to the company.Companies that you&#39;re applying to are
          managed from this page. Basic information is displayed for each
          company, including the total number of applications sent and how long
          it has been since your last application to the company.Companies that
          you&#39;re applying to are managed from this page. Basic information
          is displayed for each company, including the total number of
          applications sent and how long it has been since your last application
          to the company.
        </Typography>
        <Typography>
          Companies are listed in alphabetical order by default. If you Favorite
          a company (using the star in the upper right) applications to that
          company will appear at the top of the list. You can also search for
          Companies via the search bar.
        </Typography>
        <Typography>
          Selecting any company will take you to the{' '}
          <Link href={'/documentation/companies/company-details'}>
            Company Details
          </Link>{' '}
          page, where you can find and edit any supporting information that
          you&#39;ve entered about an organization.
        </Typography>
        <Typography>
          The Add Company button will bring up a window asking for more
          information about the company to be added. For additional information,
          see the{' '}
          <Link href={'/documentation/companies/add-company'}>Add Company</Link>{' '}
          page for more details.
        </Typography>
      </Stack>
    </DocumentationLayout>
  );
}
