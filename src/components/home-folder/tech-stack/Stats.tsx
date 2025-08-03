import CountUp from "react-countup";

type StatProps = {
  end: number;
  suffix?: string;
  label: string;
};

export default function Stat({ end, suffix = "", label }: StatProps) {
  return (
    <div className="flex flex-col items-center text-white">
      <span className="text-3xl font-bold">
        <CountUp end={end} duration={2.5} suffix={suffix} />
      </span>
      <span className="text-sm opacity-70">{label}</span>
    </div>
  );
}
