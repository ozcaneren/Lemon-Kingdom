import  { FaQuoteLeft } from "react-icons/fa"


export default function Testimonial() {
  return (
    <section className="text-gray-200 bg-yellow-500 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-3xl font-medium title-font text-white mb-12 text-center">Reacts of Lemon</h1>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/2 w-full">
            <div className="h-full bg-green-700 p-8 rounded">
              <FaQuoteLeft className="block w-5 h-5 text-yellow-500 mb-4" />
              <p className="leading-relaxed mb-6">
                Limonu tattığında ağzında ekşi bir tat bırakır, bu tat çoğu kişinin hoşuna gitmese de bir kısmının da hoşuna gitmektedir.
                Ben hoşuna gidenlerin tarafında yer alıyorum. Yaşasın limonlar!!!
              </p>
              <a href="https://github.com" className="inline-flex items-center">
                <img alt="testimonial" src="https://dummyimage.com/106x106"
                     className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-white">Eren Ozcan</span>
                  <span className="text-gray-300 text-sm">PROFESSOR DOCTOR</span>
                </span>
              </a>
            </div>
          </div>
          <div className="p-4 md:w-1/2 w-full">
            <div className="h-full bg-green-700 p-8 rounded">
              <FaQuoteLeft className="block w-5 h-5 text-yellow-500 mb-4" />
              <p className="leading-relaxed mb-6">
                Normalde tadını pek sevmesem de tekilayla olduğunda mükemmel gidiyor!!
                Ekşi normalde sevmem ama limonun o rengii o tekilayla uyumu ımmmm ağzım sulandııı!
              </p>
              <a href="https://github.com" className="inline-flex items-center">
                <img alt="testimonial" src="https://dummyimage.com/107x107"
                     className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-white">Zeynep Ozcan</span>
                  <span className="text-gray-300 text-sm">PROFESSOR DOCTOR NURSE</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}