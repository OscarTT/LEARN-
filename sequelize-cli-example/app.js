let Vegetable = require('./models').Vegetable

Vegetable.create({
  name: 'Squash',
  description: 'Tasty fall vegetable.',
  calories: 110,
  color: 'yellow'
}).then(function(vegetable){
  console.log(vegetable.get())
}).catch(function(error){
  console.log(error)
})
