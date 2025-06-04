/**
 * javascript class
 */

class Student {
  name;
  age;

  constructor(name, age){
    this.name = name;
    this.age = age;
  }
}

const newStudent1 = new Student("김종보", 35);
console.log(newStudent1);