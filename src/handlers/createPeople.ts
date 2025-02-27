import Person from "../models/person.model";

const createPeople = async () => {
  console.log('=== Running Create People ===');

  const peopleToCreate = [
    {
      name: "John",
      age: 30,
      favoriteFoods: ["Pizza", "Pasta"]
    },
    {
      name: "John",
      age: 30,
      favoriteFoods: ["Pizza", "Pasta"]
    },
    {
      name: "Jane",
      age: 25,
      favoriteFoods: ["Burger", "Salad"]
    },
    {
      name: "Jake",
      age: 35,
      favoriteFoods: ["Ice cream", "Chocolate"]
    },
  ];

  const results = [];
  for await (const person of peopleToCreate) {
    const newPerson = await Person.create(person);
    await newPerson.save();
    results.push(newPerson);
  }

  if (results.length === 0) {
    console.error('No people were created');
  }

  return results;
}

export default createPeople;