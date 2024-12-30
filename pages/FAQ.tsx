import Head from "next/head";
import {Stack, Typography} from "@mui/material";
import FaqQuestionAndAnswer from "@/app/components/faq_question_and_answer";

export default function FAQ() {

  return (
    <div>
      <Head>
        <title>AppTrack - FAQ</title>
      </Head>
      <Stack spacing={2}>
        <Typography variant="h2">Frequently Asked Questions</Typography>
        <FaqQuestionAndAnswer
          question="Can you add/remove the steps for an applicaiton?"
          answer="Yes! there is a system built so you can track your applicaion proccess any way you like.
                    If you would like a slimed down process, you can remove any steps you feel are unnecessary. Or
                    go ahead an add any steps you feel are missing."
        />
        <FaqQuestionAndAnswer
          question="test question"
          answer="test answer"
        />
      </Stack>
    </div>
  )
}