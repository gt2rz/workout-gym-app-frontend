import { useMemo } from 'react';

interface WeekDay {
  name: string;
  day: number;
  isActive: boolean;
  isCompleted: boolean;
}

export const useHomeData = () => {
  const getCurrentDate = () => {
    const date = new Date();
    const options = {
      weekday: "long" as const,
      month: "long" as const,
      day: "numeric" as const,
    };
    return date.toLocaleDateString("es-ES", options);
  };

  const weekDays: WeekDay[] = useMemo(() => [
    { name: "Lun", day: 14, isActive: true, isCompleted: false },
    { name: "Mar", day: 15, isActive: false, isCompleted: true },
    { name: "Mié", day: 16, isActive: false, isCompleted: false },
    { name: "Jue", day: 17, isActive: false, isCompleted: false },
    { name: "Vie", day: 18, isActive: false, isCompleted: false },
    { name: "Sáb", day: 19, isActive: false, isCompleted: false },
    { name: "Dom", day: 20, isActive: false, isCompleted: false },
  ], []);

  return {
    getCurrentDate,
    weekDays,
  };
};