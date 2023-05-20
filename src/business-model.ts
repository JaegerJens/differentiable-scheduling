export interface Date {
    year: number;
    month: number;
    day: number;
}

export interface Time {
    hour: number;
    minute: number;
}

export interface Interval<T> {
    start: T;
    end: T;
}

export interface Duration {
    days: number;
    hours: number;
    minutes: number;
}

export interface Location {
    longitude: number;
    latitude: number;
}

export type Id = number;

export interface Operation {
    id: Id;
    planned: Interval<Date>;
    effort: Duration;
    location: Location;
    priority: number;
}

export interface Resource {
    id: Id;
    location: Location;
    worktime: Interval<Time>;
}

export interface Assignment {
    operation: Operation;
    resource: Resource;
    workday: Date;
    workstart: Time;
    traveltime: Duration;
    worktime: Duration;
}
