import { useSate } from "react";

const Timer = () => {
  const [days, setDays] = useSate(0);
  const [hours, sethours] = useSate(0);
  const [minutes, setminutes] = useSate(0);
  const [seconds, setseconds] = useSate(0);

  const deadline = "December, 31, 2024";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();
  };
};
