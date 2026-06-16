class Car {
  #brand;
  #model;
  speed = 0;
  isTrunkOpen = false;

  constructor(brand, model) {
    this.#brand = brand;
    this.#model = model;
  }

  displayInfo() {
    const trunkStatus = this.isTrunkOpen ? "open" : "closed";
    // console.log(`${this.#brand} ${this.#model}, Speed: ${this.speed} km/h, Trunk: ${trunkStatus}`);
  }

  go() {
    if (this.isTrunkOpen) {
      // console.log("Close the trunk before driving.");
      return;
    }

    this.speed = Math.min(this.speed + 5, 200);
  }

  brake() {
    this.speed = Math.max(this.speed - 5, 0);
  }

  openTrunk() {
    if (this.speed > 0) {
      // console.log("Cannot open the trunk while the car is moving.");
      return;
    }

    this.isTrunkOpen = true;
  }

  closeTrunk() {
    this.isTrunkOpen = false;
  }
}

class RaceCar extends Car {
  acceleration;

  constructor(brand, model, acceleration) {
    super(brand, model);
    this.acceleration = acceleration;
  }

  go() {
    this.speed = Math.min(this.speed + this.acceleration, 300);
  }

  openTrunk() {
    // console.log("Race cars do not have trunks.");
  }

  closeTrunk() {
    // console.log("Race cars do not have trunks.");
  }
}

const car1 = new Car("Toyota", "Corolla");
const car2 = new Car("Tesla", "Model 3");
const raceCar = new RaceCar("McLaren", "F1", 20);

// console.log(car1);
// console.log(car2);

car1.displayInfo();
car1.go();
car1.go();
car1.brake();
car1.displayInfo();
car1.openTrunk();
car1.displayInfo();
car1.go();
car1.closeTrunk();
car1.go();
car1.displayInfo();

car2.displayInfo();
car2.go();
car2.brake();
car2.brake();
car2.openTrunk();
car2.displayInfo();
car2.closeTrunk();

raceCar.displayInfo();
raceCar.go();
raceCar.go();
raceCar.brake();
raceCar.openTrunk();
raceCar.closeTrunk();
raceCar.displayInfo();
