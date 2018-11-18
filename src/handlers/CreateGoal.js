var models = require("../data/models")
/**
 * Handler for `CreateGoal` requests
 */
module.exports = {
    canHandle({ requestEnvelope }) {
      const {
        request: { type, intent },
      } = requestEnvelope;
      return type === 'IntentRequest' && intent.name === 'CreateGoal';
    },
  
    handle({ attributesManager, responseBuilder, requestEnvelope }) {
      const sessionAttributes = attributesManager.getSessionAttributes();
      let goalName = requestEnvelope.request.intent.slots.GoalName.value;
      let goal = new models.Goal(goalName);
      sessionAttributes.goal = goal;
      const output = `Yas! You have created a goal: ${goal.name}. Let\'s get started`;
      return responseBuilder
        .speak(output)
        .reprompt(output)
        .getResponse();
    },
  };