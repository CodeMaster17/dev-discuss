import { cardsData } from "@/constants/home-page";
import Image from "next/image";
import React from "react";

const Service = () => {
    return (
        <section className="pb-12 dark:bg-dark lg:pb-[90px] lg:pt-[120px] xl:pt-[80px]">
            <div className="container mx-auto">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
                            <span className="mb-2 block text-lg font-semibold text-primary-500">
                                Features
                            </span>
                            <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark-100  sm:text-4xl md:text-[40px]">
                                Here you can..
                            </h2>
                            <p className="text-base text-body-color dark:text-dark-6">

                            </p>
                        </div>
                    </div>
                </div>
                <div className="container w-full  flex flex-wrap">
                    {cardsData.map((item) => {
                        return (
                            <ServiceCard
                                key={item.id}
                                title={item.label}
                                details="We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics."
                                icon={item.imgURL}
                            />
                        )
                    })
                    }
                </div>
            </div>
        </section>
    );
};

export default Service;

interface ServiceCardProps {
    icon: string;
    title: string;
    details: string;
}

const ServiceCard = ({ icon, title, details }: ServiceCardProps) => {
    return (
        <>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                <div className="mb-9 rounded-[20px] bg-white p-10 shadow-2 hover:shadow-lg dark:bg-dark-2 md:px-7 xl:px-10">
                    <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary-500 border-2">
                        <Image
                            src={!icon ? "/assets/icons/home.svg" : icon}
                            alt="servce-card"
                            width={40}
                            height={40}
                        // className={`${isActive ? "" : "invert-colors"}`}
                        />
                    </div>

                    <h4 className="mb-[14px] text-2xl font-semibold text-dark-500 ">
                        {title}
                    </h4>
                    <p className="text-body-color dark:text-dark-6">{details}</p>
                </div>
            </div>
        </>
    );
};
