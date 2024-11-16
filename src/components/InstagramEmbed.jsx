import React, { useEffect } from "react";

const InstagramEmbed = ({ embedUrls }) => {
  useEffect(() => {
    // Load Instagram embed script
    if (!window.instgrm) {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    } else {
      window.instgrm.Embeds.process();
    }
  }, [embedUrls]);

  return (
    <div className="mt-10 mx-auto w-full max-w-7xl">
      <h2 className="text-3xl sm:text-5xl text-center mb-8">
        People's experiences
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {embedUrls.map((url, index) => (
          <div key={index} className="instagram-embed">
            <blockquote
              className="instagram-media"
              data-instgrm-permalink={url}
              data-instgrm-version="14"
              style={{ margin: "1rem auto", maxWidth: "500px" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstagramEmbed;
