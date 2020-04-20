import * as routes from './app_routes';
import * as methods from './app_methods';

// Expose public functions
global.doGet = routes.doGet;
global.getMembers = methods.getMembers;
global.getJournals = methods.getJournals;
global.getWorkouts = methods.getWorkouts;
global.sendEmails = methods.sendEmails;
global.getState = methods.getState;
