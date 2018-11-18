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

  handle({ requestEnvelope, responseBuilder }) {
    const slot = requestEnvelope.request.intent.slots.StepName.value;
    const output = `Yas! Let me tell you about your ${slot} step`;
    return responseBuilder
      .speak(output)
      .reprompt(output)
      .getResponse();
  },
};