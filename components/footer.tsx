import React from 'react'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <div className="py-5 border-t border-zinc-800 mt-20">
      <footer className="text-center text-zinc-500">
        Copyright © {currentYear} - All rights reserved
      </footer>
    </div>
  )
}
