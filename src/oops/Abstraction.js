class Coffee {
    // Private methods (ES2022 feature)
    #start() {
        // Call DB
        // Filter value
        return 'Starting';
    }

    #run() {
        return 'Brew';
    }

    press() {
        let a = this.#start();
        let b = this.#run();
        return `${a} + ${b}`;
    }
}

let m = new Coffee();
// console.log(m.#start()); // Error: Private method
// console.log(m.#run());   // Error: Private method
console.log(m.press()); // Outputs: "Starting + Brew"
