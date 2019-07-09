// "software entities … should be open for extension, but closed for modification."
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
  const gasolineCar = new GasolineCar()
  const dieselCar = new DieselCar()

  const cars = [gasolineCar, dieselCar]

  cars.forEach(car => car.run())
}
