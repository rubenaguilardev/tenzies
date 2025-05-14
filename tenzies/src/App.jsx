import Die from './Die'
import { useState } from 'react'
import { nanoid } from 'nanoid'

export default function App() {

    const [dice, setDice] = useState(generateAllNewDice())

    function generateAllNewDice() {
        return new Array(10) 
            .fill(0)
            .map(() => ({
                value: Math.ceil(Math.random() * 6), 
                isHeld: false,
                id: nanoid()
            }))
    }

    function rollDice() {
        setDice(generateAllNewDice())
    }

    function hold(id) {
        setDice(prevDie => prevDie.map(die => (
            id === die.id ? {...die, isHeld: !die.isHeld} : die
        )))
    }
    
    const newDice = dice.map(eachDie => (
        <Die 
            key={eachDie.id} 
            value={eachDie.value}
            held={eachDie.isHeld}
            id={eachDie.id}
            hold={hold}
        />))

       
    return (
        <main>
            <h1>Tenzies</h1>
            <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <section>
                {newDice}
            </section>
            <button className='roll-btn' onClick={rollDice}>Roll</button>
        </main>
    )
}