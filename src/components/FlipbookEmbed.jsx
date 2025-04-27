import React from "react";

const FlipbookEmbed = () => {
  return (
    <div className="w-full flex justify-center items-center p-4">
      <div className="w-[90%] aspect-video shadow-xl rounded-xl overflow-hidden">
        <iframe
          src="https://heyzine.com/flip-book/bac0f481a4.html"
          title="Flipbook"
          width="100%"
          height="100%"
          frameBorder="0"
          allow="fullscreen"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
        ></iframe>
      </div>
    </div>
  );
};

export default FlipbookEmbed;
