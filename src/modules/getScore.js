const getScore = async () => {
  try {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/AXMe3tCNpxDh9DMG2YR8/scores');
    const data = await response.json();
    return data.result;
  } catch (error) {
    return error;
  }
};

export default getScore;