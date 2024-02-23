import { ROUTES } from '../constants/config';

document.addEventListener('click', (e) => {
  const target = e.target;

  if(!target.matches('a')) return;

  e.preventDefault();

  handleRoute(target);
});

function handleRoute(target) {
  window.history.pushState(null, '', target.href);

  handleChangeLocation();
}

export default function handleChangeLocation(controller) {
  const pathName = window.location.pathname;

  switch(pathName) {
    case [ROUTES.HOME]: {
      controller.getProducts();
    }
  }
}
