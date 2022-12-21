// 'Game with ID: O5ZkO1M42lN1z1Kapqp0 added.'
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
    return data;
  } catch (error) {
    return error;
  }
};

export default getData;