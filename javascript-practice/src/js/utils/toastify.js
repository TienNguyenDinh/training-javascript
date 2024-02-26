import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

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