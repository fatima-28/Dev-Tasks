// In this hometask you have to create a zoo simulation project.
var elephant = {
    name: 'Lucy',
    age: 2,
    foodAmount: 5,
    nameOfType: 'elephant',
    biome: 'forest',
    reservoir: true,
    area: 30,
    food: 'grass',
    IsPredator: false
};
var elephant2 = {
    name: 'Narnia',
    age: 3,
    foodAmount: 6,
    nameOfType: 'elephant',
    biome: 'forest',
    reservoir: true,
    area: 30,
    food: 'grass',
    IsPredator: false
};
var cat = {
    name: 'Silver',
    age: 1,
    foodAmount: 3,
    nameOfType: 'cat',
    biome: 'home',
    reservoir: false,
    area: 5,
    food: 'meat',
    IsPredator: true
};
var CageForElephant = {
    animals: [],
    biome: 'forest',
    reservior: true,
    capacity: 3,
    IsForPredator: false
};
function CheckCage(animal, cage) {
    var count = 0;
    if (animal.reservoir == cage.reservior && animal.biome == cage.biome && animal.IsPredator == cage.IsForPredator) {
        for (var j = 0; j < cage.animals.length; j++) {
            count = count + 1;
        }
        if (cage.capacity > count) {
            cage.animals.push(animal);
            ShowAllNamesInCage(cage);
        }
        else {
            console.log("there are not enough space in this cage");
        }
    }
    else {
        console.log("This cage is not avilable for  -".concat(animal.name, "-  animal"));
    }
}
function ShowAllNamesInCage(cage) {
    for (var i = 0; i < cage.animals.length; i++) {
        console.log(cage.animals[i].name);
    }
}
// CheckCage(elephant,CageForElephant);
// CheckCage(elephant2,CageForElephant);
CheckCage(cat, CageForElephant);
