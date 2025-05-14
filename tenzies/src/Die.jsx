export default function Die(props) {
    

    const heldOn = props.held? 'green' : null
    
    return (
       <button className={heldOn} onClick={() => props.hold(props.id)}>{props.value}</button>
    )
}