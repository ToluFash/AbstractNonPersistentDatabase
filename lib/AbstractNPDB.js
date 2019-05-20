function* idMaker() {
    let index = 1;
    while(true)
        yield index++;
}


class AbstractDatabase{

    constructor(){
        this.idMakers = {};
    }

    /**
     *
     * @param field
     * @param id
     * @returns {*}
     */
    getItembyId(field,id){
        if (this[field][id])
            return this[field][id];
        else throw Error("null")
    }
    getField(field){
        if (this[field])
            return this[field];
        else throw Error("null")

    }

    /**
     *
     * @param {Object}obj
     */
    persist(obj){
        let field = obj.__proto__.constructor.name;
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
    }

    /**
     *
     * @param {String}field
     * @param {Number}id
     */
    deleteItem(field,id){
        if (this[field][id])
            delete this[field][id];
        else throw Error("null")
    }

    dump(){
        let all = Object.entries(this);
        return all.slice(1,all.length)
    }

}


function Database(){return new AbstractDatabase()}

let database = Database();

