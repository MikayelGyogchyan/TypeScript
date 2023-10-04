/*
Often we see the Interfaces declared starting with 'I', stanging for
Interface.
For ex: IClock
*/

interface Rect {
  readonly id: string
  color?: string
  size: {
    width: number
    height: number
  }
}

const rect1: Rect = {
  id: '1234',
  size: {
    width: 20,
    height: 30
  },
  color: '#ccc'
}

const rect2: Rect = {
  id: '12345',
  size: {
    width: 10,
    height: 5
  }
}

rect2.color = 'black'
// rect2.id = '3232' // this is a readOnly prop

const rect3 = {} as Rect // by default it will be an empty object, But I can strictly cast it to some type by writing 'Rect'. That object we will have as a consequence of the given type
const rect4 = <Rect>{}

// =====================

interface RectWithArea extends Rect {
  getArea: () => number
}

const rect5: RectWithArea = {
  id: '123',
  size: {
    width: 20,
    height: 20
  },
  getArea(): number {
    return this.size.width * this.size.height
  }
}

// ==================
// The interfaces can interact with classes

interface IClock {
  time: Date
  setTime(date: Date): void
}

class Clock implements IClock { 
  time: Date = new Date()

  setTime(date: Date): void {
    this.time = date
  }
}

// =================

// this is not the effectife way
// interface Styles {
//   border: String,
//   marginTop: String,
//   borderRadius: String
// }

interface Styles {
  [key: string]: string
}

const css: Styles = {
  border: '1px solid black',
  marginTop: '2px',
  borderRadius: '5px'
}

