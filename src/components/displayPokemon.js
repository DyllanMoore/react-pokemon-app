export function DisplayPokemon(props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <img src={props.img} />
            <h3>Species: {props.species}</h3>
            <h3>HP: {props.hp}</h3>
            <h3>Attack: {props.attack}</h3>
            <h3>Defense: {props.defense}</h3>
            <h3>Type: {props.type}</h3>
        </div>
    )
}