import Person from "../models/person.model";

const chainQuery = async () => {
  try {
    // Chain search query helpers to narrow down the search results
    console.log('=== Running Chain Query ===');
    await Person.find({ favoriteFoods: "burritos" }).sort({name: 1}).limit(2).select({name: 1, favoriteFoods: 1}).exec();
  } catch (e: any) {
    console.error('Error running chainQuery', e?.message || e?.toString() || e);
  }
}

export default chainQuery;