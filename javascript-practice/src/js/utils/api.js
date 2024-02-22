async function handleFetching(url) {
  try {
    const res = await fetch(url);

    if(!res.ok) {
      throw new Error('handleFetching is failed');
    }

    const data = await res.json();

    return {
      data
    }
  } catch(error) {
    console.error(error);

    return {
      error
    }
  }
}

export { handleFetching }
