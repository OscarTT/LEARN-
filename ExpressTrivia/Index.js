var express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

var trivia = {
  'moon' : {
      question: "Is the moon real?",
      answer: "The moon is actually a projection beamed into the sky by NASA.",
      picture: "/images/moon.jpg"
  },
  'illuminati' : {
      question: "Does the Illumiati own your soul?",
      answer: "Yes.",
      picture: "/images/eye.jpg"
  },
  'tupac' : {
      question: "Did Tupac die in 1996?",
      answer: "No, he's chilling in Cuba.",
      picture: "/images/pac.jpg"
  }
};

app.get('/', function (req, res) {
 res.render('home', {'questions': trivia });
});

app.listen(3000, function(){
  console.log("Now listening on port 3000!");
});

app.get('/trivia/:question' , function(req,res){
  var questionKey = req.params.question;
  var triviaQuestion = trivia[questionKey];
  res.render('trivia',{'question': triviaQuestion.question, 'answer': triviaQuestion.answer, 'picture': triviaQuestion.picture});
});
