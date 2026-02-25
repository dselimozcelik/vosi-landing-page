export default function AuroraBackground() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      {/* Scanlines */}
      <div className="scanlines absolute inset-0 z-20 opacity-40" />

      {/* Noise grain */}
      <div
        className="absolute inset-0 z-10 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      {/* Main plum — slightly left of center */}
      <div
        className="aurora-blob aurora-1"
        style={{
          width: "65vw",
          height: "65vh",
          top: "2%",
          left: "8%",
          background: "radial-gradient(ellipse, #9f1e63e0 0%, #5c104090 45%, transparent 70%)",
        }}
      />

      {/* Rose — top right */}
      <div
        className="aurora-blob aurora-2"
        style={{
          width: "55vw",
          height: "55vh",
          top: "-15%",
          right: "-8%",
          background: "radial-gradient(ellipse, #be3a5ab0 0%, #7a175070 45%, transparent 70%)",
        }}
      />

      {/* Warm gold — bottom left */}
      <div
        className="aurora-blob aurora-3"
        style={{
          width: "40vw",
          height: "40vh",
          bottom: "5%",
          left: "-5%",
          background: "radial-gradient(ellipse, #d4a57478 0%, #9f1e6350 45%, transparent 70%)",
        }}
      />

      {/* Deep edge — bottom right */}
      <div
        className="aurora-blob aurora-4"
        style={{
          width: "38vw",
          height: "38vh",
          bottom: "-8%",
          right: "8%",
          background: "radial-gradient(ellipse, #2d0a22b0 0%, #5c104070 40%, transparent 70%)",
        }}
      />

      {/* Hard vignette — keeps text readable */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "radial-gradient(ellipse 90% 75% at 40% 35%, transparent 35%, #080809d0 90%)",
        }}
      />

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 z-10"
        style={{
          background: "linear-gradient(to bottom, transparent, #080809)",
        }}
      />
    </div>
  );
}
