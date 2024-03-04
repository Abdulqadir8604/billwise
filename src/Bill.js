class Bill {
    constructor(totalAmount) {
        this.totalAmount = totalAmount;
        this.payees = [];
    }

    addPayee(payee) {
        this.payees.push(payee);
    }

    calculateAmounts() {
        this.payees.forEach((payee) => {
            payee.amount = (this.totalAmount * payee.splitPercentage) / 100;
        });
    }
}

export default Bill;