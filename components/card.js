import Link from 'next/link';

const card = () => {
  return (
    <section id="FEACHER" className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
        <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
          <h2
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="30"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
            className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white"
          >
            Some of the programming languages I have knowledge in
          </h2>
          <p
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="40"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
            className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400"
          >
            I have learned different programming languages trought my life, here are some:
          </p>
        </div>
        <div
          data-aos="fade-up"
          className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0"
        >
          <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <h3 className="mb-4 text-2xl font-semibold">Javascript</h3>
            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else            </p>


            
          </div>

          <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <h3 className="mb-4 text-2xl font-semibold">HTML</h3>
            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            HTML, is a programming language used to describe the structure of web pages. HTML makes it possible to create static pages with text, headings, tables, lists, images, links, and so on.            </p>
            


          </div>

          <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <h3 className="mb-4 text-2xl font-semibold">CSS</h3>
            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            CSS is the language for describing the presentation of Web pages, including colors, layout, and fonts. It allows one to adapt the presentation to different types of devices, such as large screens, small screens, or printers. CSS is independent of HTML and can be used with any XML-based markup language.            </p>
            

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default card;
