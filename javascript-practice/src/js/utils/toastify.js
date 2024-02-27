import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

/**
 * Displays a toast notification
 * @param {string} msg - The message to display in the toast
 * @param {string} state - The state of the toast (e.g., 'toastify-success', 'toastify-danger')
 * @param {number} [duration=3000] - The duration (in milliseconds) for which the toast should be displayed
 * @example
 * showToastify('Product added successfully!', 'toastify-success', 2000);
 */
export default function showToastify(msg, state, duration = 3000) {
  Toastify({
    text: msg,
    duration: duration,
    newWindow: true,
    gravity: 'bottom',
    position: 'right',
    offset: {
      x: '2rem',
      y: '1rem',
    },
    stopOnFocus: true,
    className: state
  }).showToast();
}
