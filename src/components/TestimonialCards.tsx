import React from "react"
import { InfiniteMovingCards } from "./infinite-moving-cards"

const testimonials = [
  {
    quote:
      "Regree has revolutionized our workflow. The real-time updates and seamless collaboration features are unmatched. Our team is more aligned than ever.",
    name: "Sarah Johnson",
    title: "Project Manager at TechSolutions",
  },
  {
    quote:
      "The automation tools provided by Regree have saved us countless hours. We now focus on strategic work instead of repetitive tasks. A game-changer for our business.",
    name: "Michael Lee",
    title: "CEO at Innovate Inc.",
  },
  {
    quote:
      "I was impressed with how easy it was to integrate Regree with our existing systems. The setup was straightforward, and the results were immediate.",
    name: "Emily Davis",
    title: "IT Director at GreenTech",
  },
  {
    quote:
      "Regree's user-friendly interface and powerful features make it an essential tool for any organization looking to enhance productivity and collaboration.",
    name: "David Smith",
    title: "Operations Manager at QuickServe",
  },
  {
    quote:
      "We've seen a significant increase in efficiency since adopting Regree. The automation and real-time tracking capabilities are top-notch.",
    name: "Laura Martinez",
    title: "Head of Product Development at NextGen",
  },
]

function TestimonialCards() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">
        Hear our Harmony : Voice of success
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  )
}

export default TestimonialCards
