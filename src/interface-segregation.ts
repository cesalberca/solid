// "many client-specific interfaces are better than one general-purpose interface."
interface Car {
  race: () =>  void
  drag: () => void
}

interface Racer {
  race: () => void
}

interface Dragger {
  drag: () => void
}
