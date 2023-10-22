'use client'

import React, { useEffect, useState } from 'react'
import { FaKey, FaPaintBrush } from 'react-icons/fa'
import { BsFillDatabaseFill } from 'react-icons/bs'
import { HiOutlineChatBubbleBottomCenterText } from 'react-icons/hi2'
import { HiDotsHorizontal } from 'react-icons/hi'
import { twMerge } from 'tailwind-merge'
import { AiOutlineCheck, AiTwotoneFire } from 'react-icons/ai'
import {
  SiVercel,
  SiNextdotjs,
  SiRadixui,
  SiSupabase,
  SiTailwindcss,
} from 'react-icons/si'
import { PiCrownSimpleBold } from 'react-icons/pi'
import { AnimatePresence, motion } from 'framer-motion'

export const Features = () => {
  return (
    <div className="grid gap-10 mb-20">
      <div className="container grid gap-5 text-center">
        <h2 className="flex flex-col items-center max-w-xl m-auto text-2xl lg:text-4xl">
          <div className="text-orange-400  rotate-10">
            <PiCrownSimpleBold />
          </div>
          Build and ship custom AI chatbots in minutes
        </h2>
        <p className="leading-7">
          You can build your own chatbots with our easy to use chatbot
          boilerplate code. Chat Nova supports full role-based authentication
          and authorization, chat history, PDF and documents upload!
        </p>
      </div>
      <Slider />
    </div>
  )
}

const Slider = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [isClicked, setIsClicked] = useState(false)

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setActiveTab(prevTab => (prevTab + 1) % data.length)
  //   }, 10000)

  //   return () => {
  //     clearInterval(timer)
  //   }
  // }, [])

  const handleTabClick = (index: number) => {
    setActiveTab(index)
    setIsClicked(true)
  }

  return (
    <div className="grid gap-10 ">
      <ul className="container grid grid-cols-3 gap-2 md:grid-cols-5">
        {data.map((item, index) => (
          <li className="w-full" key={index}>
            <button
              className={twMerge(
                'p-5 w-full flex flex-col gap-2 rounded-xl items-center transition-all justify-center border',
                activeTab === index
                  ? 'border-green-300 text-green-300 bg-green-900/20'
                  : 'border-zinc-700',
              )}
              onClick={() => handleTabClick(index)}
            >
              <div className="text-3xl">{item.icon}</div>
              {item.feature}
            </button>
          </li>
        ))}
      </ul>
      <div className="py-10 border-t-2 border-b-2 bg-neutral-900 border-neutral-800">
        <div className="container grid gap-5">
          <ul className="flex text-lg text-white">
            <AnimatePresence mode="wait" initial={false}>
              {data[activeTab].tech.map((item, idx) => {
                return (
                  <motion.li
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    key={item.title}
                    className="flex items-center gap-1"
                  >
                    {idx > 0 && <span className="ml-1">+</span>}
                    <div>{item.icon}</div>
                    {item.title}
                  </motion.li>
                )
              })}
            </AnimatePresence>
          </ul>
          <ul className="grid gap-3 text-neutral-300">
            <AnimatePresence mode="wait" initial={false}>
              {data[activeTab].items.map(item => {
                return (
                  <motion.li
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    key={item}
                    className="flex gap-2"
                  >
                    <div className="mt-1 text-green-300">
                      <AiOutlineCheck />
                    </div>
                    {item}
                  </motion.li>
                )
              })}
            </AnimatePresence>
          </ul>
        </div>
      </div>
    </div>
  )
}

const data = [
  {
    feature: 'Chatbot',
    tech: [
      {
        title: 'Next.js',
        icon: <SiNextdotjs />,
      },
      {
        title: 'Vercel SDK',
        icon: <SiVercel />,
      },
    ],
    icon: <HiOutlineChatBubbleBottomCenterText />,
    items: [
      'Blazing fast real-time AI response generation.',
      "Professional UI/UX crafted by industry's experts",
      "Storing user's full chat history in the database.",
    ],
  },
  {
    feature: 'Database',
    tech: [
      {
        title: 'Supabase',
        icon: <SiSupabase />,
      },
    ],
    icon: <BsFillDatabaseFill />,
    items: [
      'Real-time capabilities, receive instant updates when data changes in the database',
      'Robust data management and scalability.',
      'Automatically generated RESTful APIs for your database.',
    ],
  },
  {
    feature: 'Auth',
    tech: [
      {
        title: 'Supabase Built-in Authentication',
        icon: <SiSupabase />,
      },
    ],
    icon: <FaKey />,
    items: [
      'Role-based user authenticaion right out of the box',
      'Google Auth and Magic Link auth in minutes.',
      'Role-based protected routes already setup for you.',
    ],
  },

  {
    feature: 'Styling',
    tech: [
      {
        title: 'Radix UI',
        icon: <SiRadixui />,
      },
      {
        title: 'TailwindCSS',
        icon: <SiTailwindcss />,
      },
    ],
    icon: <FaPaintBrush />,
    items: [
      'Built upon Radix UI and TailwindCSS.',
      'Accessible UI components for creating your own custom chatbot.',
      'Slick modern design with dark/light mode support.',
    ],
  },
  {
    feature: 'More',
    tech: [
      {
        title: 'Best AI chatbot on the market!',
        icon: <AiTwotoneFire />,
      },
    ],
    icon: <HiDotsHorizontal />,
    items: [
      'Fully free and open-sourced',
      'Created and maintained by industry experts.',
      'Already being used by enterprised companies.',
    ],
  },
]
