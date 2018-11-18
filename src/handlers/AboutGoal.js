var models = require("../data/models")
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
  
    handle({ attributesManager, responseBuilder }) {
      const attributes = attributesManager.getSessionAttributes();
      const goal = attributes.goal;
      let incomplete = models.GetIncompleteStepsCount(goal)
      let remainder = incomplete > 0 ? `You have ${incomplete} steps to go.` : "";
      const output = `Yas queen, let me tell you about your goal ${goal.name}. It is ${goal.status}. ${remainder}`;
      return responseBuilder
        .speak(output)
        .reprompt(output)
        .getResponse();
    },
  };