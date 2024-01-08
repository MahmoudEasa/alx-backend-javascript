const getListStudentIds = (listOfObjs) => {
  if (!Array.isArray(listOfObjs)) return ([]);

  return (
    listOfObjs.map((el) => (el.id))
  );
};

export default getListStudentIds;
