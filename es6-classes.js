console.log('e6-classes-1 working!');

class Person {
    constructor(name = 'Anne', age = 0) {
        this.name = name;  
        this.age = age;
    }
    getGreeting() {
        //return 'Hi,' + this.name + '!';
        return `Hi, I am ${this.name}.`;
    }
    getDescription(){
        return `${this.name} is ${this.age} years old`;
    }
};

class Student extends Person {
   constructor(name, age, major){
       super(name,age);
       this.major = major;
   };
   hasMajor () {
           return !!this.major;
   };
   getDescription(){
       let description = super.getDescription();
       
       if(this.hasMajor()){
           description += ` The major is ${this.major}.`;
       }
       
       return description;
   };

};

class Traveler extends Person {
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    };

    hasHomeLocation (){
        return !!this.homeLocation;
    }
    getGreeting() {
        let location = super.getGreeting();

        if(this.hasHomeLocation()){
            location += ` I'm visiting from ${this.homeLocation}.`
        }

        return location;

    };

    

}

const travler1 = new Traveler('Cyngynn',32, 'Philippines');
console.log(travler1.getGreeting());


const travler2 = new Traveler('Anne',25);
console.log(travler2.getGreeting());


const me = new Student('Jan Cyngynn', 32, 'Computer Science');
// console.log(me.getGreeting());
// console.log(me.getDescription());
// console.log(me);
console.log(me.getDescription());

const other = new Student('Anne',26);
// console.log(other.getGreeting());
// console.log(other.getDescription());
// console.log(other);
console.log(other.getDescription());



