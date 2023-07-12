In JavaScript, the `super` keyword is used to call functions or access properties in the parent class from within a child class. It is primarily used in classes that inherit from another class (derived classes) to refer to the parent class (base class) and invoke its methods or access its properties.

Here are the key aspects of the `super` keyword:

**1. Calling the Parent Constructor:** Inside the constructor of a child class, the `super` keyword is used to call the constructor of the parent class. This is necessary to initialize the inherited properties defined in the parent class before adding any additional initialization logic specific to the child class. For example:
```javascript
class ChildClass extends ParentClass {
  constructor() {
    super(); // Call the parent class constructor
    // Additional child class initialization
  }
}
```

**2. Accessing Parent Class Methods:** The `super` keyword can be used to call methods defined in the parent class from within the child class. This is useful when you want to extend the functionality of a parent method in the child class while still retaining the original behavior of the parent method. For example:
```javascript
class ParentClass {
  myMethod() {
    console.log("Parent method");
  }
}

class ChildClass extends ParentClass {
  myMethod() {
    super.myMethod(); // Call the parent class method
    console.log("Child method");
  }
}

const myObject = new ChildClass();
myObject.myMethod(); // Output: "Parent method" followed by "Child method"
```

**3. Accessing Parent Class Properties:** The `super` keyword can also be used to access properties defined in the parent class from within the child class. This allows you to reference or modify inherited properties as needed. For example:
```javascript
class ParentClass {
  constructor() {
    this.propertyName = "Parent Property";
  }
}

class ChildClass extends ParentClass {
  constructor() {
    super();
    console.log(super.propertyName); // Access the parent class property
    super.propertyName = "Modified Parent Property"; // Modify the parent class property
    console.log(super.propertyName); // Output: "Modified Parent Property"
  }
}
```