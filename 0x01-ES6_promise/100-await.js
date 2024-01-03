import { uploadPhoto, createUser } from './utils';

const asyncUploadUser = async () => {
  const resoult = { photo: null, user: null };

  try {
    const upload = await uploadPhoto();
    const create = await createUser();
    resoult.photo = upload;
    resoult.user = create;

    return (resoult);
  } catch (err) { return (resoult); }
};

export default asyncUploadUser;
