import React from 'react'

export const Navigation = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 py-2 text-blue-400 backdrop-blur-3xl bg-blue-900/30">
      <nav className="container text-sm md:text-base">
        <a href="https://github.com/Kyler18/chat-nova" target="_blank">
          Chat Nova is now fully{' '}
          <span className="hidden md:inline">free and</span> open-sourced,{' '}
          <span className="underline">Try it out!</span>
          🎉
        </a>
      </nav>
    </div>
  )
}
