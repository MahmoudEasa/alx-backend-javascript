import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

const handleProfileSignup = async (firstName, lastName, fileName) => {
  const signUpUserPromise = signUpUser(firstName, lastName);
  const uploadPhotoPromise = uploadPhoto(fileName);

  const allPromises = await Promise.all([signUpUserPromise, uploadPhotoPromise]);

  const resoult = [
    {
      status: allPromises.status,
      value: allPromises.status === 'fulfilled' ? allPromises.value : allPromises.reason,
    },
  ];
  return (resoult);
};

export default handleProfileSignup;
