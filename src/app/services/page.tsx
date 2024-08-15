'use client'
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import serviceData from "@/data/automation_services.json"

function Page() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 pt-36">
        <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-black">Our Automation Services ({serviceData.services.length})</h1>  
        <div className="flex flex-wrap justify-center">
            {serviceData.services.map((service) => (
                <CardContainer key={service.id} className="inter-var m-4">
                <CardBody className="bg-white relative group/card dark:hover:shadow-2xl dark:hover:shadow-blue-500/[0.1] dark:bg-gray-800 dark:border-gray-600 border-gray-300 w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-gray-800 dark:text-white"
                  >
                    {service.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-gray-600 text-sm max-w-sm mt-2 dark:text-gray-400"
                  >
                    {service.description}
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                      src={service.image}
                      height="1000"
                      width="1000"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt={service.title}
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-20">
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white border border-gray-300"
                    >
                      Learn More →
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl bg-blue-600 dark:bg-blue-400 dark:text-white text-white text-xs font-bold"
                    >
                      Contact Us
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            ))}
        </div>  
    </div>
  )
}

export default Page;
