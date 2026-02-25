export default function AuroraBackground() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 z-10 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      {/* Main plum blob — center */}
      <div
        className="aurora-blob aurora-1"
        style={{
          width: "70vw",
          height: "60vh",
          top: "5%",
          left: "15%",
          background:
            "radial-gradient(ellipse, #9f1e63cc 0%, #5c104080 40%, transparent 70%)",
        }}
      />

      {/* Rose accent — top right */}
      <div
        className="aurora-blob aurora-2"
        style={{
          width: "50vw",
          height: "50vh",
          top: "-10%",
          right: "-5%",
          background:
            "radial-gradient(ellipse, #be3a5a99 0%, #7a175060 40%, transparent 70%)",
        }}
      />

      {/* Warm gold — bottom left */}
      <div
        className="aurora-blob aurora-3"
        style={{
          width: "45vw",
          height: "45vh",
          bottom: "0%",
          left: "-5%",
          background:
            "radial-gradient(ellipse, #d4a57466 0%, #9f1e6344 40%, transparent 70%)",
        }}
      />

      {/* Deep plum edge — bottom right */}
      <div
        className="aurora-blob aurora-4"
        style={{
          width: "40vw",
          height: "40vh",
          bottom: "-5%",
          right: "5%",
          background:
            "radial-gradient(ellipse, #2d0a2299 0%, #5c104066 40%, transparent 70%)",
        }}
      />

      {/* Radial vignette to darken edges */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 40%, transparent 40%, #09090bcc 100%)",
        }}
      />
    </div>
  );
}
