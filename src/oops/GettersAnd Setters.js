class Emp {
    constructor(name, sal) {
        this.name = name;
        this._sal = sal;
    }

    get salary() {
        return this._sal;
    }

    set salary(newSal) {
        this._sal = newSal;
    }
}

let emp = new Emp('alice', 102030);
console.log(emp.salary); // Using the getter method
emp.salary = 120000; // Using the setter method to update salary
console.log(emp.salary); // Now the salary is updated
