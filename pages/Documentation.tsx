import Head from "next/head";
import {Typography} from "@mui/material";

export default function Documentation() {
  return (
    <div>
      <Head>
        <title>App Track - Documentation</title>
      </Head>
      <Typography>
        App Track is a way to help you stay organized within your job search! We all know how frustrating it can be to
        view countless listings, not realize whether you've already seen them, already applied, have already received a
        rejection, etc. By logging the opportunities you've applied for in App Track, you can keep yourself organized,
        up-to-date, and agile within your job search.
      </Typography>
    </div>
  )
}