"use strict";
class Car {
    constructor(model, price) {
        this.model = model;
        this.price = price;
        this._millage = 100000;
    }
    getActualMillage() {
        const realMillage = this._millage + 50000;
        return realMillage;
    }
    getTotalPrice(vat) {
        const vatAmount = (this.price / 100) * vat;
        const totalPrice = this.price + vatAmount;
        return totalPrice;
    }
}
const toyota = new Car('Toyota', 1800000);
const totalPrice = toyota.getTotalPrice(25);
const actualMillage = toyota.getActualMillage();
console.log(toyota, actualMillage);
