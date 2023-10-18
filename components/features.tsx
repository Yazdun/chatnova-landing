'use client'

import React, { useEffect, useState } from 'react'
import { FaKey, FaPaintBrush } from 'react-icons/fa'
import { BsFillDatabaseFill } from 'react-icons/bs'
import { HiOutlineChatBubbleBottomCenterText } from 'react-icons/hi2'
import { HiDotsHorizontal } from 'react-icons/hi'
import { twMerge } from 'tailwind-merge'
import { AiOutlineCheck } from 'react-icons/ai'
import { TbBrandNextjs } from 'react-icons/tb'
import {
  SiVercel,
  SiNextdotjs,
  SiRadixui,
  SiSupabase,
  SiTailwindcss,
} from 'react-icons/si'

export const Features = () => {
  return (
    <div className="grid gap-10 mb-40">
      <div className="container grid gap-5 text-center">
        <h2 className="text-2xl lg:text-4xl max-w-xl m-auto">
          Build and ship custom AI chatbots in minutes
        </h2>
        <p className="leading-7">
          You can build your own chatbots with our easy to use chatbot
          boilerplate code. ChatNova supports full role-based authentication and
          authorization, chat history, PDF and documents upload!
        </p>
      </div>
      <Slider />
    </div>
  )
}

const Slider = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [isClicked, setIsClicked] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isClicked) {
        setActiveTab(prevTab => (prevTab + 1) % data.length)
      }
    }, 10000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  const handleTabClick = (index: number) => {
    setActiveTab(index)
    setIsClicked(true)
  }

  return (
    <div className="grid gap-10 ">
      <ul className="container grid grid-cols-3 md:grid-cols-5 gap-2">
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
      <div className="bg-neutral-900 border-t-2 border-neutral-800 border-b-2  py-10">
        <div className="container grid gap-5">
          <ul className="flex text-lg text-white">
            {data[activeTab].tech.map((item, idx) => {
              return (
                <li key={item.title} className="flex items-center gap-1">
                  {idx > 0 && <span className="ml-1">+</span>}
                  <div>{item.icon}</div>
                  {item.title}
                </li>
              )
            })}
          </ul>
          <ul className="grid gap-3 text-neutral-300">
            {data[activeTab].items.map(item => {
              return (
                <li key={item} className="flex gap-2">
                  <div className="mt-1 text-green-300">
                    <AiOutlineCheck />
                  </div>
                  {item}
                </li>
              )
            })}
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
      "Storing user's full conversation history in the database.",
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
      'Built-in authentication and authorization systems.',
      'Automatically generated RESTful APIs for your database, allowing you to easily interact with your data from different platforms and devices.',
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
        icon: '',
      },
    ],
    icon: <HiDotsHorizontal />,
    items: [
      'Fully free and open-sourced',
      'Created and maintained by industry experts.',
      'Lifetime support and updates.',
      'Already being used by enterprised companies.',
    ],
  },
]
