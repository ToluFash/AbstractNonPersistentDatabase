function* idMaker() {
    let index = 1;
    while(true)
        yield index++;
}

function AbstractDatabase() {


    this.idMakers = {};


    /**
     *
     * @param field
     * @param where
     * @param value
     * @returns {*}
     */
    this.getItemWhereIsValue = function(field,where,value) {
        let fields = this[field];
        for (let x of Object.keys(fields)) {
            if (fields[x][where] === value)
                return fields[x]
        }
        throw Error("Not Found")
    };


    /**
     *
     * @param field
     * @param id
     * @returns {*}
     */
    this.getItembyId = function(field,id){
        if (this[field][id])
            return this[field][id];
        else throw Error("null")
    };
    this.getField = function(field){
        if (this[field])
            return this[field];
        else throw Error("null")

    };

    /**
     *
     * @param obj
     */
    this.persist = function(obj){
        let field = obj.constructor.name;
        if (!this[field]){
            this[field]={};
            this.idMakers[field] = idMaker();
        }
        if (obj.id){
            this[field][obj.id] = Object.assign({},obj);
            console.log('uyk');
            return obj.id;
        }
        else{
            let id = this.idMakers[field].next().value;
            obj.id = id;
            this[field][id] = Object.assign({},obj);
            return id;
        }
    };

    /**
     *
     * @param field
     * @param id
     */
    this.deleteItem = function(field,id){
        if (this[field][id])
            delete this[field][id];
        else throw Error("null")
    };

    /**
     *
     * @returns {[string , any][]}
     */
    this.dump = function(){
        let all = Object.entries(this);
        return all.slice(7,all.length)
    }

}


function Database(){return new AbstractDatabase()}

let database = Database();