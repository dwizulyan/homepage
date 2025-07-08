import type { FC } from "react";
import { useEffect, useState } from "react";

const Clock: FC = () => {
  const [minute, setMinute] = useState<number>(0);
  const [second, setSecond] = useState<number>(0);
  const [hour, setHour] = useState<number>(0);
  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setMinute(date.getMinutes());
      setHour(date.getHours());
      setSecond(date.getSeconds());
    }, 1000);
  }, []);
  return (
    <div>
      <h1 className="text-primary font-bold text-sm">
        {hour}:{minute < 10 ? `0${minute}` : minute}:
        {second < 10 ? `0${second}` : second}
      </h1>
    </div>
  );
};

export default Clock;
