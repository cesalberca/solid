// "objects in a program should be replaceable with instances of their subtypes without altering the correctness of that program." See also design by contract.
interface Car {
  run: () => void
}

export class GasolineCar implements Car {
  public constructor() {}

  public run() {}
}

export class DieselCar implements Car {
  public constructor() {}

  public run() {}
}

export function race() {
  const gasolineCar: Car = new GasolineCar()
  const dieselCar: Car = new DieselCar()

  const cars = [gasolineCar, dieselCar]

  cars.forEach(car => car.run())
}
