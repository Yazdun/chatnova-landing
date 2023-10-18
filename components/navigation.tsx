import { Button } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'

export const Navigation = () => {
  return (
    <div className="py-2 fixed top-0 left-0 z-50 backdrop-blur-3xl right-0 bg-blue-900/30 text-blue-400">
      <nav className="container">
        <Link href="/">
          <p className="flex gap-1 items-center w-full justify-center">
            Chatnova is now fully
            <span className="hidden md:flex">free and</span> open-sourced,{' '}
            <span className="underline">Try it out!</span>
            🎉
          </p>
        </Link>
      </nav>
    </div>
  )
}
