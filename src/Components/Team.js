import {GrFacebook, GrInstagram} from "react-icons/gr"
import {GiFarmer} from "react-icons/gi"

export default function Team() {
  return (
    <section className="bg-white dark:bg-yellow-500">
      <div className="container px-6 lg:pt-10 pb-10 mx-auto">
        <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
          Workers
        </h1>
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-8 md:grid-cols-2 xl:grid-cols-3">
          <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-green-800 dark:border-green-800 dark:hover:border-transparent">
            <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                 src="https://images.unsplash.com/photo-1509506489701-dfe23b067808?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1491&q=80"
                 alt="" />
              <h1 className="mt-4 text-2xl font-semibold text-white capitalize group-hover:text-white">
                Okafor Ikenna Obama
              </h1>

              <p className="mt-2 font-semibold text-gray-100 capitalize group-hover:text-gray-300">
                worker
              </p>

              <div className="flex mt-3 -mx-2">
                <a href="https://github.com" className="mx-2 text-green-800 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Reddit">
                  <GrFacebook size={23} />
                </a>

                <a href="https://github.com" className="mx-2 text-green-800 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Facebook">
                  <GrInstagram size={24} />
                </a>

                <a href="https://github.com" className="mx-2 text-green-800 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Github">
                  <GiFarmer size={25} />
                </a>
              </div>
          </div>
          <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-green-800 dark:border-green-800 dark:hover:border-transparent">
            <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                 src="https://images.unsplash.com/photo-1545830790-68595959c491?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGZhcm1lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                 alt="" />
            <h1 className="mt-4 text-2xl font-semibold text-white capitalize group-hover:text-white">
              Onyekachukwu Ayodele
            </h1>

            <p className="mt-2 font-semibold text-gray-100 capitalize group-hover:text-gray-300">
              worker
            </p>

            <div className="flex mt-3 -mx-2">
              <a href="https://github.com" className="mx-2 text-green-800 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Reddit">
                <GrFacebook size={23} />
              </a>

              <a href="https://github.com" className="mx-2 text-green-800 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Facebook">
                <GrInstagram size={24} />
              </a>

              <a href="https://github.com" className="mx-2 text-green-800 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Github">
                <GiFarmer size={25} />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-green-800 dark:border-green-800 dark:hover:border-transparent">
            <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                 src="https://images.unsplash.com/photo-1565346156504-91cca27d6e62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=722&q=80"
                 alt="" />
            <h1 className="mt-4 text-2xl font-semibold text-white capitalize group-hover:text-white">
              Rajabu Kamau
            </h1>

            <p className="mt-2 font-semibold text-gray-100 capitalize group-hover:text-gray-300">
              worker
            </p>

            <div className="flex mt-3 -mx-2">
              <a href="https://github.com" className="mx-2 text-green-800 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Reddit">
                <GrFacebook size={23} />
              </a>

              <a href="https://github.com" className="mx-2 text-green-800 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Facebook">
                <GrInstagram size={24} />
              </a>

              <a href="https://github.com" className="mx-2 text-green-800 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Github">
                <GiFarmer size={25} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}