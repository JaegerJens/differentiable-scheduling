import { Id } from "./business-model.ts";

export type Date = number;
export type Time = number;
export type Duration = number;
export type Location = [number, number];

export interface Assignment {
    resource: Id;
    date: Date;
    startTime: Time;
    travelTime: Duration;
    workTime: Duration;
}
