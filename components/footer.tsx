import React from 'react'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <div className="py-5 mt-20 border-t border-zinc-800">
      <footer className="text-center text-zinc-500">
        <div className="container flex flex-col items-center justify-between gap-5 lg:flex-row">
          <div>Copyright © {currentYear} - All rights reserved</div>

          <a
            href="https://www.producthunt.com/posts/chat-nova?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-chat&#0045;nova"
            target="_blank"
          >
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=422244&theme=neutral"
              alt="Chat&#0032;Nova - An&#0032;Open&#0032;Source&#0032;AI&#0032;powered&#0032;PDF&#0032;chatbot&#0032;built&#0032;on&#0032;NextJS | Product Hunt"
              style={{
                width: '230px',
                height: '44px',
              }}
              width="230"
              height="44"
            />
          </a>
        </div>
      </footer>
    </div>
  )
}
