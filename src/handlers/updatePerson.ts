import createPerson from "./createPerson";
import Person from "../models/person.model";

const updatePerson = async () => {
  console.log('=== Running Update Person ===');

  const person = await createPerson('rita', 24);

  const updatedFavoriteFoods = person.favoriteFoods ? [...person.favoriteFoods, 'hamburger'] : ['hamburger'];

  // update using updateOne
  await Person.updateOne({ _id: person._id }, { favoriteFoods: updatedFavoriteFoods });

  // update using findAndUpdate
  const personName = 'rita';
  const updatedPerson = await Person.findOneAndUpdate({ name: personName }, { age: 20 }, { new: true });
  if (updatedPerson?.age !== 20) {
    console.error('Person not updated');
  }

  return updatedPerson;
}

export default updatePerson;