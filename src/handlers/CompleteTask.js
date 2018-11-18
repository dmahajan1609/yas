var models = require("../data/models")
var positivity = require("../data/positivity.js")
/**
 * Handler for `CompleteTask` requests
 */
module.exports = {
  canHandle({ requestEnvelope }) {
    const {
      request: { type, intent },
    } = requestEnvelope;
    return type === 'IntentRequest' && intent.name === 'CompleteTask';
  },

  handle({ attributesManager, responseBuilder, requestEnvelope }) {
    const attributes = attributesManager.getSessionAttributes();
    const stepName = requestEnvelope.request.intent.slots.StepName.value;
    const taskName = requestEnvelope.request.intent.slots.TaskName.value;
    const step = models.GetStep(attributes.goal, stepName);
    //TODO validate step exists
    const task = models.GetTask(step, taskName);
    // TODO: validate task exists
    task.status = "complete";
    const output = `Yas! you completed the ${taskName} task. You rock gurl! keep it going. ${positivity.taskMessage()}`;
    return responseBuilder
      .speak(output)
      .reprompt(output)
      .getResponse();
  },
};