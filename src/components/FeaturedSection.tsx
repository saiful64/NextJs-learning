"use client"
import React from "react"
import { CardSpotlight } from "./ui/card-spotlight"
import Link from "next/link"
import servicesData from "../data/services.json"

interface Service {
  id: number
  title: string
  slug: string
  description: string
  price: string
  provider: string
  isFeatured: boolean
}

function FeaturedSection() {
  const featuredServices = servicesData.services.filter(
    (service: Service) => service.isFeatured
  )
  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide">
            View Our Services
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Choose the role you play in the ecosystem.
          </p>
        </div>
        <div className="mt-10 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {featuredServices.map((service: Service) => (
              <div key={service.id} className="flex justify-center">
                <CardSpotlight className="h-96 w-96">
                  <p className="text-xl font-bold relative z-20 mt-2 text-white">
                    {service.title}
                  </p>

                  <p className="text-neutral-300 mt-4 relative z-20 text-sm">
                    {service.description}
                  </p>
                </CardSpotlight>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-20 text-center">
          <Link
            href={"./services"}
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All Services
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FeaturedSection
