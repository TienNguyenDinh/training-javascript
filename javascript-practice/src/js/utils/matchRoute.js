import { ROUTES } from '../constants/config';

export default function matchRoute(pathName) {
  for (let route in ROUTES) {
    const myRoute = ROUTES[route];

    if (myRoute === pathName) {
        return { route: myRoute, params: { } };
    }

    if (myRoute.includes(':id')) {
        const regex = new RegExp(myRoute.replace(':id', '\\d+'));

        if (regex.test(pathName)) {
          return { route: myRoute, params: { id: parseInt(pathName.split('/')[2]) } };
        }
    }
  }

  return { };
}
