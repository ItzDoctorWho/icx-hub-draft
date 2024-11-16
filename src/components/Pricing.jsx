import { CheckCircle2 } from "lucide-react";
import { globalPrograms } from "../constants";

const Programs = () => {
  return (
    <div className="m-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        Our Global Programs
      </h2>
      <div className="flex flex-wrap">
        {globalPrograms.map((program, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="relative p-10 border border-neutral-700 rounded-xl">
              {/* Hanging Logo */}
              <div className="absolute -top-0 -right-0 bg-white rounded-full shadow-lg flex items-center justify-center mr-10">
                <img
                  src={program.logo}
                  alt={`${program.title} logo`}
                  style={{ height: "100px" }}
                />
              </div>
              {/* Card Content */}
              <p className="text-4xl mb-8 mt-8">{program.title}</p>
              <p className="mb-6 text-lg text-neutral-600">
                {program.description}
              </p>
              <ul>
                {program.highlights.map((highlight, index) => (
                  <li key={index} className="mt-6 flex items-center">
                    <CheckCircle2 />
                    <span className="ml-2">{highlight}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-10 tracking-tight text-xl hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-900 hover:text-white border border-blue-900 rounded-lg transition duration-200"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
