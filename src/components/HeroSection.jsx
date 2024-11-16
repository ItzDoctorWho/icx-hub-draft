import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import bgImage from "../assets/bg.jpeg"; // Use import for consistency

const HeroSection = () => {
  return (
    <div className="relative bg-cover bg-center">
      {/* Full-width image banner */}
      <div
        className="relative flex justify-center items-center w-full h-[500px] lg:h-[700px] bg-contain bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Transparent overlay for contrast */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* Motto content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-wide">
            Dragging impact into
            <span className="bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text">
              {" "}
              the ecosystem
            </span>
          </h1>
          <p className="mt-6 text-lg text-white max-w-4xl mx-auto">
            Our mission is to foster meaningful cultural exchange experiences
            through impactful volunteering and professional opportunities that
            connect individuals across borders and create lasting change. Join
            us to build a globally diverse and empowered community!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
