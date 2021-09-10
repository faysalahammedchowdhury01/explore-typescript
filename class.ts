class Car {
  model: string;
  price: number;
  private _millage: number;
  constructor(model: string, price: number) {
    this.model = model;
    this.price = price;
    this._millage = 100000;
  }
  getActualMillage(): number {
    const realMillage: number = this._millage + 50000;
    return realMillage;
  }
  getTotalPrice(vat: number): number {
    const vatAmount: number = (this.price / 100) * vat;
    const totalPrice: number = this.price + vatAmount;
    return totalPrice;
  }
}

const toyota = new Car('Toyota', 1800000);
const totalPrice: number = toyota.getTotalPrice(25);
const actualMillage = toyota.getActualMillage();
console.log(toyota, actualMillage);
