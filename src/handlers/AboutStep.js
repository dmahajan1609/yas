var models = require("../data/models")
/**
 * Handler for `AMAZON.HelpIntent` requests
 */
module.exports = {
  canHandle({ requestEnvelope }) {
    const {
      request: { type, intent },
    } = requestEnvelope;
    return type === 'IntentRequest' && intent.name === 'AboutStep';
  },

  handle({ attributesManager, requestEnvelope, responseBuilder }) {
    const attributes = attributesManager.getSessionAttributes();
    const stepName= requestEnvelope.request.intent.slots.StepName.value;
    const step = models.GetStep(attributes.goal, stepName)
    // TODO: validate step exists
    let incomplete = models.GetIncompleteTasksCount(step);
    let remainder = incomplete > 0 ? `You have ${incomplete} tasks to go.` : "";
    const output = `Yas queen, let me tell you about your goal step ${step.name}. It is ${step.status}. ${remainder}`;
    return responseBuilder
      .speak(output)
      .reprompt(output)
      .getResponse();
  },
};