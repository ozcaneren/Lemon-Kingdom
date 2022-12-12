import lemon1  from "../images/lemon-600x360.png"
import lemon2  from "../images/lemon1-600x360.png"
import lemon6  from "../images/lemon5-600x360.png"

export default function Gallery() {
  return (
      <section className="text-gray-200 bg-yellow-500">
        <div className="container px-5 pt-12 mx-auto">
          <h1 className="text-center font-bold text-4xl mb-12 text-white">Types of Lemons</h1>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-green-800 rounded-lg overflow-hidden">
                  <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={lemon2} alt="blog" />
                    <div className="p-6 bg-green-800">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-300 mb-1">
                        CATEGORY
                      </h2>
                      <h1 className="title-font text-lg font-medium text-white mb-3">
                        The Catalyzer
                      </h1>
                      <p className="leading-relaxed mb-3 text-gray-200 font-semibold">
                        Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                        microdosing tousled waistcoat.
                      </p>
                    </div>
                </div>
              </div>
            <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-green-800 rounded-lg overflow-hidden">
                  <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={lemon6} alt="blog" />
                  <div className="p-6 bg-green-800">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-300 mb-1">
                      CATEGORY
                    </h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">
                      The Catalyzer
                    </h1>
                    <p className="leading-relaxed mb-3 text-gray-200 font-semibold">
                      Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                      microdosing tousled waistcoat.
                    </p>
                  </div>
                </div>
              </div>
            <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-green-800 rounded-lg overflow-hidden">
                  <img className="lg:h-48 md:h-36 w-full" src={lemon1} alt="blog" />
                  <div className="p-6 bg-green-800">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-300 mb-1">
                      CATEGORY
                    </h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">
                      The Catalyzer
                    </h1>
                    <p className="leading-relaxed mb-3 text-gray-200 font-semibold">
                      Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                      microdosing tousled waistcoat.
                    </p>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>
  );
}