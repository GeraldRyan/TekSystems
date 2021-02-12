// Q1

// What will be the output?
var Animal = function (kind, type, name = "fido")
{
  this.kind = kind,
    this.breed = type
  this.name = name
}

var playground = {
  animals: [], // can we make this private????

  addAnimal(animal)
  {
    this.animals.push(animal);
  },

  listAnimalKind(kind)
  {
    this.animals.forEach(function (animal)
    {
      if (animal.kind == kind)
      {
        console.log(animal.breed);
      }
    });
  },
  listAnimalName(kind)
  {
    this.animals.forEach(function (animal)
    {
      if (animal.kind == kind)
      {
        console.log(animal.name);
      }
    });
  }

}

playground.addAnimal(new Animal('dog', 'Labrador'));
playground.addAnimal(new Animal('dog', 'Goldren Retriever', "goldie"));
playground.addAnimal(new Animal('rabbit', 'Angola'));
playground.listAnimalKind('dog');
playground.listAnimalName('dog');

console.log(playground.animals) // Can we make this private?
// playground.listAnimalKind('rabbit');


// Q2 - WHAT WILL BE OUTPUT? 
var Dream = function (day, mood)
{
  this.day = day;
  this.mood = mood;
};

var DreamFactory = {
  dreams: [],

  createDream: function (day, mood)
  {
    return new Dream(day, mood);
  },

  addDream: function (dream)
  {
    this.dreams.push(dream);
  },

  listDreams()
  {
    this.dreams.forEach(function (dream)
    {
      console.log('You dreamed a ' + dream.mood + ' dream on ' + dream.day);
    });
  }
};

DreamFactory.addDream(DreamFactory.createDream('Sunday', 'dark'));
DreamFactory.addDream(DreamFactory.createDream('Monday', 'funny'));

DreamFactory.listDreams();

// Q3
// Create a constructor function called Hero That will accept a variable name as an argument.
// Use the Hero constructor to create an object myHero with the name 'Link'.

var Hero = function (name, rank)
{
  this.name = name
  this.rank = rank
}

var guild = {
  heroes: [],
  addHero: function (hero)
  {
    this.heroes.push(hero)
  },
  listHeroes()
  {
    this.heroes.forEach((hero) =>
    {
      console.log(`${hero.name} is a ${hero.rank}`);
    })
  }
}

guild.addHero(new Hero("link", "novice"))
guild.addHero(new Hero("kritio", "OP"))
guild.addHero(new Hero("Kayaba Akihiko", "anti-hero master"))
guild.listHeroes()



// Q4 Look over the below code. Then try to add yourself as a new person object, similar to how myFather and myMother are created.

function person(first, last, age, eye)
{
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  // QUESTION: CAN WE ADD FUNCTION HERE
}
var myFather = new person("John", "Doe", 50, "blue");
var myMother = new person("Sally", "Rally", 48, "green");
var mySelf = new person("Gerald", 'Ryan', 24, "red")


// Q5 Create a constructor function called Song. Song should take in two arguments, title and artist, which should both be added as properties when the Song constructor function is used. The Song function should also have a method called play on its prototype. When called, the play function should console.log the name of that specific song preceded by the word 'Playing:'.

// For example

function Song(song, artist)
{
  this.song = song
  this.artist = artist
}
Song.prototype.play = function ()
{
  console.log(`${this.song} by ${this.artist} is playing on the radio..`)
}
Object.defineProperty(Song.prototype, 'playDetailed', {
  value: function ()
  {
    console.log(`A man walks into a bar on a rainy summer's day. ${this.song} by ${this.artist} is playing on the radio..`)
  }
});

var song1 = new Song('Time', 'Pink Floyd');
var song2 = new Song('Sweet Life', 'Frank Ocean');
var song3 = new Song('Intro', 'M83');
var song4 = new Song('Bloom', 'ODESZA');
var song5 = new Song('The Less I Know The Better', 'Tame Impala');

song4.play(); //logs 'Bloom'
song4.playDetailed(); //logs 'Bloom'
song2.play(); //logs 'Playing: Sweet Life'
song3.play(); //logs 'Playing: Intro'

// Q6. javascript-this&new4
// Create a constructor function called cars (shown below). Fill in the blank parts in the constructor using this. The cars should have instance "brand","name","year" and "price". Also create 3 different objects using the constructor function, initialzing the instances whatever you want.

function cars(brand, name, year, price)
{
  this.brand = brand
  this.name = name
  this.year = year
  this.price = price
}

var car1 = new cars("ford", "mustang", "69", 99999)
var car2 = new cars("ford", "pinto", "89", 999)
var car3 = new cars("ford", "focus", "95", 7000)

// Q7. javascript-constructors-2
// Create a constructor function called Hero That will accept the arguments name and occupation.
// Use Hero.prototype to add a method whoAreYou that will return: My name is [the hero's name] and I am a [the hero's occupation].
// Use the Hero constructor to create an object hero1 with the name Michaelangello and occupation Ninja.
// Use the whoAreYou method to log to the console hero1's name and occupation.

// Hero already taken above
function Adventurer(name, occupation)
{
  this.name = name
  this.occupation = occupation
}

Object.defineProperty(Adventurer.prototype, 'whoAreYou', {
  value: function ()
  {
    console.log(`My name is ${this.name} and I am a(n) ${this.occupation}.`)
  }
});

var Adventurer1 = new Adventurer("Kirito", "Dual Wielder")
var Adventurer2 = new Adventurer("Eren Jaeger", "Eldian Soldier")
var Adventurer3 = new Adventurer("Michaelangelo", "ninja")
Adventurer3.whoAreYou()
Adventurer2.whoAreYou()


// Q8. javascript-constructors-3
// Create a constructor function called arrayString that will take as argument an array. This constructor will join the array to a single string, and store the string in a variable called str. For example, the following code:

// var joined = new arrayString(['d','o','g']);
// console.log(joined);

// will log to the console:

// { str: 'dog' }

function arrayString(array)
{
  this.string = array.join("")
}

newArrayString = new arrayString(['d', 'o', 'g'])
console.log(newArrayString.string)

// Q9 Read over the following code. Then try to add Joffrey, Myrcella and Tomme into the House Lannister (Let's assume Jamie is not the father of these three childen).

function House(symbol)
{
  this.symbol = symbol;
  this.lord = undefined;
}
function Person(name)
{
  this.name = name;
  this.children = null;
  this.parent = null;
}
Lannister = new House('lion');
Tywin = new Person('Tywin');
Tyrion = new Person('Tyrion');
Cersi = new Person('Cersi');
Jamie = new Person('Jamie');
Lannister.lord = Tywin;
Tywin.children = [Jamie, Cersi, Tyrion];
Jamie.parent = Tywin;
Cersi.parent = Tywin;
Tyrion.parent = Tywin;
console.log(Lannister);
console.log(Tywin);
console.log(Cersi);
Joffrey = new Person('Joffrey')
Joffrey.parent = Cersi
Myrcella = new Person('Myrcella')
Myrcella.parent = Cersi
Tomme = new Person('Tomme')
Tomme.parent = Cersi
console.log(Tomme)


// Q10. javascript-constructors-5
// As part of a calendar app, you will need to create an object that, for any given month, will store all the days in that month.

// Create a constructor called Day(year, month, day) that will be given a number each for the month, the day and the year.
// Create a function called getDaysinMonth(year, month) that will be given a number each for the month and the year. This function will return array of Day objects, which will be equal in length to the number of days in the given month.
// For example:
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";




function Day(year, month, day)
{
  this.year = year
  this.month = month
  this.day = day
}

function getDaysinMonth(year, month)
{
  days = []
  var numberOfDaysInMonth = new Date(year, month, 0).getDate(); // 0 for days arg returns length of month 
  for (let day = 1; day <= numberOfDaysInMonth; day++)
  {
    days.push(new Day(year, month + 1, day))
  }
  return days 
}


var daysInJune2016 = getDaysinMonth(2016, 5);
console.log(daysInJune2016) // [ { month: 6, day: 1, year: 2016 },

document.querySelector("#submit").addEventListener('click', ()=>{handleSubmit()})

function handleSubmit(){
let valueToProcess = document.querySelector("#eval-input").value;
eval(valueToProcess)
console.log(valueToProcess)
// alert(valueToProcess)
}