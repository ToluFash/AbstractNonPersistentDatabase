
let car1 = makeCar("Avensis", "Manufacturer", "Price");
let car12 = makeCar("Avensis", "Manufacturer", 3);
let car2 = makeCar2("Avensis", "Manufacturer", "Price");
let car22 = makeCar2("Avensis", "Manufacturer", 3);
let car3 = makeCar3("Avensis", "Manufacturer", "Price");
let car32 = makeCar3("Avensis", "Manufacturer", 3);
console.log(database);
car1.persist();
car12.persist();
car2.persist();
car22.persist();
car3.persist();
car32.persist();


console.log(database.getItembyId("Car", 2));
console.log(database.dump());
console.log(database.getItemWhereIsValue("Car",'modelName',"Avensis"));
console.log(database.getField("Car"));
database.deleteItem("Car", 2);
