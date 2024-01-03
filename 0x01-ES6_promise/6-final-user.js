import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

const handleProfileSignup = async (firstName, lastName, fileName) => {
  const allPromises = await Promise.allSettled([signUpUser(firstName, lastName),
    uploadPhoto(fileName)]);

  const resoult = allPromises.map((promise) => ({
    status: promise.status,
    value: promise.status === 'fulfilled' ? promise.value : String(promise.reason),
  }));

  return (resoult);
};

export default handleProfileSignup;
