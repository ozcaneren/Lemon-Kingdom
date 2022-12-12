import { HiOutlineLocationMarker } from 'react-icons/hi';
import { BsTelephone } from 'react-icons/bs';
import {AiOutlineMail} from 'react-icons/ai';
import {FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn} from 'react-icons/fa';

export default function Contact() {
  return (
    <section className="min-h-screen text-gray-200 body-font bg-yellow-500 ">
      <div className="container flex flex-col min-h-screen lg:pt-6 px-6 py-6 mx-auto">
        <div className="flex-1 lg:flex lg:items-center lg:-mx-6">
          <div className="text-white lg:w-1/2 lg:mx-6">
            <h1 className="text-3xl font-semibold capitalize lg:text-4xl">Get a quote</h1>

            <p className="max-w-xl mt-6 font-semibold text-gray-800">Ask us everything and we would love to hear from you</p>

            <div className="mt-6 space-y-8 md:mt-8">
              <p className="flex items-start -mx-2">
                <HiOutlineLocationMarker className="flex-shrink-0 w-6 h-6 mx-2 text-green-800" />
                <span className="mx-2 text-white truncate font-semibold  text-gray-800">
                            Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522
                </span>
              </p>

              <p className="flex items-start -mx-2">
                <BsTelephone className="flex-shrink-0 w-6 h-6 mx-2 text-green-800" />
                <span className="mx-2 text-white truncate font-semibold text-gray-800">(257) 563-7401</span>
              </p>

              <p className="flex items-start -mx-2">
                <AiOutlineMail className="flex-shrink-0 w-6 h-6 mx-2 text-green-800" />

                <span className="mx-2 text-white truncate font-semibold text-gray-800">acb@example.com</span>
              </p>
            </div>

            <div className="mt-6 md:mt-8">
              <h3 className="text-gray-100 font-semibold pb-2">Follow us</h3>

              <div className="flex mt-4 -mx-1.5 gap-x-4">
                <a href="https://github.com" className="mx-1.5 text-white transition-colors duration-300 transform hover:text-blue-500">
                    <FaFacebookF className="w-6 h-6 text-green-800" />
                </a>

                <a href="https://github.com" className="mx-1.5 text-white transition-colors duration-300 transform hover:text-blue-500">
                    <FaTwitter className="w-6 h-6 text-green-800" />
                </a>

                <a href="https://github.com" className="mx-1.5 text-white transition-colors duration-300 transform hover:text-blue-500">
                    <FaInstagram className="w-6 h-6 text-green-800" />
                </a>

                <a href="https://github.com" className="mx-1.5 text-white transition-colors duration-300 transform hover:text-blue-500">
                    <FaLinkedinIn className="w-6 h-6 text-green-800" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 lg:w-1/2 lg:mx-6">
            <div className="w-full px-8 py-10 mx-auto overflow-hidden shadow-2xl rounded-xl bg-green-800 lg:max-w-xl">
              <h1 className="text-2xl font-medium text-gray-700 dark:text-gray-200">Contact form</h1>

              <form className="mt-6">
                <div className="flex-1">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Full Name</label>
                  <input type="text" placeholder="John Doe" className="block w-full px-5 py-3 mt-2 text-gray-700 bg-gray-300 border border-gray-200 rounded-md dark:text-green-800 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                </div>

                <div className="flex-1 mt-6">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                  <input type="email" placeholder="johndoe@example.com"
                         className="block w-full px-5 py-3 mt-2 text-gray-700 bg-gray-300 border border-gray-200 rounded-md dark:text-green-800 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                </div>

                <div className="w-full mt-6">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
                  <textarea
                    className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-gray-300 border border-gray-200 rounded-md md:h-48 dark:text-green-800 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    placeholder="Message"></textarea>
                </div>

                <button
                  className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-yellow-500 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
                  get in touch
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}