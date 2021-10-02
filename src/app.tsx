import React, {ReactElement} from 'react'
// import './app.scss'
import foo from './app.module.scss'
import style from './style.module.css'
interface User {
  name: {
    first: string
    last: string
  }
}

const tom: User = {
  name: {
    first: 'Thomas',
    last: 'salah',
  },
}
const add = (a: number, b: number): number => a + b
function App(): ReactElement {
  return (
    <div className={style.background}>
      <span className={foo.wrapper}> Hello world {tom.name.first}</span>
      {add(1, 2)}
    </div>
  )
}

export default App
