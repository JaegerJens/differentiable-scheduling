export interface DifferentiableConstraint {
    eval(x: number): number;

    derivative(x: number): number;
}

/**
 * A Constraint in form k*x^3 + l*x^2 + m*x + n
 * with points (left, 1), (middle, 0), (right: 1)
 */
export class ValueRangeParabolaConstraint implements DifferentiableConstraint {
    private left: number;
    private middle: number;
    private right: number;

    private k: number;
    private l: number;
    private m: number;
    private n: number;

    constructor(left: number, middle: number, right: number) {
        this.left = left;
        this.middle = middle;
        this.right = right;

        // TODO compute k,l,m,n
    }

    eval(x: number): number {
        return (this.k*x*x*x) + (this.l*x*x) + (this.m*x) + this.n;
    }

    derivative(x: number): number {
        return (3*this.k*x*x) + (2*this.l*x) + this.m;
    }
}
