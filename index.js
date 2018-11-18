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
const CreateStepHandler = require('./src/handlers/CreateStep');
const AboutStepHandler = require('./src/handlers/AboutStep');
const CompleteSepHandler = require('./src/handlers/CompleteStep');

/* Replace with skill id from Alexa developer console */
const alexAppId = 'amzn1.ask.skill.e1b177a9-871b-4ff2-8d20-a3cbbdd56c24';

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
        CreateTasktHandler,
        CreateStepHandler,
        AboutStepHandler,
        CompleteSepHandler
      )
      .addErrorHandlers(ErrorHandler)
      .withSkillId(alexAppId)
      .create();
  }
  console.log("incoming event is", event);
  return skill.invoke(event, context);
};
