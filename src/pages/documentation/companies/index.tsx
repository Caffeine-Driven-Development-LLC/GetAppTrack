import DocumentationLayout from '@/components/documentation-layout';
import { Link, Stack, Typography } from '@mui/material';

export default function CompaniesDocumentationIndex() {
  return (
    <DocumentationLayout>
      <Stack spacing={2}>
        <Typography variant="h2">
          Companies
        </Typography>
        <Typography>
          Companies are listed and managed from this page, basic information is displayed for each company including the
          total applications sent and how long its been since the last application to the company.
        </Typography>
        <Typography>
          Companies are sorted by alphabetical order, but the star in the upper right can be selected to favorite a
          company to make sure it appears near the top of the list. Companies can also be searched for using the search
          bar.
        </Typography>
        <Typography>
          Selecting any company will take you to that <Link href={'/documentation/companies/company-details'}>companies
          details</Link> page. where you can find
          and edit all of the tracked information for a company, as well as a list of applications for the company.
        </Typography>
        <Typography>
          The Add Company button will bring up a modal asking for more information about the company to be added. See
          the <Link href={'/documentation/companies/add-company'}>Add Company</Link> page for more documentation on
          this.
        </Typography>
      </Stack>
    </DocumentationLayout>
  );
}