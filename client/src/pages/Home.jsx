import React from "react";

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Welcome to Your Profile Hub!
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Your one-stop destination for managing and customizing your digital
            presence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="mb-4">
              <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              "With great power comes great responsibility." – Uncle Ben And
              here, that power is customizing your profile. No radioactive
              spiders needed!
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="mb-4">
              <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Ever felt like Tony Stark in front of his glowing screens,
              tweaking his armor? That's the vibe here—except instead of
              building an Iron Man suit, you're building your digital self.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="mb-4">
              <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              If this were the Upside Down from Stranger Things, your profile
              would be the flashlight guiding you through the chaos. But don't
              worry, no Demogorgons here—just a place for you to shine.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="mb-4">
              <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              So channel your inner Jedi, step into the Batcave, or assemble
              your Avengers. This is your story—make it legendary.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
