import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signup = signUpUser(firstName, lastName);
  const photo = uploadPhoto(fileName);

  return Promise.allSettled([signup, photo])
    .then((results) => {
      const finalResults = [];
      results.forEach((result) => {
        if (result.status === 'fulfilled') {
          finalResults.push({ status: result.status, value: result.value });
        } else {
          finalResults.push({ status: result.status, value: `${result.reason}` });
        }
      });
      return finalResults;
    });
}
