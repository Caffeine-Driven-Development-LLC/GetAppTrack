import Head from 'next/head';
import { Link, Stack, Typography } from '@mui/material';
import FaqQuestionAndAnswer from '@/components/faq_question_and_answer';

export default function Faq() {
  return (
    <div>
      <Head>
        <title>App Track - FAQ</title>
      </Head>
      <Stack spacing={2}>
        <Typography variant="h2">Frequently Asked Questions</Typography>
        <FaqQuestionAndAnswer question="When will App Track be available for download?">
          <Typography>
            Soon! We are wrapping up some action items so that the app can be
            distributed. Work is progressing, and Version 1.0 should be
            available soon.
          </Typography>
        </FaqQuestionAndAnswer>
        <FaqQuestionAndAnswer question="It's free? What's the catch?">
          <Typography>
            Yes, it&#39;s free, and there is no catch! Your data is not shared
            with anyone, and there is no charge for the application.
          </Typography>
          <Typography>
            This whole endeavor began as a personal side project, so I can&#39;t
            in good conscience ask for payment or sell data to try and monetize
            it. The code is open-sourced so anyone can verify the privacy
            claims, or help contribute however they&#39;d like.
          </Typography>
        </FaqQuestionAndAnswer>
        <FaqQuestionAndAnswer question="Can the application flow be customized?">
          <Typography>
            Yes! The App is built so that you can track your application process
            any way you&#39;d like.
          </Typography>
          <Typography>
            If you would prefer a slimmed down process, you can remove any steps
            you feel are unnecessary. Conversely, if you want more detail, you
            can also add any steps you feel are missing.
          </Typography>
        </FaqQuestionAndAnswer>
        <FaqQuestionAndAnswer question="How can I contribute?">
          <Typography>
            The project is open-sourced on{' '}
            <Link href="https://github.com/Caffeine-Driven-Development-LLC/AppTrack">
              Github
            </Link>
            . We would love for you to come help with either bug reports or new
            features. Take a look at the{' '}
            <Link href="https://github.com/Caffeine-Driven-Development-LLC/AppTrack/blob/main/CONTRIBUTING.md">
              Contributing page
            </Link>{' '}
            to get started.
          </Typography>
        </FaqQuestionAndAnswer>
        <FaqQuestionAndAnswer question="What data is collected about me when I use App Track?">
          <Typography>None.</Typography>
          <Typography>
            Nothing about your usage is reported to anyone, and we collect no
            data from any action of the application.
          </Typography>
          <Typography>
            As a result, there is no way for us to identify what is working
            well, or what needs improvement in the application. If you have any
            feedback about the application, positive or negative, please let us
            know by emailing us at{' '}
            <Link href="mailto:Support@GetAppTrack.com">
              Support@GetAppTrack.com
            </Link>
          </Typography>
        </FaqQuestionAndAnswer>
      </Stack>
    </div>
  );
}
