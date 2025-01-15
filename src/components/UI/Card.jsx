import '../UI/Card.scss';


export function CardContainer(props){
    return(
        <div className="cardContainer" >
            {props.children}
        </div>
    );
}


export function Card(props){
    return(
        <div className="card" >
            {props.children}
        </div>
    );
}

