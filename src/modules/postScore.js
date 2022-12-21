const postScore = async (user, scores) => {
  try {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/O5ZkO1M42lN1z1Kapqp0/scores', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: `${user}`,
        score: scores,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export default postScore;