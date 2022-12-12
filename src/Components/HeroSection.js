import lemonimg from "../images/lemon720x600.png"

export default function HeroSection() {
  return (
    <section className=" text-gray-800 bg-yellow-500 font-semibold">
      <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
          <img className="h-[426px] w-[512px]" alt="" src={ lemonimg } />
        </div>
        <div
          className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            What Are Lemons?
          </h1>
          <p className="mb-8 leading-relaxed">
            A lemon is a bright yellow citrus fruit that is known for its acidic juice. The fruit is harvested during several months of the year with the timing depending on the tree's geographical location.
            This makes fresh lemons available year-round in many parts of the world.
            The fruit can be dried, candied, preserved, or juiced and used in drinks or to add tang to a wide range of dishes.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-green-700 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
              More lemon!!!
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}