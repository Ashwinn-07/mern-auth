import React from "react";

const About = () => {
  return (
    <div className="px-6 py-16 max-w-3xl mx-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg shadow-lg text-white">
      <h1 className="text-4xl font-extrabold mb-6 text-center text-slate-100">
        About This App
      </h1>
      <div className="space-y-6">
        <p className="text-lg font-semibold leading-relaxed">
          “Every great journey starts with a single step.” Here, that first step
          is creating an app where you can manage your profile, explore new
          features, and stay connected with your digital self.
        </p>
        <p className="text-lg font-semibold leading-relaxed">
          Think of this app as your personal control center—like Bruce Wayne in
          the Batcave, customizing his tech. Instead of fighting crime, you're
          fighting for the best user experience, with powerful authentication
          backing up every move you make.
        </p>
        <p className="text-lg font-semibold leading-relaxed">
          Built with the awesome MERN stack (MongoDB, Express, React, Node.js),
          this app lets you sign up, log in, and manage your profile with ease.
          Behind the scenes, JSON Web Tokens (JWT) keep things safe, ensuring
          your data stays locked up like the Ark of the Covenant.
        </p>
        <p className="text-lg font-semibold leading-relaxed">
          Whether you’re starting your own journey or just curious, consider
          this app a springboard. Customize, explore, and make it your own—just
          like Tony Stark would do with his latest gadget.
        </p>
      </div>
    </div>
  );
};

export default About;
