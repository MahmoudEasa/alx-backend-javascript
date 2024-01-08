// city: String

const getStudentsByLocation = (listStudents, city) => (
  listStudents.filter((el) => el.location === city)
);

export default getStudentsByLocation;
