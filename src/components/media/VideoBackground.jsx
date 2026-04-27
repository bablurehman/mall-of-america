import mall from "../../assets/videos/mall.mp4";

const VideoBackground = ({ overlay = true, className = "", children }) => {
  return (
    <section
      className={`relative w-full min-h-screen overflow-hidden ${className}`}
    >
      {/* VIDEO */}
      <video
        src={mall}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* PREMIUM OVERLAY */}
      {overlay && (
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background: `
              linear-gradient(
                to bottom,
                rgba(0,0,0,0.70) 0%,
                rgba(0,0,0,0.75) 45%,
                rgba(0,0,0,0.80) 100%
              )
            `,
          }}
        />
      )}

      {/* CONTENT */}
      <div className="relative z-10 min-h-screen flex items-center px-6 md:px-10">
        {children}
      </div>
    </section>
  );
};

export default VideoBackground;
