const getScore = async () => {
  try {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/O5ZkO1M42lN1z1Kapqp0/scores');
    const data = await response.json();
    return data.result;
  } catch (error) {
    return error;
  }
};

export default getScore;