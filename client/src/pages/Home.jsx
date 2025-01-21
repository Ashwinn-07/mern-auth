import React from "react";

const Home = () => {
  return (
    <div className="px-6 py-16 max-w-3xl mx-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg shadow-lg text-white">
      <h1 className="text-4xl font-extrabold mb-6 text-center text-slate-100">
        Welcome to Your Profile Hub!
      </h1>
      <div className="space-y-6">
        <p className="text-lg font-semibold leading-relaxed">
          “With great power comes great responsibility.” – Uncle Ben And here,
          that power is customizing your profile. No radioactive spiders needed!
        </p>
        <p className="text-lg font-semibold leading-relaxed">
          Ever felt like Tony Stark in front of his glowing screens, tweaking
          his armor? That’s the vibe here—except instead of building an Iron Man
          suit, you’re building your digital self. Still pretty epic if you ask
          me.
        </p>
        <p className="text-lg font-semibold leading-relaxed">
          If this were the Upside Down from *Stranger Things*, your profile
          would be the flashlight guiding you through the chaos. But don’t
          worry, no Demogorgons here—just a place for you to shine.
        </p>
        <p className="text-lg font-semibold leading-relaxed">
          So channel your inner Jedi, step into the Batcave, or assemble your
          Avengers. This is your story—make it legendary.
        </p>
      </div>
    </div>
  );
};

export default Home;
