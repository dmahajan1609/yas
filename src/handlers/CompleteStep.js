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

  handle({ responseBuilder, requestEnvelope }) {
    const stepName = requestEnvelope.request.intent.slots.StepName.value;
    const output = `Yas! you beautiful, talented, brilliant, and powerful muskox. You completed step ${stepName}. ${positivity.stepMessage()}`;
    return responseBuilder
      .speak(output)
      .reprompt(output)
      .getResponse();
  },
};