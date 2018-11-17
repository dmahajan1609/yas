/**
 * Handler for `CreateStep` requests
 */
module.exports = {
    canHandle({ requestEnvelope }) {
      const {
        request: { type, intent },
      } = requestEnvelope;
      return type === 'IntentRequest' && intent.name === 'CreateStep';
    },
  
    handle({ requestEnvelope, responseBuilder }) {
      const step = requestEnvelope.request.intent.slots.StepName.value;
      const output = `Yas! Step ${step} created.`;
      return responseBuilder
        .speak(output)
        .reprompt(output)
        .getResponse();
    },
  };