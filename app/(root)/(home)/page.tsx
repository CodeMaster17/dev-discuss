import Footer from "@/sections/home.page/footer.section";
import Service from "@/sections/home.page/services.section";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Volume1, Terminal } from "lucide-react";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
const HeroSection = () => {
  return (
    <>
      <Alert className=" absolute inset-x-[50%] top-5 w-3/5 translate-x-[-50%] bg-primary-100 ">
        <Terminal className="h-4 w-4" />
        <AlertTitle>Don&apos;t want to sign up?</AlertTitle>
        <AlertDescription className="flex items-center justify-between">
          You can add components and dependencies to your app using the cli.
          <Link href="/question-dashboard">
            <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
              <Image
                src="/assets/icons/sign-up.svg"
                alt="sign up"
                width={20}
                height={20}
                className="invert-colors lg:hidden"
              />
              <span className="primary-text-gradient max-lg:hidden">
                View as guest
              </span>
            </Button>
          </Link>
        </AlertDescription>
      </Alert>
      <div className="flex h-screen flex-col items-center justify-center bg-white font-inter">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left">
              <div>
                <Link
                  className="inline-flex items-center gap-x-2 space-x-1 rounded-xl  border-2 border-gray-400 p-1 text-sm font-semibold text-gray-600 hover:border-orange-500"
                  href="#"
                >
                  <span className="flex items-center justify-center gap-2 rounded-lg bg-orange-100 px-2.5 py-0.5 text-sm font-semibold text-orange-800 ">
                    <Volume1 color="#FF7000" />
                    Welcome
                  </span>
                  <span>Ask your first doubt</span>
                </Link>
                <h1 className="mt-4 text-3xl font-extrabold tracking-wide  sm:mt-5 sm:leading-none lg:mt-6 lg:text-6xl lg:leading-relaxed xl:text-7xl">
                  <p className="sm:block ">
                    Here is your
                    <span className=" text-gray-400">&nbsp; doubt-solver,</span>
                  </p>
                  <span className="text-dark-500 md:block">
                    new, all-in-one
                  </span>
                  <p className="text-orange-600 md:block">platform</p>
                </h1>
                <div className="mt-10 gap-4 sm:flex sm:justify-center lg:justify-start">
                  <SignedOut>
                    <div className="flex flex-row gap-3">
                      <Link href="/sign-in">
                        <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                          <Image
                            src="/assets/icons/account.svg"
                            alt="login"
                            width={20}
                            height={20}
                            className="invert-colors lg:hidden"
                          />
                          <span className="primary-text-gradient max-lg:hidden">
                            Log In
                          </span>
                        </Button>
                      </Link>

                      <Link href="/sign-up">
                        <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg border px-4 py-3 shadow-none">
                          <Image
                            src="/assets/icons/sign-up.svg"
                            alt="sign up"
                            width={20}
                            height={20}
                            className="invert-colors lg:hidden"
                          />
                          <span className="max-lg:hidden">Sign up</span>
                        </Button>
                      </Link>
                    </div>
                  </SignedOut>
                  <SignedIn>
                    <Link href="/question-dashboard">
                      <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                        <Image
                          src="/assets/icons/account.svg"
                          alt="login"
                          width={20}
                          height={20}
                          className="invert-colors lg:hidden"
                        />
                        <span className="primary-text-gradient max-lg:hidden">
                          Go to Dashboard
                        </span>
                      </Button>
                    </Link>
                  </SignedIn>
                </div>
              </div>
            </div>
            <div className="ml-6 mt-16 sm:mt-24 lg:col-span-5 lg:mt-0">
              <p className="ml-12 text-base text-gray-600 sm:text-xl lg:text-lg xl:text-xl">
                Navigate the world of software development with ease, connecting
                with peers and accessing a wealth of resources.
              </p>
              <div className="ml-8 mt-12">
                <div className="grid grid-cols-3 gap-6 sm:gap-6 xl:gap-8">
                  <div className="text-center sm:flex sm:items-center sm:justify-center">
                    <div className="sm:shrink-0">
                      <div className="flow-root">
                        <div className="  inline-flex w-fit items-center justify-center rounded-full border border-transparent bg-orange-100 px-3 py-0.5 text-sm font-medium leading-5 text-orange-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2">
                          Developers
                        </div>
                        <p className="text-4xl font-bold text-gray-900">16K+</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-center sm:flex sm:items-center sm:justify-center">
                    <div className="sm:shrink-0">
                      <div className="flow-root">
                        <div className="  inline-flex w-fit items-center justify-center rounded-full border border-transparent bg-orange-100 px-3 py-0.5 text-sm font-medium leading-5 text-orange-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2">
                          Questions
                        </div>
                        <p className="ml-4 text-4xl font-bold text-gray-900">
                          28K+
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text-center sm:flex sm:items-center sm:justify-center">
                    <div className="sm:shrink-0">
                      <div className="flow-root">
                        <div className="  inline-flex w-fit items-center justify-center rounded-full border border-transparent bg-orange-100 px-3 py-0.5 text-sm font-medium leading-5 text-orange-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2">
                          Topics
                        </div>
                        <p className="ml-4 text-4xl font-bold text-gray-900">
                          18+
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 flex justify-center space-x-3">
                <div className="mt-12 flex justify-center space-x-3">
                  <span className="relative flex h-14 w-14 shrink-0 overflow-hidden rounded-full">
                    <Image
                      className="aspect-square h-full w-full"
                      alt="User 1"
                      width={20}
                      height={20}
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;width=40"
                    />
                  </span>
                  <span className="relative flex h-14 w-14 shrink-0 overflow-hidden rounded-full">
                    <Image
                      className="aspect-square h-full w-full"
                      alt="User 2"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;width=40"
                      width={100}
                      height={100}
                    />
                  </span>
                  <span className="relative flex h-14 w-14 shrink-0 overflow-hidden rounded-full">
                    <Image
                      className="aspect-square h-full w-full"
                      alt="User 3"
                      src="https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;width=40"
                      width={100}
                      height={100}
                    />
                  </span>
                  <span className="relative flex h-14 w-14 shrink-0 overflow-hidden rounded-full">
                    <Image
                      className="aspect-square h-full w-full"
                      alt="User 4"
                      src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;width=40"
                      width={100}
                      height={100}
                    />
                  </span>
                  <Image
                    className="relative flex h-14 w-14 shrink-0 overflow-hidden rounded-full"
                    src="https://images.unsplash.com/photo-1527718641255-324f8e2d0421?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="5"
                    width={100}
                    height={100}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Service />
      <Footer />
    </>
  );
};

export default HeroSection;
