export default function VersatileMark({
  className,
  fill = "currentColor",
}: {
  className?: string;
  fill?: string;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <line
        x1="26"
        y1="12"
        x2="40"
        y2="88"
        stroke={fill}
        strokeWidth="13"
        strokeLinecap="round"
      />
      <line
        x1="52"
        y1="41"
        x2="63"
        y2="88"
        stroke={fill}
        strokeWidth="13"
        strokeLinecap="round"
      />
      <line
        x1="52"
        y1="12"
        x2="61"
        y2="30"
        stroke={fill}
        strokeWidth="13"
        strokeLinecap="round"
      />
      <circle cx="46" cy="49" r="10.5" stroke={fill} strokeWidth="6" />
      <circle cx="73" cy="22" r="7.5" fill={fill} />
    </svg>
  );
}
