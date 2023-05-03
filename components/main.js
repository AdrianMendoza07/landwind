/* eslint-disable jsx-a11y/alt-text */
import Link from 'next/link';

/* eslint-disable @next/next/no-img-element */
const main = () => {
  return (
    <>
      <section id="HOME" className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1
              data-aos="fade-right"
              className="max-w-2xl  text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white"
            >
              Adrian Mendoza 
            </h1>
            <h1
              data-aos="fade-right"
              className="max-w-2xl mb-20 text-sm font-bold leading-none tracking-tight md:text-3xl xl:text-3xl dark:text-white"
            >
              Frontend developer 
            </h1>
            
            <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4 ">
              <Link
                data-aos="fade-right"
                data-aos-delay="40"
                data-aos-duration="900"
                href="https://github.com/AdrianMendoza07?tab=repositories"
                className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                <div className="flex items-center  ">
                  <img className="h-5 w-5" src="/github.png" alt="github" />

                  <p className="pl-2"> View on GitHub</p>
                </div>
              </Link>

              <Link
                data-aos="fade-right"
                data-aos-delay="50"
                data-aos-duration="1000"
                href="https://github.com/AdrianMendoza07?tab=repositories"
                className="inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                <div className="flex items-center  ">
                  <img className="h-5 w-5" src="/figma.png" alt="figma" />

                  <p className="pl-2"> View on Figma</p>
                </div>
              </Link>
            </div>
          </div>
          <div data-aos="fade-left"  className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="/hero.png" alt="hero image" />
          </div>
        </div>
      </section>
      {/* Sponsers */}
      
    </>
  );
};

export default main;
