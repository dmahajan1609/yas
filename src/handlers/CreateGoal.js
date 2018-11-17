/**
 * Handler for `AMAZON.HelpIntent` requests
 */
module.exports = {
    canHandle({ requestEnvelope }) {
      const {
        request: { type, intent },
      } = requestEnvelope;
      return type === 'IntentRequest' && intent.name === 'CreateGoal';
    },
  
    handle({ responseBuilder }) {
      const output = 'Yas! We created a goal to complete the hackathon. Let\'s get started';
      return responseBuilder
        .speak(output)
        .reprompt(output)
        .getResponse();
    },
  };