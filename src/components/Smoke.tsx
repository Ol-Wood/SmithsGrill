/**
 * Drifting smoke haze, drawn purely in CSS.
 *
 * Three soft plumes on independent timings, plus a lightly-blurred fractal-noise
 * layer for wisp structure. The whole stack is masked by an ellipse so it has no
 * straight edges, and it stays dark — a light haze would expose the fringing on
 * the background-removed trailer render sitting in front of it.
 */

// feTurbulence desaturated to grey. Kept only lightly blurred: blur it hard and
// the noise averages out into a flat grey panel.
const NOISE =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='300'%3E%3Cfilter id='s'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.008' numOctaves='5' seed='7'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='600' height='300' filter='url(%23s)'/%3E%3C/svg%3E\")";

type SmokeProps = {
  className?: string;
};

export default function Smoke({ className = "" }: SmokeProps) {
  // The mask lives on the wrapper, so it fades every layer inside it at once.
  return (
    <div aria-hidden className={`mask-smoke pointer-events-none absolute ${className}`}>
      {/* Broad low haze */}
      <div className="absolute inset-x-[10%] bottom-0 h-1/2 animate-smoke-a rounded-[50%] bg-[radial-gradient(closest-side,rgba(148,154,166,0.16),transparent)] blur-3xl" />

      {/* Left plume */}
      <div className="absolute bottom-[12%] left-[14%] h-2/3 w-2/5 animate-smoke-b rounded-[50%] bg-[radial-gradient(closest-side,rgba(160,166,178,0.14),transparent)] blur-3xl" />

      {/* Right plume, rising higher */}
      <div className="absolute bottom-[20%] right-[16%] h-3/4 w-1/3 animate-smoke-c rounded-[50%] bg-[radial-gradient(closest-side,rgba(170,176,188,0.12),transparent)] blur-3xl" />

      {/* Wisp texture */}
      <div
        className="absolute inset-0 animate-smoke-texture blur-[4px]"
        style={{ backgroundImage: NOISE, backgroundSize: "1500px 750px" }}
      />
    </div>
  );
}
