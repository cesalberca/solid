// one should "depend upon abstractions, [not] concretions."
interface Car {
  run: () => void
}

interface Engine {
  accelerate: () => void
}

export class GasolineEngine implements Engine {
  public accelerate() {
    console.log('Gasoline engine')
  }
}

export class DieselEngine implements Engine {
  public accelerate() {
    console.log('Diesel engine')
  }
}

export class GasolineCar implements Car {
  public constructor(private readonly engine: Engine) {}

  public run() {
    this.engine.accelerate()
  }
}

export class DieselCar implements Car {
  public constructor(private readonly engine: Engine) {}

  public run() {
    this.engine.accelerate()
  }
}

export function race() {
  const gasolineMotor: Engine = new GasolineEngine()
  const dieselMotor: Engine = new DieselEngine()

  const gasolineCar: Car = new GasolineCar(gasolineMotor)
  const dieselCar: Car = new DieselCar(dieselMotor)

  const cars = [gasolineCar, dieselCar]

  cars.forEach(car => car.run())
}
