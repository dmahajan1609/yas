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
  
    handle({ responseBuilder }) {
      const output = 'Yas! Step created.';
      return responseBuilder
        .speak(output)
        .reprompt(output)
        .getResponse();
    },
  };