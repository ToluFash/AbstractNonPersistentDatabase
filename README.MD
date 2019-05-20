# Abstract Non-Persistent Database

*An abstract database for Javascript*


## Interface

The following methods are recommended for implementation by objects to be persisted

  - [1.1]() **persist()**: stores the object in the Database.prototype.

```javascript
    persist(){
        return Database.prototype.persist(this);
    }
```


## Methods

  - [1.1]() **Database()**: Construct a new Database.

```javascript
let database = Database();
```
or

```javascript
let database = new AbstractDatabase();
```

  - [1.2]()  **Database.prototype.getItemWhereisValue**:

    - `field` : `Persisted Object Name`
    - `where` : `Object Attribute`
    - `value` : `Attribute Value`

```javascript
let obj = {'a':'anchor','b':'ball','c':'cat'};
obj.persist();
Database.prototype.getItemWhereIsValue("Object",'a',"anchor");
```

  - [1.3]()  **Database.prototype.getItembyId**:

    - `field` : `Persisted Object Name`
    - `id` : `Object Id`

```javascript
Database.prototype.getItembyId(field,id);
```

  - [1.4]()  **Database.prototype.getField**: returns all stored objects of a certain Object Name

    - `field` : `Persisted Object Name`
```javascript
Database.prototype.getItembyId(field);
```

  - [1.5]()  **Database.prototype.persist**: saves the object to the database

    - `obj` : `Object`
```javascript
Database.prototype.persist(obj);
```

  - [1.6]()  **Database.prototype.delete**: delete the object identified by an id from the database

    - `field` : `Object Name`
    - `id` : `Id`
```javascript
Database.prototype.delete(field,id);
```
  - [1.6]()  **Database.prototype.dumps**: returns all field in the database in an array

    - `field` : `Object Name`
    - `id` : `Id`
```javascript
Database.prototype.dump()
```
