// A class (line, test, module, system, etc) should have only a single responsibility (i.e. only changes to one part of the software's specification should be able to affect the specification of itself).
export class Car {
  public run() {}

  public stop() {}

  public refill() {}

  public accelerate() {}

  public spendFuel() {}
}
