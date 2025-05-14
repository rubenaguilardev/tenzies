import Die from './Die'
import { useState } from 'react'

export default function App() {

    const [die, setDie] = useState(generateAllNewDice())

    function generateAllNewDice() {
        
        return new Array(10)
            .fill(0)
            .map(() => Math.ceil(Math.random() * 6))
    }
    
    const newDie = die.map(eachDie => <Die value={eachDie}/>)


    return (
        <main>
            <h1>Tenzies</h1>
            <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <section>
                {newDie}
            </section>
            <button className='rollBtn'>Roll</button>

        </main>
    )
}