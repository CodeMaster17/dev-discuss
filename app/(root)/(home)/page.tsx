import { Button } from '@/components/ui/button'
import { HOME_PAGE } from '@/constants/home-page'
import Image from 'next/image'
import React from 'react'
import { SignOutButton, SignedIn, SignedOut, useAuth } from '@clerk/nextjs';
import Link from 'next/link';

const HomePage = () => {
  return (
    <>
      <div className='w-full h-screen  bg-primary-100 relative overflow-hidden'>
        <div className='w-full flex flex-row h-full container '>

          <div className='w-[70%] border-2 h-full flex flex-col items-start justify-center -mt-24'>
            <div className='border-2'>

              <span className='text-4xl font-spaceGrotesk font-bold'>Hi, There!!</span>
              <br />
              <br />
              <br />

              <p className='text-7xl font-spaceGrotesk font-bold '>We are</p>
              <p className='text-7xl font-spaceGrotesk font-bold '>building a </p>
              <p className='text-7xl font-spaceGrotesk font-bold '>tech community</p>
              <p className='text-7xl font-spaceGrotesk font-bold '> for
                <span className='text-primary-500'>
                  &nbsp;
                  developers
                </span>

              </p>
            </div>
            <br />
            <br />
            <SignedOut>
              <div>
                <Link href="/sign-in">
                  <Button className="bg-primary-500 text-white">
                    <Image
                      src="/assets/icons/account.svg"
                      alt="login"
                      width={20}
                      height={20}
                      className="invert-colors lg:hidden"
                    />
                    <span className="text-white max-lg:hidden">Ask your first question</span>
                  </Button>
                </Link>
                &nbsp;
                &nbsp;
                &nbsp;
                <Link href="/sign-in">
                  <Button className="bg-primary-500 text-white">
                    <Image
                      src="/assets/icons/account.svg"
                      alt="login"
                      width={20}
                      height={20}
                      className="invert-colors lg:hidden"
                    />
                    <span className="text-white max-lg:hidden">Log In</span>
                  </Button>
                </Link>
              </div>
            </SignedOut>

            <SignedIn>
              <div>
                <Link href="/question-dashboard">
                  <Button className="bg-primary-500 text-white">
                    <Image
                      src="/assets/icons/account.svg"
                      alt="login"
                      width={20}
                      height={20}
                      className="invert-colors lg:hidden"
                    />
                    <span className="text-white max-lg:hidden">Go to your question dashboard</span>
                  </Button>

                  &nbsp;
                  &nbsp;
                  &nbsp;
                  <SignOutButton>
                    <Button className="bg-white text-primary-500">
                      <Image
                        src="/assets/icons/account.svg"
                        alt="login"
                        width={20}
                        height={20}
                        className="invert-colors lg:hidden"
                      />
                      <span className="text-primary-500 max-lg:hidden">Sign out</span>
                    </Button>
                  </SignOutButton>
                </Link>

              </div>
            </SignedIn>



          </div>
          <div className='top-0 lg:w-[40%] absolute right-0 h-full'>
            <Image src='/assets/home-page/people.png' alt='hero' className='w-full h-full' width={500} height={500} />
          </div>
        </div>

        {/* cards */}
        <div className='w-[70vw] h-[25vh] gap-10 p-4 flex bg-white absolute bottom-0 border-2 border-red-500'>
          {HOME_PAGE.map((item, index) => {
            return (
              <div key={item.id} className="flex lg:w-[20vw] flex-col justify-center items-center border-2">
                <div className=" w-full">
                  <div className="h-full flex flex-col items-center text-center">
                    <Image
                      alt="team"
                      className=" rounded-lg w-[60px] h-[60px] border-2 "
                      src={item.img}
                      width={250}
                      height={250}
                    />
                    <div className="w-full">
                      <h2 className="title-font font-medium text-lg text-gray-900">{item.title}</h2>
                      <p className="">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      Hello
    </>
  )
}

export default HomePage
