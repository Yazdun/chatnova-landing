import { Button } from '@radix-ui/themes'
import React from 'react'

export const Banner = () => {
  return (
    <div className="container mt-20">
      <div className="flex flex-col items-center gap-5 text-center">
        <h2 className="text-2xl text-center lg:text-4xl">Try Chat Nova 🎉</h2>
        <p className="max-w-xl text-zinc-400">
          Chat Nova is a free, open-source chat app powered by Next.js,
          TypeScript, and Tailwind CSS. It's a great place to start your own
          chat app, or to use as a reference for your next project.
        </p>
        <div>
          <div className="flex items-center gap-5">
            <Button asChild variant="soft" size="3">
              <a href="https://github.com/Kyler18/chat-nova" target="_blank">
                Get Started
              </a>
            </Button>
            <Button asChild variant="soft" color="gray" size="3" highContrast>
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
