import { ROUTES } from '../constants/url-api';

/**
 * Matches a path name to a route in the ROUTES object
 * If the route includes an ':id' parameter, it extracts the id from the path name
 *
 * @param {string} pathName - The path name to match
 * @returns {{route: string, params: Object}} An object containing the matched route and any parameters
 */
export default function matchRoute(pathName) {
  for (let route in ROUTES) {
    const myRoute = ROUTES[route];

    // If the route exactly matches the path name
    if (myRoute === pathName) {
      return { route: myRoute, params: {} };
    }

    // If the route includes an ':id' parameter
    if (myRoute.includes(':id')) {
      // Create a regular expression to match the route, replacing ':id' with a digit pattern
      const regex = new RegExp(myRoute.replace(':id', '\\d+'));

      if (regex.test(pathName)) {
        return { route: myRoute, params: { id: parseInt(pathName.split('/')[2]) } };
      }
    }
  }

  return {};
}
