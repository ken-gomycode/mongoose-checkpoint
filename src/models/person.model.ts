import Database from "../database";

const db = Database.getInstance();

const schema = new db.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  favoriteFoods: {
    type: [String],
    required: false,
  }
})

const Person = db.model("Person", schema);

export default Person;