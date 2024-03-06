import { handleRouteChange } from './routes/router';
import { addEventListener } from './utils/dom';

addEventListener(document, 'DOMContentLoaded', async () => {
  await handleRouteChange();
});
