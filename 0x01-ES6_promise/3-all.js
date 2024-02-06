import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const promises = [uploadPhoto(), createUser()];
  return Promise.all(promises)
    .then(([photoResponse, userResponse]) => {
      const { body: photoBody } = photoResponse;
      const { firstName, lastName } = userResponse;

      console.log(photoBody, firstName, lastName);
    })
    .catch((error) => {
      console.log('Signup system offline', error);
    });
}
