class Typescript {
  version: string

  constructor(version: string) {
    this.version = version
  }

  info(name: string) {
    return `[${name}]: Typescript version is ${this.version}`
  }
}

// class Car {
//   readonly model: string
//   readonly numberOfWheels: number = 4
//
//   constructor(theModel: string) {
//     this.model = theModel // model is readonly, but anyway we can re-record, but we can do it inside the 'constructor', in other methods we cannot do it.
//   }
// }

class Car {
  readonly numberOfWheels: number = 4
  constructor(readonly model: string) {}
}
// ==============

// there are 3 types of ,odificators
// protect
// private
// public
class Animal {
  protected voice: string = '' // protected - availabale only in Animal and for all the Classes that are inherited from Animal, so in Cat Class we can use it. but 'protected voice' cannot be availabale in variables like from 'const cat'
  public color: string = 'black' // public is the default

  constructor() {
    this.go()
  }

  private go() { // private - availabale only in Animal class
    console.log('Go')
  }
}

class Cat extends Animal {
  public setVoice(voice: string): void { // public - available everywhere
    this.voice = voice
  }
}

const cat = new Cat()
cat.setVoice('test')
console.log(cat.color)
// cat.voice // voice is protected // we can using the setVoice

// =====================
// Abstract Classes
abstract class Component {
  abstract render(): void
  abstract info(): string
}

class AppComponent extends Component {
  render(): void {
    console.log('Component on render')
  }

  info(): string {
    return 'This is info';
  }
}