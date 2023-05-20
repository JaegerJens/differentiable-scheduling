import { Operation, Resource } from "./business-model.ts";
import { Assignment } from "./compute-model.ts";

export type CostFunction = (assignments: Assignment[]) => number;

export function compileConstraints(resources: Resource[], operations: Operation[]): CostFunction {
    return () => 1;
}
