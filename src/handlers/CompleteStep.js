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
    const output = `Yas! you beatiful, talented, brilliant, and powerful muskox completed ${stepName}`;
    return responseBuilder
      .speak(output)
      .reprompt(output)
      .getResponse();
  },
};