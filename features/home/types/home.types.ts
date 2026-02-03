export interface HomeResponseType {
    data: HomeDataType
    status: string
}

export interface HomeDataType {
    greeting: GreetingType
    weekly_overview: WeeklyOverviewType
    workout_today: WorkoutTodayType
    progress_overview: ProgressOverviewType
    quick_access: QuickAccessType
}

export interface GreetingType {
    enabled: boolean
    today: string
    greeting_message: string
}

export interface WeeklyOverviewType {
    enabled: boolean
    title: string
    subtitle: string
    week_days: WeekDayType[]
    all_label: string
    show_all: boolean
}

export interface WeekDayType {
    day: string
    label: string
    date: string
    is_today: boolean
}

export interface WorkoutTodayType {
    enabled: boolean
    has_workout: boolean
    workout: WorkoutType
    no_workout: NoWorkoutType
}

export interface WorkoutType {
    id: number
    title: string
    subtitle: string
    image_url: string
    type: string
    type_icon_url: string
    duration_minutes: string
    exercises_count: string
}

export interface NoWorkoutType {
    title: string
    subtitle: string
    image_url: string
}

export interface ProgressOverviewType {
    enabled: boolean
    title: string
    subtitle: string
    metrics: MetricsType
}

export interface MetricsType {
    weight: WeightType
    streak: StreakType
}

export interface WeightType {
    label: string
    icono_name: string
    value: number
    unit: string
    trend: TrendType
    last_measures: LastMeasureType[]
}

export interface TrendType {
    direction?: string
    percentage?: string
    message?: string
}

export interface LastMeasureType {
    date: string
    value: string
}

export interface StreakType {
    id: number
    label: string
    icono_name: string
    value: number
    unit: string
    trend: TrendType
}

export interface QuickAccessType {
    enabled: boolean
    title: string
    options: OptionType[]
}

export interface OptionType {
    id: number
    label: string
    icon_name: string
    icon_color: string
}
