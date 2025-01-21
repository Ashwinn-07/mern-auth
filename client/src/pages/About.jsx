import React from "react";

const About = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About This App
          </h1>
          <div className="h-1 w-40 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto"></div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-8 border-b border-gray-100">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Your Digital Journey Begins Here
            </h2>
            <p className="text-gray-600 leading-relaxed">
              "Every great journey starts with a single step." Here, that first
              step is creating an app where you can manage your profile, explore
              new features, and stay connected with your digital self.
            </p>
          </div>

          <div className="p-8 border-b border-gray-100 bg-gray-50">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Your Personal Control Center
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Think of this app as your personal control center—like Bruce Wayne
              in the Batcave, customizing his tech. Instead of fighting crime,
              you're fighting for the best user experience, with powerful
              authentication backing up every move you make.
            </p>
          </div>

          <div className="p-8 border-b border-gray-100">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Powered by Modern Tech
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Built with the awesome MERN stack (MongoDB, Express, React,
              Node.js), this app lets you sign up, log in, and manage your
              profile with ease. Behind the scenes, JSON Web Tokens (JWT) keep
              things safe, ensuring your data stays locked up like the Ark of
              the Covenant.
            </p>
          </div>

          <div className="p-8 bg-gradient-to-r from-blue-600 to-purple-600">
            <p className="text-white leading-relaxed text-lg font-medium">
              Whether you're starting your own journey or just curious, consider
              this app a springboard. Customize, explore, and make it your
              own—just like Tony Stark would do with his latest gadget.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
