// In this hometask you have to create a zoo simulation project.

// The zoo consists of enclosures/aviaries based on different biomes.
// In addition to the biome, the enclosure/aviary is described by the area (in square meters) and the presence of a reservoir.

// The list of an animal type's characteristics:
// - name (giraffe, bear, etc.)
// - required biome
// - the need for a reservoir
// - required area per individual
// - what does it eat
// - predator or herbivore

// The list of an animal's characteristics:
// - name
// - age
// - the amount of food per day

// Settlement rules:
// An animal can only be settled in an enclosure/aviary that matches:
// - its biome,
// - the presence of a reservoir,
// - there is enough space for this animal.
// Predators can only live with members of the same species.
// Herbivores can live with any herbivore.

// WHAT YOU HAVE TO DO =)
// 1. create all the needed interfaces (for animals and for aviaries), think about base interfaces and so on
// 2. create a function that will take an enclosure/aviary and an animal as parameters. this function should determine if the selected animal can be settled into the selected enclosure.
// if it is possible, the animal must be added to some array within the aviary object. if it's not possible, this function must send some message to the console

interface Type {
  nameOfType: string;
  biome: string;
  reservoir: boolean;
  area: number;
  food: string;
  IsPredator:boolean;
}
 interface Animal extends Type{
     name:string;
     age:number;
     foodAmount:number;
 }
 interface Settlement{
     animals:Animal[];
     biome:string;
     reservior:boolean;
     capacity:number;
     IsForPredator:boolean;

 }
let elephant:Animal={
    name:'Lucy',
    age:2,
    foodAmount:5,
    nameOfType: 'elephant',
  biome: 'forest',
  reservoir: true,
  area: 30,
  food: 'grass',
  IsPredator:false

}
let elephant2:Animal={
    name:'Narnia',
    age:3,
    foodAmount:6,
    nameOfType: 'elephant',
  biome: 'forest',
  reservoir: true,
  area: 30,
  food: 'grass',
  IsPredator:false

}
let cat:Animal={
    name:'Silver',
    age:1,
    foodAmount:3,
    nameOfType: 'cat',
  biome: 'home',
  reservoir: false,
  area: 5,
  food: 'meat',
  IsPredator:true

}
let CageForElephant:Settlement={
  animals:[],
     biome:'forest',
     reservior:true,
     capacity:3,
     IsForPredator:false
}

function CheckCage(animal:Animal,cage:Settlement) {
     let count:number=0;
    if (animal.reservoir==cage.reservior&&animal.biome==cage.biome&&animal.IsPredator==cage.IsForPredator) {

             
            for (let j = 0; j < cage.animals.length; j++) {
               count=count+1;  
            }
        if (cage.capacity>count) {
            cage.animals.push(animal);
          ShowAllNamesInCage(cage) ;

        }
        else{
            console.log("there are not enough space in this cage");
            
        }
      
     
    }
    else{
        console.log(`This cage is not avilable for ${animal.name} animal`);
        
    }
}
function ShowAllNamesInCage(cage:Settlement) {
    for (let i = 0; i < cage.animals.length; i++) {
              console.log(cage.animals[i].name);
               
           } 
}


CheckCage(elephant,CageForElephant);
CheckCage(elephant2,CageForElephant);
