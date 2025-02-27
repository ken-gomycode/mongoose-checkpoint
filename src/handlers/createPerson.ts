import Person from "../models/person.model";

const createPerson = async (name = 'John', age = 30) => {
  console.log('=== Running Create Person ===');

  const person = new Person({
    name,
    age,
    favoriteFoods: ["Pizza", "Pasta"]
  })

  await person.save();
  return person;
}

export default createPerson;