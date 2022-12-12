import { FaRegLemon } from "react-icons/fa"

export default function Feature() {
  return (
    <section className="text-gray-800 bg-yellow-500 font-semibold">
      <div className="container px-5 py-12 mx-auto">
        <div className="text-center mb-10">
          <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-white mb-4">
            Health Benefits of Lemon
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            The lemon is a round, vibrant fruit from the flowering plant family Rutaceae. Its scientific name is Citrus limon, and it’s native to North-Eastern India.
            This bright yellow citrus fruit possesses a distinctive sour taste due to its richness in citric acid.
            The lemon’s unique flavor makes it a popular ingredient in drinks, desserts, and meals. Almost all parts a lemon can be used in cooking and cleaning.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-green-700 rounded flex p-4 h-full items-center text-yellow-500 gap-x-2">
              <FaRegLemon />
              <span className="title-font font-medium text-white">Hearth Health</span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-green-700 rounded flex p-4 h-full items-center text-yellow-500 gap-x-2">
              <FaRegLemon />
              <span className="title-font font-medium text-white">Digestive Health</span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-green-700 rounded flex p-4 h-full items-center text-yellow-500 gap-x-2">
              <FaRegLemon />
              <span className="title-font font-medium text-white">Weight Management</span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-green-700 rounded flex p-4 h-full items-center text-yellow-500 gap-x-2">
              <FaRegLemon />
              <span className="title-font font-medium text-white">Anemia Prevention</span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-green-700 rounded flex p-4 h-full items-center text-yellow-500 gap-x-2">
              <FaRegLemon />
              <span className="title-font font-medium text-white">Pack Truffaut Blue</span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-green-700 rounded flex p-4 h-full items-center text-yellow-500 gap-x-2">
              <FaRegLemon />
              <span className="title-font font-medium text-white">Reduce Cancer Risk</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}