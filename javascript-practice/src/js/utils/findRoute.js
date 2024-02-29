import { ROUTES } from '../constants/routes';
import { REGEX_PATTERNS } from '../constants/regexPatterns';

/**
 * Matches a path name to a route in the ROUTES object
 * If the route includes an ':id' parameter, it extracts the id from the path name
 *
 * @param {string} pathName - The path name to match
 * @returns {{route: string, params: Object}} An object containing the matched route and any parameters
 */
export default function findRoute(pathName) {
  for (let route in ROUTES) {
    const routePath = ROUTES[route];

    // If the route exactly matches the path name
    if (routePath === pathName) {
      return {
        route: routePath,
        params: {}
      };
    }

    // If the route includes an ':id' parameter
    if (routePath.includes(':id')) {
      const wordRegexStr = '\\w+';

      // Create a regular expression to match the route, replacing ':id' with a digit pattern
      const regex = new RegExp(routePath.replace(':id', wordRegexStr));
      console.log(regex, pathName)
      if (regex.test(pathName)) {
        return {
          route: routePath,
          params: {
            id: pathName.split('/')[2]
          }
        };
      }
    }
  }

  return {};
}
