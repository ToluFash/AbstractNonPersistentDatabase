
class Car{

    /**
     *
     * @param {String}modelName
     * @param {String}manufacturer
     * @param {Number}price
     */
    constructor(modelName, manufacturer, price){

        this.modelName = modelName;
        this.manufacturer = manufacturer;
        this.price = price;
    }

    getModelName() {
        return this.modelName;
    }

    setModelName(value) {
        this.modelName = value;
    }

    getManufacturer() {
        return this.manufacturer;
    }

    setManufacturer(value) {
        this.manufacturer = value;
    }

    getPrice() {
        return this.price;
    }

    setPrice(value) {
        this.price = value;
    }
    toJson(){
        return {"modelName":this.modelName, "manufacturer": this.manufacturer, "price": this.price};

    }
    persist(){
        return database.persist(this);
    }
}

class Car2{

    /**
     *
     * @param {String}modelName
     * @param {String}manufacturer
     * @param {Number}price
     */
    constructor(modelName, manufacturer, price){

        this.modelName = modelName;
        this.manufacturer = manufacturer;
        this.price = price;
    }

    getModelName() {
        return this.modelName;
    }

    setModelName(value) {
        this.modelName = value;
    }

    getManufacturer() {
        return this.manufacturer;
    }

    setManufacturer(value) {
        this.manufacturer = value;
    }

    getPrice() {
        return this.price;
    }

    setPrice(value) {
        this.price = value;
    }
    toJson(){
        return {"modelName":this.modelName, "manufacturer": this.manufacturer, "price": this.price};

    }
    persist(){
        return database.persist(this);
    }
}

class Car3{

    /**
     *
     * @param {String}modelName
     * @param {String}manufacturer
     * @param {Number}price
     */
    constructor(modelName, manufacturer, price){

        this.modelName = modelName;
        this.manufacturer = manufacturer;
        this.price = price;
    }

    getModelName() {
        return this.modelName;
    }

    setModelName(value) {
        this.modelName = value;
    }

    getManufacturer() {
        return this.manufacturer;
    }

    setManufacturer(value) {
        this.manufacturer = value;
    }

    getPrice() {
        return this.price;
    }

    setPrice(value) {
        this.price = value;
    }
    toJson(){
        return {"modelName":this.modelName, "manufacturer": this.manufacturer, "price": this.price};

    }
    persist(){
        return database.persist(this);
    }
}

function makeCar(modelName, manufacturer, price){return new Car(modelName, manufacturer, price)}
function makeCar2(modelName, manufacturer, price){return new Car2(modelName, manufacturer, price)}
function makeCar3(modelName, manufacturer, price){return new Car3(modelName, manufacturer, price)}
