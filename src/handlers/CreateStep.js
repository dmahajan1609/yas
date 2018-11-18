var models = require("../data/models")
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
  
    handle({ attributesManager, requestEnvelope, responseBuilder }) {
      const sessionAttributes = attributesManager.getSessionAttributes();
      const goal = sessionAttributes.goal;
      const stepName = requestEnvelope.request.intent.slots.StepName.value;
      const step = new models.Step(stepName);
      goal.steps.push(step);
      const output = `Yas! You added step ${step.name} to goal ${goal.name}.`;
      return responseBuilder
        .speak(output)
        .reprompt(output)
        .getResponse();
    },
  };