/**
 * Handler for `yas.AboutGoal` requests
 */
module.exports = {
    canHandle({ requestEnvelope }) {
      const {
        request: { type, intent },
      } = requestEnvelope;
      return type === 'IntentRequest' && intent.name === 'AboutGoal';
    },
  
    handle({ responseBuilder }) {
      const output = 'Yas queen, let me tell you about your complete hackathon goal';
      return responseBuilder
        .speak(output)
        .reprompt(output)
        .getResponse();
    },
  };