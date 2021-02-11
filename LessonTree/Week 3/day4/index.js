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

function person(first, last, age, eye) {
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

function Song(song, artist){
  this.song = song
  this.artist = artist
}
Song.prototype.play = function(){
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

