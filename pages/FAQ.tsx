import Head from "next/head";
import {Link, Stack, Typography} from "@mui/material";
import FaqQuestionAndAnswer from "@/app/components/faq_question_and_answer";

export default function FAQ() {

  return (
    <div>
      <Head>
        <title>App Track - FAQ</title>
      </Head>
      <Stack spacing={2}>
        <Typography variant="h2">Frequently Asked Questions</Typography>
        <FaqQuestionAndAnswer question="Wait, it's free? Whats the catch?">
          <Typography>
            There is no catch, Your data is not shared with anyone, and there is no charge for the application. This
            application was created as a side project and I cant in good conscience ask for payment or sell data from
            this app to try and make a profit.
          </Typography>
          <Typography>
            The code for this is open sourced so anyone can verify the privacy claims, or help contribute if they like.
          </Typography>
        </FaqQuestionAndAnswer>
        <FaqQuestionAndAnswer question="Can the application flow be customized?">
          <Typography>Yes! there is a system built so you can track your applicaion proccess any way you like.
            If you would like a slimmed down process, you can remove any steps you feel are unnecessary. Or
            go ahead an add any steps you feel are missing.</Typography>
        </FaqQuestionAndAnswer>
        <FaqQuestionAndAnswer question="Logos are not updating properly?">
          <Typography>
            Try uploading a .png file.
          </Typography>
          <Typography>
            This is a known issue, and I am working on it.
          </Typography>
        </FaqQuestionAndAnswer>
        <FaqQuestionAndAnswer question="How can I contribute?">
          <Typography>
            The project is open sourced on <Link href="">github</Link> We would love for you to come help with either
            bug reports or new features! Take a look at the contributing page to get started. {
            // TODO Update this one the github page is setup
          }
          </Typography>
        </FaqQuestionAndAnswer>
      </Stack>
    </div>
  )
}