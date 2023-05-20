# Vision

Current AI finds a optimum in differential models.

So let's build a differential model for task scheduling in context of field service management.

* Every constraint should be formulated as a differential equation (e.g. polynomial).
* Scheduling can be formulated as finding a optimal permutation of task assignments.

## Model

The model should minimize the cost, so a value of 0 is good and 1 is bad. Values outside this range can be smashed with a sigmoid function.

* Planned day is modeled as a number of days from today. Optimize for as fast as possible but not earlier, e.g. linear function.
* Planned time is a function between start and end of working day of the technician. The optimum should be the customer expected time.
* Task duration is a function with a optimum value for expected duration. Shorter duration should be quickly worst than longer duration.
* Travel distance and travel time are cost functions.

So all constraints are now differentiable. And all constraints together are now the ai model cost function.

## Scheduling

Scheduling is a permutation problem, but permutations are not obviously differentiable.

Idea: Make a small change (e.g. exchange 2 tasks) and compute the cost difference.

## Implementation

* Compile all constraints as cost functions
* Make random schedules
* Compute cost difference for random schedule changes for all schedules
* Iterate for multiple schedules multiple changes
* Track iteration improvements and exit when improvement falls under epsilon

Everthing should now be computable on a GPU :smile:
