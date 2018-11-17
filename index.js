const Alexa = require('ask-sdk-core');
const CancelStopHandler = require('./src/handlers/AmazonCancelStop');
const ErrorHandler = require('./src/handlers/Error');
const FallbackHandler = require('./src/handlers/AmazonFallback');
const HelpHandler = require('./src/handlers/AmazonHelp');
const SessionEndedHandler = require('./src/handlers/SessionEnded');
const LaunchRequestHandler = require('./src/handlers/LaunchRequest');
const CompleteGoaltHandler = require('./src/handlers/CompleteGoal');
const AboutGoaltHandler = require('./src/handlers/AboutGoal');
const CreateGoaltHandler = require('./src/handlers/CreateGoal');
const CompleteTasktHandler = require('./src/handlers/CompleteTask');
const AboutTasktHandler = require('./src/handlers/AboutTask');
const CreateTasktHandler = require('./src/handlers/CreateTask');

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
    skill = Alexa.SkillBuilders.custom()
      .addRequestHandlers(
        /* Add custom handlers above these */
        CancelStopHandler,
        FallbackHandler,
        HelpHandler,
        SessionEndedHandler,
        LaunchRequestHandler,
        CompleteGoaltHandler,
        AboutGoaltHandler,
        CreateGoaltHandler,
        CompleteTasktHandler,
        AboutTasktHandler,
        CreateTasktHandler
      )
      .addErrorHandlers(ErrorHandler)
      .withSkillId(alexAppId)
      .create();
  }

  return skill.invoke(event, context);
};
