let connection = require('./models/sequelize-connection')


// connection.authenticate()
//   .then(function(){
//     console.log('success!')
//   })
//   .catch(function(error){
//     console.log(error)
//   })

let Country = require('./models/country')
//
//Gives you everything of ID 1
// Country.findById(1).then(function(country){
//   // Do anything we like with the country object
//   console.log(country)
// }).catch(function(error){
//   console.log(error)
// })


// Gives us name of ID 1
// Country.findById(1).then(function(country){
//   console.log(country.get('name'))
// })
//
// Gives us every instance in object form

// Country.all().then(function(countries){
//   let mapped = countries.map(function(country){
//     return country.get()
//   })
//   console.log(mapped)
// })
//
//gives us one instance
// Country
//   .all({limit: 1})
//   .then(function(countries){
//   let mapped = countries.map(function(country){
//     return country.get()
//   })
//   console.log(mapped)
// })
//

//gives us as many instances as we specify
// Country
//   .all({limit: 2, offset: 1})
//   .then(function(countries){
//   let mapped = countries.map(function(country){
//     return country.get()
//   })
//   console.log(mapped)
// })

//builds a new instance
// let unitedstates = Country.build({
//   code: 'USA',
//   name: 'United States',
//   continent: 'North America',
//   region: 'southwest'
// })
//
// unitedstates.save()
//   .then(function(){
//     //whatever you need to do afterwards
//   })
//   .catch(function(error){
//   })

//create a new instance (creates a record right away)
// let spain = Country.create({
//   code: 'SPN',
//   name: 'Spain',
//   continent: 'Europe',
//   region: 'Make Believe'
// })
//   .then(function(){
//     //whatever you need to do afterwards
//   })
//   .catch(function(error){
//   })

//Deleting records
// Country.all({
//   where: {
//     id: 5
// }
// })
//   .then(function(records){
//     let promises = records.map(function(country){
//       return country.destroy()
//     })
//
//     return Promise.all(promises)
//   })
//   .then(function(results){
//     console.log("They're gone!")
//   })

//updating records
// let florin = Country.create({
//   code: 'FLR',
//   name: 'Florin',
//   continent: 'Europe',
//   region: 'Make Believe'
// })
//   .then(function(country){
//     country.region = "Storyland"  // <-- this is where we update its values
//     return country.save() // a promise
//   })
//   .catch(function(error){
//   })

//querying find all with promise chain
// Country.findAll() .then (function(countries){
//     console.log(countries);
// })

//querying find all with attributes
// Country.findAll({
//   attributes: ['code','name']
// }) .then(function(countries){
//   let mapped = countries.map(function(country){
//     return country.get()
//   })
//   console.log(mapped)
// })

//querying all with specific records
// Country.findAll({
//   where:{
//     continent: 'Europe'
//   }
// }) .then(function(countries){
//   let mapped = countries.map(function(country){
//     return country.get()
//   })
//     console.log(mapped)
// })

//find all with operators Op=$
Country.findAll({
  where : {
    $or: [
      {
        continent: 'Europe'

      },
      {
        continent: 'North America'

      }
    ]
  }
}) .then(function(countries){
  let mapped = countries.map(function(country){
    return country.get()
  })
    console.log(mapped)
})
