import { G, G2, GL } from "../theme";

export default function Logo({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <defs>
        <linearGradient id="lg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor={GL} />
          <stop offset="50%"  stopColor={G}  />
          <stop offset="100%" stopColor={G2} />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Heart shape */}
      <path
        d="M32 52C32 52 6 36 6 20C6 12 12 7 19 7C23.5 7 27.5 9.5 32 14.5C36.5 9.5 40.5 7 45 7C52 7 58 12 58 20C58 36 32 52 32 52Z"
        fill="url(#lg)" filter="url(#glow)" opacity="0.95"
      />
      {/* Inner highlight */}
      <path
        d="M32 46C32 46 12 33 12 21C12 16 16 12.5 20.5 12.5C24 12.5 27.5 14.5 32 19.5C36.5 14.5 40 12.5 43.5 12.5C48 12.5 52 16 52 21C52 33 32 46 32 46Z"
        fill="white" opacity="0.07"
      />
      {/* Shine */}
      <ellipse cx="23" cy="16" rx="4" ry="2.5" fill="white" opacity="0.22" transform="rotate(-30 23 16)" />
      {/* Sparkle */}
      <path d="M51 9L52.5 12L54 9L52.5 6Z" fill={G} opacity="0.7" />
    </svg>
  );
}
