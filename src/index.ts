import Database from "./database";
import createPerson from "./handlers/createPerson";
import createPeople from "./handlers/createPeople";
import {findPeople, findPerson} from "./handlers/findPeople";
import updatePerson from "./handlers/updatePerson";
import removePeople from "./handlers/removePeople";
import chainQuery from "./handlers/chainQuery";


const runHandlers = async () => {
  const connected = await Database.connect()
  if (!connected) {
    console.error('Failed to connect to MongoDB');
    return;
  }

  await createPerson();
  await createPeople();
  await findPeople();
  await findPerson();
  await updatePerson();
  await removePeople();
  await chainQuery();

  await Database.disconnect();
}

runHandlers().catch(error => {
  console.error('Error running handlers', error);
  process.exit(0);
})