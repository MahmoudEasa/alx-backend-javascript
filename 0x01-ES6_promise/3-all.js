import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  try {
    const allPromises = await Promise.all([uploadPhoto(), createUser()]);
    console.log(`${allPromises[0].body} ${allPromises[1].firstName} ${allPromises[1].lastName}`);
  } catch (err) { console.log('Signup system offline'); }
}
