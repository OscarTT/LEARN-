//We require the Country definition setup in our model
let Country = require('../models/country')

//These are the sample countries we are going to create
let countries = [
  {
    code: 'FLR',
    name: 'Florin',
    continent: 'Europe',
    region: 'Make Believe'
  },
  {
    code: 'GEN',
    name: 'Genovia',
    continent: 'Europe',
    region: 'Make Believe'
  }
]

//This function will be called after the table is setup in Postgres and will insert the new records
function createRecords(){
  let promises = countries.map(function(country){
    return new Promise(function(resolve,reject){
      return Country.create(country)
    })
  })

  return Promise.all(promises)
}


//sync creates the table based on the sequelize definition and returns a promise
Country.sync({force: true})
  .then(function(){
    console.log('success! countries table created')

    //in the promise, we go ahead and create the new records.
    createRecords()
  })
  .catch(function(error){
    //Just in case something goes wrong, lets print it out
    console.log(error)
  })
