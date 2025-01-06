import Head from "next/head";
import {Link, Stack, Typography} from "@mui/material";
import FaqQuestionAndAnswer from "@/components/faq_question_and_answer";

export default function Faq() {

  return (
    <div>
      <Head>
        <title>App Track - FAQ</title>
      </Head>
      <Stack spacing={2}>
        <Typography variant="h2">Frequently Asked Questions</Typography>
        <FaqQuestionAndAnswer question="Wait, it's free? Whats the catch?">
          <Typography>
            There is no catch. Your data is not shared with anyone, and there is no charge for the application. This application was created as a side project and I can&#39;t in good conscience ask for payment or sell data from this app to try and make a profit.
          </Typography>
          <Typography>
            The code for this is open-sourced so anyone can verify the privacy claims, or help contribute however they&#39;d like.
          </Typography>
        </FaqQuestionAndAnswer>
        <FaqQuestionAndAnswer question="Can the application flow be customized?">
          <Typography>
            Yes! There is a system built so that you can track your application process any way you&#39;d like. If you would like a slimmed down process, you can remove any steps you feel are unnecessary. Or, go ahead an add any steps you feel are missing.
          </Typography>
        </FaqQuestionAndAnswer>
        <FaqQuestionAndAnswer question="Why are logos are not updating properly?">
          <Typography>
            Try uploading a .png file.
          </Typography>
          <Typography>
            This is a known issue, and I am working on it.
          </Typography>
        </FaqQuestionAndAnswer>
        <FaqQuestionAndAnswer question="How can I contribute?">
          <Typography>
            The project is open-sourced on <Link href="">github</Link>. We would love for you to come help with either
            bug reports or new features! Take a look at the <Link href="">Contributing</Link> page to get started. {
            // TODO Update this one the github page is setup
          }
          </Typography>
        </FaqQuestionAndAnswer>
      </Stack>
    </div>
  )
}