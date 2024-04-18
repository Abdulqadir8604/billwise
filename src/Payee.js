class Payee {
    constructor(name, splitPercentage) {
        this.name = name;
        this.splitPercentage = splitPercentage / 100;
        this.amount = 0;
    }
}

export default Payee;