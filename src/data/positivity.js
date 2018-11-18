const data = {
    "taskMessages": [
        "You’re strong, you’re a Kelly Clarkson song, you got this.",
        "You are killing it.",
        "Focused. Intelligent. Motivated.",
        "The secret to getting ahead is getting started."
    ],
    "stepMessages": [
        "Love yourself, you are worth it.",
        "You are sunshine mixed with a little hurricane.",
        "You are a catch",
        "Yes, kill them with success!",
        "If you were meant to be controlled, you would have come with a remote."
    ],
    "goalMessages": [
        "You did it! Go out and grab the world by the lapels.",
        "Wow! This goal was your cup of tea, but now you're drinking champagne."
    ]
}

var random = function(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}

module.exports = {
    taskMessage: function() {
        return random(data.taskMessages);
    },
    stepMessage: function() {
        return random(data.stepMessages);
    },
    goalMessage: function() {
        return random(data.goalMessages);
    }
}