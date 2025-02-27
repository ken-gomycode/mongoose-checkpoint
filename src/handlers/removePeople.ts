import createPerson from "./createPerson";
import Person from "../models/person.model";

const removePeople = async () => {
  console.log('=== Running Remove People ===');

  const person1 = await createPerson('donald'); // create a person first names donald

  await Person.findByIdAndDelete(person1._id); // no findByIdAndRemove in the current version of mongoose

  await Person.deleteMany({ name: 'mary' }); // delete all people named mary
}

export default removePeople;