import React from 'react'
import { Badge, Button } from '@radix-ui/themes'
import Image from 'next/image'
import HERO from '@/assets/hero.png'

export const Hero = () => {
  return (
    <div className="flex items-center justify-center min-h-screen overflow-hidden">
      <div className="container relative">
        <div className="absolute top-0 bottom-0 items-center hidden -right-36 lg:flex">
          <Image
            placeholder="blur"
            width={500}
            height={500}
            src={HERO}
            alt=""
          />
        </div>
        <div className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-left">
          <Badge color="gray">
            Chat Nova is now fully free and open-sourced!
          </Badge>

          <h1 className="flex-col hidden gap-1 text-xl leading-10 md:text-3xl md:flex lg:text-4xl">
            Kickstart Your Own ChatGPT Clone in
            <div className="flex items-center justify-center gap-2 lg:justify-start">
              Just{' '}
              <span className="flex px-5 rounded-md bg-slate-100 rotate-1 text-zinc-700 lg:py-2">
                5 Minutes?!?!
              </span>
            </div>
          </h1>

          <h1 className="flex flex-col gap-1 text-xl leading-10 md:hidden">
            <span>Kickstart Your Own ChatGPT Clone</span>
            <div className="flex items-center justify-center gap-2 lg:justify-start">
              <span> in just </span>

              <span className="flex px-5 rounded-md bg-slate-100 rotate-1 text-zinc-700 lg:py-2">
                5 Minutes?!?!
              </span>
            </div>
          </h1>
          <p className="max-w-xl text-zinc-300">
            Chat Nova will help you to build a custom{' '}
            <span className="text-white">AI Chatbot</span> with{' '}
            <span className="text-white"> full authentication</span> and{' '}
            <span className="text-white">database management</span> flow in just
            a few minutes
          </p>
          <div className="flex items-center gap-5">
            <Button asChild variant="soft" size="3">
              <a href="https://github.com/Kyler18/chat-nova" target="_blank">
                Get Started
              </a>
            </Button>
            <Button asChild variant="ghost" color="gray" size="3" highContrast>
              <a href="https://github.com/Kyler18/chat-nova" target="_blank">
                Give it a Star! ⭐️
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
