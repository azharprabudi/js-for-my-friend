class AnggotaOsis {
    
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }

    getMyName() {
        return this.name;
    }

    setName(newName) {
        this.name = newName;
    }

}

const zuli = new AnggotaOsis('zuli', 'p');
var myname = zuli.getMyName();
console.log(myname);
zuli.setName('atul');
myname = zuli.getMyName();
console.log(myname);