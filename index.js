const Alexa = require('ask-sdk-core');
const {
  CancelStopHandler,
  ErrorHandler,
  FallbackHandler,
  HelpHandler,
  SessionEndedHandler,
  LaunchRequestHandler
  // GoalHandler,
  // StepsHandler,
  // TasksHandler,
} = require('./src/handlers');

/* Replace with skill id from Alexa developer console */
const alexAppId = 'amzn1.ask.skill.54c76e12-9b20-47ac-a939-e1f5503d8bb9';

let skill;

/**
 * Main function for handling Alexa requests
 *
 * @param {object} event Alexa request object
 * @param {object} context Optional context
 *
 * @return {Promise<ASKResponse>|Function}
 */
exports.handler = async (event, context) => {
  if (!skill) {
    skill = Alexa.SkillBuilders.standard()
      .addRequestHandlers(
        /* Add custom handlers above these */
        CancelStopHandler,
        FallbackHandler,
        HelpHandler,
        SessionEndedHandler,
        LaunchRequestHandler
      )
      .addErrorHandlers(ErrorHandler)
      .withSkillId(alexAppId)
      .create();
  }

  return skill.invoke(event, context);
};
