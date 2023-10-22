import { Card } from '@radix-ui/themes'
import clsx from 'clsx'
import React from 'react'
import { AiFillThunderbolt } from 'react-icons/ai'
import { BsDatabaseFillLock, BsDatabaseLock } from 'react-icons/bs'
import { FaUserShield } from 'react-icons/fa'
import { Calendly } from './calendly'

export const Cards = () => {
  return (
    <div className="container space-y-5">
      <div className="flex flex-col items-center gap-5">
        <h2 className="flex flex-col items-center max-w-xl gap-2 text-2xl text-center lg:text-4xl">
          <span>You're not a Developer?</span>
          <span className="flex px-5 py-2 rounded-md bg-slate-100 -rotate-1 text-zinc-700">
            We Got Your Back!
          </span>
        </h2>
        <p className="max-w-2xl text-center">
          We are here to guide you through the process, We provide comprehensive
          support, from initial setup to fine-tuning, so you can make the most
          out of your chatbot's potential.
        </p>
      </div>
      <div className="space-y-3">
        <Calendly />
        <ul className="grid gap-3 lg:grid-cols-3">
          {data.map(item => {
            return (
              <li
                key={item.title}
                className="p-[0.08rem] rounded-md bg-gradient-to-tr from-zinc-700 via-transparent to-zinc-700"
              >
                <div className="flex flex-col items-center h-full gap-5 p-5 rounded-md text-zinc-100 bg-neutral-900">
                  <div className={clsx(item.color, 'text-6xl')}>
                    {item.icon}
                  </div>
                  <h2 className="text-lg">{item.title}</h2>
                  <p className="text-center text-zinc-400">{item.desc}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
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
