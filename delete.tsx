
<div className="bg-white h-screen font-inter flex flex-col items-center justify-center">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
                <div>
                    <Link className="inline-flex px-1 py-1 gap-x-2 rounded-xl  border-gray-400 border-2 hover:border-orange-500 items-center text-sm font-semibold text-gray-600 space-x-1" href="#">
                        <span className="bg-orange-100 flex items-center justify-center gap-2 text-orange-800 text-sm font-semibold px-2.5 py-0.5 rounded-lg ">
                            <Volume1 color='#FF7000' />
                            Welcome
                        </span>
                        <Link href="/ask-question">Ask your first doubt</Link>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg> */}
                    </Link>
                    <h1 className="mt-4 text-3xl tracking-tight font-extrabold sm:mt-5 sm:leading-none lg:mt-6 lg:text-6xl xl:text-7xl">
                        <p className="sm:block ">Here is your
                            <span className=' text-gray-400'>

                                &nbsp; doubt-solver,
                            </span>

                        </p>
                        <span className="text-dark-500 md:block">new, all-in-one</span>
                        <p className="text-orange-600 md:block">platform</p>
                    </h1>
                    <div className="mt-10 sm:flex sm:justify-center gap-4 lg:justify-start">
                        <Link href="/question-dashboard" className="inline-flex items-center hover:bg-white hover:border-2 hover:border-primary-500 hover:text-primary-500 text-white bg-primary-500 justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full sm:w-auto">
                            View as guest
                        </Link>
                        <Link href="/question-dashboard" className="inline-flex items-center hover:bg-primary-500 hover:text-white bg-white text-primary-500 border-primary-500 border-2 justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full sm:w-auto">
                            Login
                        </Link>
                    </div>
                </div>
            </div>
            <div className="mt-16 ml-6 sm:mt-24 lg:mt-0 lg:col-span-5">
                <p className="text-base ml-12 text-gray-600 sm:text-xl lg:text-lg xl:text-xl">
                    Navigate the world of software development with ease, connecting with peers and accessing a wealth of resources.
                </p>
                <div className="mt-12 ml-8">
                    <div className="grid grid-cols-3 gap-6 sm:gap-6 xl:gap-8">
                        <div className="text-center sm:flex sm:items-center sm:justify-center">
                            <div className="sm:flex-shrink-0">
                                <div className="flow-root">
                                    <div
                                        className="border w-fit transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 inline-flex items-center justify-center px-3 py-0.5 text-sm font-medium leading-5 text-orange-600 bg-orange-100 rounded-full">
                                        Developers
                                    </div>
                                    <p className="text-4xl font-bold text-gray-900">16K+</p>
                                </div>
                            </div>

                        </div>
                        <div className="text-center sm:flex sm:items-center sm:justify-center">
                            <div className="sm:flex-shrink-0">
                                <div className="flow-root">
                                    <div
                                        className="border w-fit transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 inline-flex items-center justify-center px-3 py-0.5 text-sm font-medium leading-5 text-orange-600 bg-orange-100 rounded-full">
                                        Questions
                                    </div>
                                    <p className="text-4xl font-bold ml-4 text-gray-900">28K+</p>
                                </div>
                            </div>

                        </div>
                        <div className="text-center sm:flex sm:items-center sm:justify-center">
                            <div className="sm:flex-shrink-0">
                                <div className="flow-root">
                                    <div
                                        className="border w-fit transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 inline-flex items-center justify-center px-3 py-0.5 text-sm font-medium leading-5 text-orange-600 bg-orange-100 rounded-full">
                                        Topics
                                    </div>
                                    <p className="text-4xl font-bold ml-4 text-gray-900">18+</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="mt-12 flex justify-center space-x-3">
                    <div className="mt-12 flex justify-center space-x-3">
                        <span className="relative flex h-14 w-14 shrink-0 overflow-hidden rounded-full">
                            {/* <Image
                      className="aspect-square h-full w-full" alt="User 1"
                      width={20}
                      height={20}
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;width=40" /> */}
                        </span>
                        {/* <span
                        className="relative flex h-14 w-14 shrink-0 overflow-hidden rounded-full"><img
                      className="aspect-square h-full w-full" alt="User 2"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;width=40" /></span><span
                        className="relative flex h-14 w-14 shrink-0 overflow-hidden rounded-full"><img
                      className="aspect-square h-full w-full" alt="User 3"
                      src="https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;width=40" /></span><span
                        className="relative flex h-14 w-14 shrink-0 overflow-hidden rounded-full"><img
                      className="aspect-square h-full w-full" alt="User 4"
                      src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;width=40" /></span>
                  <img className="relative flex h-14 w-14 shrink-0 overflow-hidden rounded-full"
                    src="https://images.unsplash.com/photo-1527718641255-324f8e2d0421?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="5" /> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>