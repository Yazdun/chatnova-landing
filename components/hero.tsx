import React from 'react'
import { Badge, Button } from '@radix-ui/themes'
import Image from 'next/image'
import HERO from '@/assets/hero.png'

export const Hero = () => {
  return (
    <div className="min-h-screen flex justify-center overflow-hidden items-center">
      <div className="container relative">
        <div className="absolute -right-36 top-0 bottom-0 items-center hidden lg:flex">
          <Image
            placeholder="blur"
            width={500}
            height={500}
            src={HERO}
            alt=""
          />
        </div>
        <div className="flex lg:items-start items-center flex-col lg:text-left gap-5 text-center">
          <Badge color="gray">
            ChatNova is now fully free and open-sourced!
          </Badge>

          <h1 className="md:text-3xl text-xl leading-10  flex flex-col gap-1 lg:text-4xl">
            Kickstart Your Own ChatGPT Clone in
            <div className="flex items-center gap-2 justify-center lg:justify-start">
              Just{' '}
              <span className="bg-slate-100 rotate-1 flex text-zinc-700 px-5 lg:py-2 rounded-md">
                5 Minutes?!?!
              </span>
            </div>
          </h1>
          <p className="text-zinc-300 max-w-xl">
            ChatNova will help you to build a custom{' '}
            <span className="text-white">AI Chatbot</span> with{' '}
            <span className="text-white"> full authentication</span> and{' '}
            <span className="text-white">database management</span> flow in a
            just few minutes
          </p>
          <div className="flex gap-5 items-center">
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
