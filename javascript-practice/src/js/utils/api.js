import showToastify from '../utils/toastify';

async function handleFetching(url) {
  try {
    const res = await fetch(url);

    if(!res.ok) {
      throw new Error(`Failed to fetch data from ${url}`);
    }

    const data = await res.json();

    return {
      data
    }
  } catch(error) {
    console.error(error);

    showToastify(error.message, 'toastify-danger');
  }
}

export { handleFetching }
