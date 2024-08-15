"use client"
import Link from "next/link"
import React from "react"
import { HoverEffect } from "./ui/card-hover-effect"

function MoreAbout() {
  const morewAbout = [
    {
      title: "Unwavering Focus",
      description:
        "For over 15 years, we have created a niche for ourselves in the IT/OT Convergence space, traversing 3 technology shifts in the industry.",
      link: "https://axcend.com/unwavering-focus", // Replace with actual link if available
    },
    {
      title: "Multi-faceted Experience",
      description:
        "We serve customers across ecosystems that have a networked impact on end-users globally.",
      link: "https://axcend.com/multifaceted-experience", // Replace with actual link if available
    },
    {
      title: "Multidisciplinary Engineering",
      description:
        "We bring all facets of engineering together, enabling us to provide the most user-relevant IT/OT engineering solution.",
      link: "https://axcend.com/multidisciplinary-engineering", // Replace with actual link if available
    },
    {
      title: "Deep-rooted Commitment",
      description:
        "We are in it for the long haul. We have ongoing relationships spanning over 15+ years with Fortune 500 and Mid-sized companies.",
      link: "https://axcend.com/deep-rooted-commitment", // Replace with actual link if available
    },
    {
      title: "Personalised Connection",
      description:
        "We work closely with our customers, giving personalised attention to the relationship at every level right from engineer to top management.",
      link: "https://axcend.com/personalised-connection", // Replace with actual link if available
    },
  ]

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            Who are we
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            What we bring to the table
          </p>
        </div>
        <div className="mt-10">
          <HoverEffect
            items={morewAbout.map((about) => ({
              title: about.title,
              description: about.description,
              link: "/",
            }))}
          />
        </div>
        <div className="mt-10 text-center">
          <Link
            href={"/"}
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MoreAbout
