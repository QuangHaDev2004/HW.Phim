type Props = {
  percent: number;
  strokeColor: string;
};

export const CircularProgessBar = (props: Props) => {
  const { percent, strokeColor } = props;
  const perimeter = 2 * Math.PI * 20;
  const size = 50;
  const strokeWidth = 5;

  return (
    <>
      {percent > 0 && (
        <div className="absolute -top-[100%] left-[10px]">
          <svg width={size} height={size} className="">
            <circle
              r={size / 2 - strokeWidth}
              fill="#1D293D"
              cx={size / 2}
              cy={size / 2}
              stroke="white"
              strokeWidth={strokeWidth}
            />
            <circle
              r={size / 2 - strokeWidth}
              fill="none"
              cx={size / 2}
              cy={size / 2}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
              strokeDasharray={perimeter} // 2 * PI * R = 2 * 3.14 * 20
              strokeDashoffset={perimeter - (percent / 100) * perimeter}
              transform="rotate(-90)"
              style={{ transformOrigin: "center" }}
              strokeLinecap="round"
            />
            <text
              x="50%"
              y="50%"
              fill="white"
              dominantBaseline="middle"
              textAnchor="middle"
              fontSize={14}
              className="font-bold"
              dy={2.5} // chỉnh độ giữa theo chiều dọc
            >
              {percent}
            </text>
          </svg>
        </div>
      )}
    </>
  );
};
