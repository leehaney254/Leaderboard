// 'Game with ID: AXMe3tCNpxDh9DMG2YR8 added.'
const getData = async () => {
  try {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'My cool new game',
      }),
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(`ERROR: ${error}`);
  }
};

export default getData;