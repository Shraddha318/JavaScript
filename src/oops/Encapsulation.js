//Encapsulation
    class A {
        #bal=0;//This variable is like private

        deposit(amount){
            this.#bal+=amount;
            return this.#bal;
        }

        getBal(){
            return `${this.#bal}`
        }
    }

    let acc=new A();
acc.deposit(10)
    let a=acc.getBal()
console.log(a)