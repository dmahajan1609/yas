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
  
    handle({ attributesManager, responseBuilder }) {
      const attributes = attributesManager.getSessionAttributes();

      // TODO: Validate all steps are complete first.
      
      attributes.goal.status = "complete";
      const output = `Yas! You completed your goal. ${positivity.goalMessage()}`;
      return responseBuilder
        .speak(output)
        .reprompt(output)
        .getResponse();
    },
  };