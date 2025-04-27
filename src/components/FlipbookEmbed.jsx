import { useEffect } from "react";

const FlipbookEmbed = () => {
  useEffect(() => {
    window.location.href = "https://heyzine.com/flip-book/bac0f481a4.html";
  }, []);

  return (
    <div className="w-full flex justify-center items-center p-4">
      <p>Redirecting to the flipbook...</p>
    </div>
  );
};

export default FlipbookEmbed;
