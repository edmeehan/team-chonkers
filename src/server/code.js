import * as routes from './app_routes';
import * as methods from './app';

// Expose public functions
global.doGet = routes.doGet;
global.getGroups = methods.getGroups;
