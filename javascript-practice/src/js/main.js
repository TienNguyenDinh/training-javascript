import { handleRouteChange } from './routes/router';
import { onEvent } from './utils/dom';

onEvent(document, 'DOMContentLoaded', async () => {
  await handleRouteChange();
});
