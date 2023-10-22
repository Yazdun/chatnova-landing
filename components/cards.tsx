import { Card } from '@radix-ui/themes'
import clsx from 'clsx'
import React from 'react'
import { AiFillThunderbolt } from 'react-icons/ai'
import { BsDatabaseFillLock, BsDatabaseLock } from 'react-icons/bs'
import { FaUserShield } from 'react-icons/fa'

export const Cards = () => {
  return (
    <div className="container space-y-5">
      <div className="flex flex-col items-center gap-5">
        <h2 className="max-w-xl text-2xl text-center lg:text-4xl">
          Fast and Secure, Launch an AI Chatbot in Minutes!
        </h2>
        <p className="max-w-2xl text-center">
          Chat Nova will help you to build a custom AI Chatbot with full
          authentication and database management flow in a just few minutes
        </p>
      </div>
      <ul className="grid gap-3 lg:grid-cols-3">
        {data.map(item => {
          return (
            <li
              key={item.title}
              className="p-[0.08rem] rounded-md bg-gradient-to-tr from-zinc-700 via-transparent to-zinc-700"
            >
              <div className="flex flex-col items-center h-full gap-5 p-5 rounded-md text-zinc-100 bg-neutral-900">
                <div className={clsx(item.color, 'text-6xl')}>{item.icon}</div>
                <h2 className="text-lg">{item.title}</h2>
                <p className="text-center text-zinc-400">{item.desc}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

const data = [
  {
    title: 'Blazing Fast',
    desc: 'Chat Nova leverages cutting-edge technologies to provide you with the fastest response times possible.',
    icon: <AiFillThunderbolt />,
    color: 'text-orange-300',
  },
  {
    title: 'Own Your Data',
    desc: "Chat Nova is completely open-source and self-hosted. You're in control of your data.",
    icon: <BsDatabaseFillLock />,
    color: 'text-green-300',
  },
  {
    title: 'Role-Based Access',
    desc: "Role-based access right out of the box! ensure that only the right people have access to it. You're in control.",
    icon: <FaUserShield />,
    color: 'text-pink-300',
  },
]
