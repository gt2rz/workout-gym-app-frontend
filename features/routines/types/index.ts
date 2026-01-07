export interface Routine {
  id: string;
  name: string;
  description?: string;
  image?: string;
  category: string;
  status: 'active' | 'completed' | 'upcoming' | 'planned';
  progress?: number;
  duration?: string;
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
}

export interface Macrocycle extends Routine {
  phase: string;
  weeks: number;
  currentWeek: number;
  focus: string;
  startDate: string;
}

export interface Microcycle extends Routine {
  week: string;
  phase: string;
  sessions: number;
  completedSessions: number;
  focus: string;
  intensity: 'low' | 'medium' | 'high';
}

export interface Split extends Routine {
  type: 'push-pull-legs' | 'upper-lower' | 'full-body' | 'body-part';
  frequency: number;
  sessions: string[];
  muscleGroups: string[];
  isActive?: boolean;
}

export interface WorkoutSession {
  id: string;
  day: string;
  name: string;
  exercises: number;
  duration: string;
  muscleGroups: string[];
  completed: boolean;
  scheduled?: string;
  split?: string;
}

export interface RoutineStats {
  totalVolume: string;
  weeklyTime: string;
  adherenceRate: number;
  completedSessions: number;
  totalSessions: number;
  caloriesBurned?: number;
}

export type ViewType = "Macrociclos" | "Microciclos" | "Splits";

export interface TabComponentProps {
  onRoutinePress?: (id: string) => void;
}