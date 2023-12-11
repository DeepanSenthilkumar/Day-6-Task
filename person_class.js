class Person {
    constructor(firstName, lastName, age, email, gender) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.email = email;
      this.gender = gender;
    }
  }
  
  
  let person = new Person("John", "Doe", 30, "johndoe@example.com", "Male");
  
  
  console.log(`First Name: ${person.firstName}`);
  console.log(`Last Name: ${person.lastName}`);
  console.log(`${person.gender} and Age: ${person.age}`);
  console.log(`Email: ${person.email}`);