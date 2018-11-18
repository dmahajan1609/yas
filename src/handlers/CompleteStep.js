var models = require("../data/models")
var positivity = require("../data/positivity.js")
/**
 * Handler for `yas.CompleteStep` requests
 */
module.exports = {
  canHandle({ requestEnvelope }) {
    const {
      request: { type, intent },
    } = requestEnvelope;
    return type === 'IntentRequest' && intent.name === 'CompleteStep';
  },

  handle({ attributesManager, responseBuilder, requestEnvelope }) {
    const attributes = attributesManager.getSessionAttributes();
    const stepName = requestEnvelope.request.intent.slots.StepName.value;
    const step = models.GetStep(attributes.goal, stepName)
    // TODO: validate a step was return
    // TODO: validate all tasks are complete
    step.status = "complete";
    const output = `Yas! you beautiful, talented, brilliant, and powerful muskox. You completed step ${stepName}. ${positivity.stepMessage()}`;
    return responseBuilder
      .speak(output)
      .reprompt(output)
      .getResponse();
  },
};