import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Separator } from '@radix-ui/themes'
import React from 'react'
import KAI from '@/assets/profile/kai.jpg'
import YAZ from '@/assets/profile/yaz.jpg'
import Image from 'next/image'
import { Text } from '@radix-ui/themes'

export const LandingQaClient = () => {
  return (
    <section className="container">
      <div className="space-y-3 pb-5 text-center ">
        <h2 className="text-xl font-bold">Frequently Asked Questions</h2>
        <p>
          If you have any more questions, feel free to reach out to{' '}
          <Text asChild color="blue">
            <a href="https://twitter.com/TheKaiB" target="_blank">
              Kai
            </a>
          </Text>{' '}
          or{' '}
          <Text asChild color="blue">
            <a href="https://twitter.com/Yazdun">Yaz</a>
          </Text>{' '}
          via Twitter!
        </p>
      </div>
      <Separator size="4" />
      <Accordion type="multiple">
        {faq.map(({ question, answer }) => {
          return (
            <AccordionItem key={question} value={question}>
              <AccordionTrigger>{question}</AccordionTrigger>
              <AccordionContent className="text-zinc-400 leading-7">
                {answer}
              </AccordionContent>
            </AccordionItem>
          )
        })}
      </Accordion>
    </section>
  )
}

const faq = [
  {
    question: 'Is Chat Nova a paid service?',
    answer: 'No, Chat Nova is completely open-source and free to use.',
  },
  {
    question: "I'm not a developer. Can I still benefit from Chat Nova?",
    answer:
      "Absolutely! If you're not a developer, you can reach out to our maintainers directly. They'll be happy to discuss your needs and work on building a tailored AI solution for you using Chat Nova. Contact us for more information!",
  },
  {
    question: 'What technologies is Chat Nova built with?',
    answer:
      'Chat Nova is built using Next.js and TypeScript, ensuring a robust and efficient foundation for creating AI chatbots.',
  },
  {
    question: 'How is data managed in Chat Nova?',
    answer:
      "Chat Nova utilizes Supabase for database management, providing a seamless and reliable solution for handling your chatbot's data.",
  },
  {
    question: 'Are OpenAI API keys required to use Chat Nova?',
    answer:
      "Yes, you will need your own OpenAI API keys to fully utilize Chat Nova's AI capabilities.",
  },
  {
    question: 'How Chat Nova handles AI response generation?',
    answer:
      'Chat Nova leverages the latest Vercel SDK to guarantee a seamless experience in generating AI responses for your chatbot.',
  },
]
