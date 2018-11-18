var positivity = require("../data/positivity.js")
/**
 * Handler for `CompleteGoal` requests
 */
module.exports = {
    canHandle({ requestEnvelope }) {
      const {
        request: { type, intent },
      } = requestEnvelope;
      return type === 'IntentRequest' && intent.name === 'CompleteGoal';
    },
  
    handle({ responseBuilder }) {
      const output = `Yas! You completed your goal. ${positivity.goalMessage()}`;
      return responseBuilder
        .speak(output)
        .reprompt(output)
        .getResponse();
    },
  };