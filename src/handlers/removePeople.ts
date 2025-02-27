import createPerson from "./createPerson";
import Person from "../models/person.model";

const removePeople = async () => {
  const person1 = await createPerson('donald'); // create a person first names donald

  await Person.findByIdAndDelete(person1._id); // no findByIdAndRemove in the current version of mongoose

  await Person.deleteMany({ name: 'mary' }); // delete all people named mary

  // Chain search query helpers to narrow down the search results
  await Person.find({ favoriteFoods: "burritos" }).sort({name: 1}).limit(2).select({name: 1, age: 0}).exec();
}

export default removePeople;