import { motion } from "framer-motion";
const Home = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16 bg-gray-50">
      
      {/* Left Content */}
      <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
      <div className="max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Kickstart Your Career with{" "}
          <span className="text-blue-600">Top Internships</span>
        </h1>

        <p className="mt-6 text-gray-600 text-lg">
          Discover internships, gain real-world experience, and build your future with Internee.pk.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Browse Internships
          </button>

          <button className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100 transition">
            Learn More
          </button>
        </div>
      </div>
      </motion.div>

      {/* Right Side (Image Placeholder) */}
      <div className="mt-10 md:mt-0">
        <img
          src="./assets/visual.png"
          alt="Hero"
          className="rounded-xl shadow-md"
        />
      </div>

    </section>
  );
};

export default Home;