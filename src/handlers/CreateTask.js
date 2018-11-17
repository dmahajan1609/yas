/**
 * Handler for `CreateTask` requests
 */
module.exports = {
  canHandle({ requestEnvelope }) {
    const {
      request: { type, intent },
    } = requestEnvelope;
    return type === 'IntentRequest' && intent.name === 'CreateTask';
  },

  handle({ requestEnvelope, responseBuilder }) {
    const TaskName = requestEnvelope.request.intent.slots.TaskName.value;
    const StepName = requestEnvelope.request.intent.slots.StepName.value;
    const output = `Yas! Create task ${TaskName} for step ${StepName}.`;
    return responseBuilder
      .speak(output)
      .reprompt(output)
      .getResponse();
  },
};
