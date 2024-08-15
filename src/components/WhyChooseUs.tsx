"use client"
import React from "react"
import { StickyScroll } from "./ui/sticky-scroll-reveal"

const content = [
  {
    title: "Automated Workflows",
    description:
      "Streamline your processes with automated workflows. Automate repetitive tasks and focus on more strategic activities. Axcend Automation helps you set up custom workflows that fit your unique needs, saving you time and reducing errors.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--purple-500))] flex items-center justify-center text-white">
        Automated Workflows
      </div>
    ),
  },
  {
    title: "Seamless Integration",
    description:
      "Connect with your existing tools and systems effortlessly. Axcend Automation offers seamless integration with a wide range of applications, ensuring your automation processes work smoothly across all platforms.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        Seamless Integration
      </div>
    ),
  },
  {
    title: "Real-Time Insights",
    description:
      "Gain valuable insights into your automated processes with real-time analytics. Monitor performance, identify bottlenecks, and make data-driven decisions to optimize your workflows and improve efficiency.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--green-500),var(--teal-500))] flex items-center justify-center text-white">
        Real-Time Insights
      </div>
    ),
  },
  {
    title: "Custom Automation Rules",
    description:
      "Create and manage custom automation rules tailored to your specific needs. Axcend Automation allows you to define triggers, actions, and conditions, so you can automate tasks in a way that perfectly aligns with your business processes.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--red-500),var(--orange-500))] flex items-center justify-center text-white">
        Custom Automation Rules
      </div>
    ),
  },
]

function WhyChooseUs() {
  return (
    <div>
      <StickyScroll content={content} />
    </div>
  )
}

export default WhyChooseUs
