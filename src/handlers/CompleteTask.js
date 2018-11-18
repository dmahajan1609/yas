var positivity = require("../data/positivity.js")
/**
 * Handler for `CompleteTask` requests
 */
module.exports = {
  canHandle({ requestEnvelope }) {
    const {
      request: { type, intent },
    } = requestEnvelope;
    return type === 'IntentRequest' && intent.name === 'CompleteTask';
  },

  handle({ responseBuilder, requestEnvelope }) {
    const taskName = requestEnvelope.request.intent.slots.TaskName.value;
    const output = `Yas! you completed the ${taskName} task. You rock gurl! keep it going. ${positivity.taskMessage()}`;
    return responseBuilder
      .speak(output)
      .reprompt(output)
      .getResponse();
  },
};