import { Button } from '@radix-ui/themes'
import React from 'react'

export const Video = () => {
  return (
    <div className="container flex flex-col items-center text-center gap-5">
      <h2 className="text-2xl lg:text-4xl max-w-2xl m-auto flex flex-col items-center">
        ChatNova in 3 Minutes!
      </h2>
      <p>
        See how we successfully integrated ChatNova into a business in this
        short video ( Kai is too slow 3x the video 😒 )
      </p>

      <div className="max-w-[560px] w-full">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/pqTcEirVWco?si=LAS3ZwOKkO7iyJb2"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

// export const Video = () => {
//     return (
//       <div className="container flex flex-col items-center text-center gap-5">
//         <h2 className="text-2xl lg:text-4xl max-w-2xl m-auto flex flex-col items-center">
//           We help you to integrate ChatNova into your business!
//         </h2>
//         <p>
//           ChatNova is already being used by businesses to build their own secure
//           AI chatbots. Check out the video below to see how we successfully
//           integrated ChatNova into a business!
//         </p>
//         <div>
//           <Button asChild variant="soft" size="3">
//             <a href="#">Book a Call</a>
//           </Button>
//         </div>
//         <iframe
//           width="560"
//           height="315"
//           src="https://www.youtube.com/embed/pqTcEirVWco?si=LAS3ZwOKkO7iyJb2"
//           title="YouTube video player"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//           allowFullScreen
//         ></iframe>
//       </div>
//     )
//   }
