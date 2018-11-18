var positivity = require("../data/positivity")
var models = require("../data/models")
/**
 * Handler for `CreateTask` requests
 */
module.exports = {
  canHandle({ requestEnvelope }) {
    const {
      request: { type, intent },
    } = requestEnvelope;
    return type === 'IntentRequest' && intent.name === 'CreateTask';
  },

  handle({ attributesManager, requestEnvelope, responseBuilder }) {
    const sessionAttributes = attributesManager.getSessionAttributes();
    
    const taskName = requestEnvelope.request.intent.slots.TaskName.value;
    const stepName = requestEnvelope.request.intent.slots.StepName.value;

    const goal = sessionAttributes.goal;
    let step = models.GetStep(goal, stepName)
    console.log(step)
    const task = new models.Task(taskName);
    step.tasks.push(task)
    
    const output = `Yas! You created task ${taskName} for step ${stepName}. ${positivity.hypeMessage()}`;
    return responseBuilder
      .speak(output)
      .reprompt(output)
      .getResponse();
  },
};
