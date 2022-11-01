// ℹ️ package responsible to make the connection with mongodb
// https://www.npmjs.com/package/mongoose
const mongoose = require("mongoose");

//const VikingModel = require('../models/User.js')

//create a Viking with the shape as the model
/*const viking1={
  firstName : 'Lagerta',
  familyName: 'FromKattegat',
  strength: 100,
  weapon: 'sword',
}*/

mongoose
  .connect("mongodb://127.0.0.1/valhalla", { family: 4 })
  .then(() => {
    console.log(`Connected to Mongo! Welcome to Valhalla!  🪓🛡️☠️`);
  })
  .catch((err) => {
    console.error("Error connecting to DB", err);
  });
