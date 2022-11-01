//Make sure to require your model so you can connect to the DB
//This line of code connects to the Database
require("./db");

const mongoose = require("mongoose");
const VikingModel = require('./models/User.js')

//Iteration 2:
//create a user as an object
const viking1 = {
    firstName : 'Lagerta',
    familyName: 'FromKattegat',
    strength: 100,
    weapon: 'sword',
  }
  
//Iteration 3:
//Insert the new user that you created into the Database
//Note: Make sure to close your DB connection afterwards
VikingModel.create(viking1)
.then(newViking => console.log('Viking created', newViking))
.catch(error => console.log('An error happened while saving a new user:', error));

//Iteration 4:
//Find the user that you created and update their name to something news

VikingModel.findOne({ firstName: 'Lagerta' })
.then(console.log('I found her'))
.catch(error => console.log('An error happened while saving a new user:', error));

VikingModel.updateOne({ firstName: 'Lagerta' }, { firstName: 'Ragnar' })
  .then(console.log('I updated her'))
  .catch(error => console.log('An error happened while saving a new user:', error));

  VikingModel.deleteOne({ firstName: 'Ragnar' })
  .then(console.log('I deleted him'))
  .catch(error => console.log('An error happened while saving a new user:', error));

  //create an Array of Vikings

  let vikingArr=[
    {
        firstName:'Ingrid',
        familyName: 'Ragnarson',
        strength: 80 ,
        weapon: 'bows'
    },
    {
        firstName:'Thorvi',
        familyName: 'BjornWife',
        strength: 90,
        weapon: 'arrow'
    },
]

VikingModel.insertMany(vikingArr)
.then(newVikingArr => console.log('Viking created', newVikingArr))
.catch(error => console.log('An error happened while saving a new user:', error));