import Person from "../models/person.model";
import {ObjectId} from "mongodb";

export const findPeople = async () => {
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
  ];

  await Person.insertMany(peopleToCreate);

  const people = await Person.find({ name: "John" }); // Find all people named John
  if (people.length < 2) {
    console.error('Not enough people were found');
  }

  // find person with matching favorite food
  const pizzaPerson = await Person.findOne({ favoriteFoods: "Pizza" });
  if (!pizzaPerson) {
    console.error('Person with favorite food Pizza not found');
  }
}

export const findPerson = async () => {
  const _id = new ObjectId("5f5f1f3b7b3b3b3b3b3b3b3b");

  // create person first
  const person = new Person({
    _id,
    name: "Rita",
    age: 30,
    favoriteFoods: ["Pizza", "Pasta"]
  });

  await person.save();

  // get person by id
  const foundPerson = await Person.findById(_id);
  if (!foundPerson) {
    console.error('Person not found');
  }

  return foundPerson;
}