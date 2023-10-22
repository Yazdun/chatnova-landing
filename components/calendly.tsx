import { Button } from '@radix-ui/themes'
import Image from 'next/image'
import React from 'react'
import { AiFillCalendar } from 'react-icons/ai'
import KAI from '@/assets/profile/kai.jpg'
import YAZ from '@/assets/profile/yaz.jpg'

export const Calendly = () => {
  return (
    <div className="p-[0.08rem] rounded-md bg-gradient-to-br from-zinc-700 via-transparent to-zinc-700">
      <div className="flex flex-col items-center h-full gap-5 p-5 text-center rounded-md text-zinc-100 bg-neutral-900 md:flex-row ">
        <div className="flex justify-center w-full gap-2 lg:max-w-sm">
          <a
            href="https://twitter.com/Yazdun"
            className="z-20 "
            target="_blank"
          >
            <Image
              placeholder="blur"
              src={YAZ}
              width={125}
              height={125}
              alt="yaz"
              className="rounded-xl"
            />
          </a>
          <a
            href="https://twitter.com/TheKaiB"
            className="mt-10 -ml-5"
            target="_blank"
          >
            <Image
              placeholder="blur"
              src={KAI}
              width={115}
              height={115}
              alt="kai"
              className="rounded-xl"
            />
          </a>
        </div>
        <div className="flex flex-col items-center w-full gap-5 md:items-start md:text-left">
          <h2 className="text-lg">Let's Have a Talk!</h2>
          <p className=" text-zinc-400">
            If you want to build a custom chatbot, we can help you with that.
            You can schedule a call with us to discuss your requirement, and we
            will get back to you with a quote.
          </p>
          <Button
            asChild
            color="blue"
            variant="soft"
            className="space-x-2"
            size="3"
          >
            <a href="https://calendly.com/yazdun/30min" target="_blank">
              <AiFillCalendar className="mb-1" />
              Book a Call
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
