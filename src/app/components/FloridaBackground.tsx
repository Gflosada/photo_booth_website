export function FloridaBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none opacity-5 z-0">
      {/* Palm tree silhouettes pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-64 opacity-30">
        <svg
          viewBox="0 0 1200 300"
          className="w-full h-full"
          preserveAspectRatio="xMidYMax slice"
        >
          <defs>
            <linearGradient id="sunset" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#7F35FF', stopOpacity: 0.3 }} />
              <stop offset="50%" style={{ stopColor: '#FFD580', stopOpacity: 0.2 }} />
              <stop offset="100%" style={{ stopColor: '#FF35A5', stopOpacity: 0.1 }} />
            </linearGradient>
          </defs>
          
          {/* Simple palm silhouettes */}
          {[150, 450, 750, 1050].map((x, i) => (
            <g key={i} opacity="0.6">
              {/* Trunk */}
              <path
                d={`M ${x} 280 Q ${x + 5} 250 ${x} 220 Q ${x - 5} 190 ${x} 160`}
                fill="none"
                stroke="url(#sunset)"
                strokeWidth="4"
              />
              {/* Fronds */}
              <path
                d={`M ${x} 160 Q ${x - 30} 140 ${x - 40} 120`}
                fill="none"
                stroke="url(#sunset)"
                strokeWidth="3"
              />
              <path
                d={`M ${x} 160 Q ${x + 30} 140 ${x + 40} 120`}
                fill="none"
                stroke="url(#sunset)"
                strokeWidth="3"
              />
              <path
                d={`M ${x} 160 Q ${x - 20} 130 ${x - 35} 100`}
                fill="none"
                stroke="url(#sunset)"
                strokeWidth="2.5"
              />
              <path
                d={`M ${x} 160 Q ${x + 20} 130 ${x + 35} 100`}
                fill="none"
                stroke="url(#sunset)"
                strokeWidth="2.5"
              />
              <path
                d={`M ${x} 160 L ${x} 110`}
                fill="none"
                stroke="url(#sunset)"
                strokeWidth="2.5"
              />
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}
