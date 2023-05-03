/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */

const firstdescription = () => {
  return (
    <section id="MARKET" className="bg-gray-50 dark:bg-gray-800">
      <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          <div className="text-gray-500 sm:text-lg dark:text-gray-400">
            <h2
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="30"
              data-aos-duration="800"
              data-aos-easing="ease-in-out"
              data-aos-once="false"
              className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white"
            >
              Who am I?
            </h2>
            <p data-aos="fade-right" className="mb-8 font-light lg:text-xl">
              My name is Adrian Mendoza, I am a 10th grade student at Sagrado Corazon school, I am also taking coding classes at night, right now about to start to learn backend in Steam Academy.
            </p>
            
            <ul
              role="list"
              className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
            >
              <h3
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="30"
              data-aos-duration="800"
              data-aos-easing="ease-in-out"
              data-aos-once="false"
              className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              My Qualities
            </h3>

              <li data-aos="fade-right" className="flex space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                  Excellent problem-solving skills
                </span>
              </li>
              <li data-aos="fade-right" className="flex space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                  Confidence to achieve
                </span>
              </li>
              <li data-aos="fade-right" className="flex space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                  A can-do attitude toward any challenge
                </span>
              </li>
            </ul>
            <p data-aos="fade-right" className="mb-8 font-light lg:text-xl">
              I pride myself in being a developer, and even though I am not perfect I always strive to achieve something better.
            </p>
          </div>
          <img
            data-aos="fade-left"
            className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
            src="desarrollador-web.png"
            alt="dashboard feature image"
          />
        </div>

        
      </div>
    </section>
  );
};

export default firstdescription;
