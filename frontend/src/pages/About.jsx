import React from "react";
import RoughNotationComponent from "../components/RoughNotationComp";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto dark:bg-slate-900 dark:text-white rounded-lg shadow-lg p-8 dark:border">
        <h1 className="text-4xl font-bold text-center dark:text-green-500  text-green-700 mb-8">
          About Me
        </h1>

        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white ">
              <RoughNotationComponent
                color="red"
                type="underline"
                animationDuration={2000}
              >
                Mohammed Sobhi{" "}
              </RoughNotationComponent>
            </h2>
            <p className="text-lg text-gray-600 dark:text-white ">
              MERN Stack Developer
            </p>
          </div>

          <div className="text-gray-700 dark:text-white  leading-relaxed">
            <p>
              Hello! I'm{" "}
              <span className="font-semibold">
                <RoughNotationComponent
                  color="red"
                  type="underline"
                  animationDuration={2000}
                >
                  Mohammed Sobhi{" "}
                </RoughNotationComponent>
              </span>
              , a passionate and dedicated{" "}
              <span className="font-semibold">
                <RoughNotationComponent
                  color="red"
                  type="box"
                  animationDuration={2000}
                >
                  MERN Stack Developer{" "}
                </RoughNotationComponent>{" "}
              </span>{" "}
              with a strong focus on building scalable, efficient, and
              user-friendly web applications.
            </p>
            <p className="mt-4">
              My expertise lies in the{" "}
              <span className="font-semibold">MERN stack</span>, which includes:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>
                <span className="font-semibold">MongoDB</span>: For database
                management and storage.
              </li>
              <li>
                <span className="font-semibold">Express.js</span>: For building
                robust backend APIs.
              </li>
              <li>
                <span className="font-semibold">React.js</span>: For creating
                dynamic and responsive user interfaces.
              </li>
              <li>
                <span className="font-semibold">Node.js</span>: For server-side
                development and runtime environment.
              </li>
            </ul>
            <p className="mt-4">
              I enjoy turning complex problems into simple, beautiful, and
              intuitive solutions. Whether it's designing a sleek user interface
              or optimizing backend performance, I strive to deliver
              high-quality results that meet both user needs and business goals.
            </p>
            <p className="mt-4">
              When I'm not coding, I love exploring new technologies,
              contributing to open-source projects, and staying updated with the
              latest trends in web development.
            </p>
          </div>

          <div className="text-center mt-8">
            <RoughNotationComponent
              color="red"
              type="circle"
              animationDuration={2000}
              padding={10}
            >
              <a
                href="https://github.com/MohammedSobhi606"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm font-medium text-blue-600 hover:text-blue-800"
              >
                GitHub
              </a>
              <span className="mx-2">|</span>
              <a
                href="https://www.linkedin.com/in/mohammed-sobhi-gouda-a62284271"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm font-medium text-blue-600 hover:text-blue-800"
              >
                LinkedIn
              </a>
              <span className="mx-2">|</span>
            </RoughNotationComponent>
          </div>
        </div>
      </div>
    </div>
  );
}
