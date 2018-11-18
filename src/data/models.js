class Goal {
    constructor(name) {
        this.name = name;
        this.status = "incomplete"
        this.steps = [];
    }
}

class Step {
    constructor(name) {
        this.name = name;
        this.status = "incomplete";
        this.tasks = [];
    }
}

class Task {
    constructor(name) {
        this.name = name;
        this.status = "incomplete"
    }
}

function GetStep(goal, stepName) {
    for (var i = 0; i < goal.steps.length; i++) {
        if (goal.steps[i].name == stepName) {
            return goal.steps[i]
        }
    }
    return null
}

function GetTask(step, taskName) {
    for (var i = 0; i < step.tasks.length; i++) {
        if (step.tasks[i].name == taskName) {
            return step.tasks[i]
        }
    }
    return null
}

function GetIncompleteStepsCount(goal) {
    var count = 0;
    for (var i = 0; i < goal.steps.length; i++) {
        if (goal.steps[i].status == "incomplete") {
            count++
        }
    }
    return count
}

function GetIncompleteTasksCount(step) {
    var count = 0;
    for (var i = 0; i < step.tasks.length; i++) {
        if (step.tasks[i].status == "incomplete") {
            count++
        }
    }
    return count
}

module.exports = {
    Goal, Step, Task, GetStep, GetTask, GetIncompleteStepsCount, GetIncompleteTasksCount
}