// ---------------------------------------------------------------------------
// Hand-drawn flat illustration of a developer at her desk (plants + coffee!).
// Swap this component for a real photo/illustration by replacing the <img>
// in Hero.tsx and deleting this file — everything else keeps working.
// ---------------------------------------------------------------------------

const C = {
  skin: '#FFD9B8',
  hair: '#6B4A2B',
  hairDark: '#5A3D22',
  top: '#FF8A6B',
  deskTop: '#F9CBA6',
  deskFront: '#EFB790',
  deskLeg: '#C98A63',
  frame: '#7C5CE0',
  screen: '#FFF8F1',
  coral: '#FF6B4E',
  mint: '#3CB68F',
  mintLight: '#7DDCB5',
  mintPale: '#A8EACF',
  sunny: '#FFE27F',
  plum: '#3A2B4F',
  blush: '#FFB7C5',
};

export default function Avatar({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 460 430"
      role="img"
      aria-label="Flat illustration of Marwa coding at her desk with plants and coffee"
      className={className}
    >
      {/* ---- Sparkle doodles ---- */}
      <Star x={104} y={96} s={14} fill={C.coral} />
      <Star x={352} y={84} s={12} fill={C.mint} />
      <Star x={330} y={176} s={10} fill={C.sunny} />
      <Star x={140} y={222} s={9} fill={C.frame} opacity={0.7} />

      {/* ---- Desk (drawn before arms/hands so hands overlap the keyboard) ---- */}
      {/* Desk legs */}
      <rect x={92} y={318} width={16} height={86} rx={7} fill={C.deskLeg} />
      <rect x={352} y={318} width={16} height={86} rx={7} fill={C.deskLeg} />
      {/* Desk surface */}
      <rect x={60} y={298} width={340} height={24} rx={12} fill={C.deskFront} />
      <rect x={60} y={294} width={340} height={12} rx={6} fill={C.deskTop} />

      {/* ---- Monitor ---- */}
      <rect x={196} y={284} width={28} height={14} rx={5} fill={C.frame} />
      <rect x={150} y={176} width={140} height={104} rx={16} fill={C.frame} />
      <rect x={158} y={184} width={124} height={88} rx={10} fill={C.screen} />
      {/* code lines on the screen */}
      <rect x={172} y={202} width={70} height={8} rx={4} fill={C.coral} />
      <rect x={172} y={220} width={44} height={8} rx={4} fill={C.frame} opacity={0.55} />
      <rect x={172} y={238} width={58} height={8} rx={4} fill={C.mint} />
      <rect x={172} y={256} width={30} height={8} rx={4} fill={C.sunny} />

      {/* ---- Character behind the desk ---- */}
      {/* Neck */}
      <rect x={214} y={156} width={22} height={26} rx={9} fill={C.skin} />

      {/* Torso */}
      <rect x={170} y={176} width={110} height={160} rx={55} fill={C.top} />
      {/* Subtle highlight on the top */}
      <path d="M 208 198 L 225 242 L 242 198 Q 225 188 208 198 Z" fill="#FFFFFF" opacity="0.28" />

      {/* Head */}
      <g>
        {/* back hair (bob) */}
        <rect x={183} y={90} width={84} height={76} rx={32} fill={C.hair} />
        {/* face */}
        <circle cx={225} cy={134} r={37} fill={C.skin} />
        {/* fringe */}
        <path d="M 186 124 Q 225 88 264 124 L 264 132 Q 225 108 186 132 Z" fill={C.hair} />
        {/* space buns */}
        <circle cx={186} cy={104} r={13} fill={C.hairDark} />
        <circle cx={264} cy={104} r={13} fill={C.hairDark} />
        <circle cx={189} cy={102} r={5} fill="#FFE27F" opacity={0.6} />
        <circle cx={261} cy={102} r={5} fill="#FFE27F" opacity={0.6} />
        {/* blush */}
        <ellipse cx={202} cy={142} rx={7} ry={4.5} fill={C.blush} opacity={0.85} />
        <ellipse cx={248} cy={142} rx={7} ry={4.5} fill={C.blush} opacity={0.85} />
        {/* eyes */}
        <circle cx={211} cy={130} r={3.2} fill={C.plum} />
        <circle cx={239} cy={130} r={3.2} fill={C.plum} />
        <circle cx={211.8} cy={129.2} r={1.1} fill="#FFFFFF" />
        <circle cx={239.8} cy={129.2} r={1.1} fill="#FFFFFF" />
        {/* smile */}
        <path
          d="M 216 144 Q 225 152 234 144"
          stroke={C.plum}
          strokeWidth={3}
          strokeLinecap="round"
          fill="none"
        />
      </g>

      {/* Arms reaching to the keyboard */}
      <path
        d="M 180 208 Q 152 244 164 278"
        stroke={C.skin}
        strokeWidth={22}
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 270 208 Q 298 244 286 278"
        stroke={C.skin}
        strokeWidth={22}
        strokeLinecap="round"
        fill="none"
      />
      {/* Hands */}
      <circle cx={164} cy={280} r={11} fill={C.skin} />
      <circle cx={286} cy={280} r={11} fill={C.skin} />

      {/* Keyboard */}
      <rect x={186} y={284} width={92} height={18} rx={8} fill={C.plum} opacity={0.9} />
      <rect x={194} y={290} width={10} height={5} rx={2.5} fill={C.screen} opacity={0.85} />
      <rect x={208} y={290} width={10} height={5} rx={2.5} fill={C.screen} opacity={0.6} />
      <rect x={222} y={290} width={10} height={5} rx={2.5} fill={C.screen} opacity={0.85} />
      <rect x={236} y={290} width={10} height={5} rx={2.5} fill={C.screen} opacity={0.6} />
      <rect x={250} y={290} width={10} height={5} rx={2.5} fill={C.screen} opacity={0.85} />

      {/* ---- Plant (left) ---- */}
      <g>
        <path d="M 86 294 L 140 294 L 132 252 L 94 252 Z" fill={C.coral} />
        <rect x={90} y={246} width={52} height={10} rx={5} fill="#EF5237" />
        <ellipse cx={112} cy={230} rx={9} ry={24} transform="rotate(-22 112 230)" fill={C.mintLight} />
        <ellipse cx={104} cy={234} rx={8} ry={22} transform="rotate(28 104 234)" fill={C.mint} />
        <ellipse cx={123} cy={228} rx={8} ry={22} transform="rotate(24 123 228)" fill={C.mintPale} />
        <ellipse cx={113} cy={246} rx={6} ry={16} fill={C.mint} />
      </g>

      {/* ---- Coffee mug (right) ---- */}
      <g>
        <path d="M 356 282 C 374 282 374 302 356 302" stroke={C.sunny} strokeWidth={9} strokeLinecap="round" fill="none" />
        <rect x={316} y={272} width={42} height={36} rx={9} fill={C.sunny} />
        <rect x={316} y={272} width={42} height={10} rx={5} fill="#F4C85B" />
        <path d="M 327 264 Q 331 254 327 246" stroke={C.frame} strokeWidth={4} strokeLinecap="round" fill="none" opacity={0.55} />
        <path d="M 342 264 Q 346 254 342 246" stroke={C.frame} strokeWidth={4} strokeLinecap="round" fill="none" opacity={0.55} />
      </g>
    </svg>
  );
}

function Star({
  x,
  y,
  s,
  fill,
  opacity = 1,
}: {
  x: number;
  y: number;
  s: number;
  fill: string;
  opacity?: number;
}) {
  return (
    <path
      d={`M ${x} ${y - s} Q ${x} ${y} ${x + s} ${y} Q ${x} ${y} ${x} ${y + s} Q ${x} ${y} ${x - s} ${y} Q ${x} ${y} ${x} ${y - s} Z`}
      fill={fill}
      opacity={opacity}
    />
  );
}
