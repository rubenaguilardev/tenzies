export default function Die(props) {
    

    const heldOn = props.held? 'green' : null
    
    return (
       <button className={heldOn} 
            onClick={() => props.hold(props.id)}
            aria-label={`Die with a value ${props.value},
            ${props.isHeld ? 'held' : 'not held'}`}
       >{props.value}</button>
    )
}