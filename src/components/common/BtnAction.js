function BtnAction(props){
    return (
        <button 
            className={props.class}
            onClick={props.onClick}
        >
            {props.value}       
        </button>
    );
    
} 

export default BtnAction;