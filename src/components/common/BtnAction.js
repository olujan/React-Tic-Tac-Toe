function BtnAction(props){
    return (
        <button 
            className="btn btn-success"
            onClick={props.onClick}
        >
            {props.value}       
        </button>
    );
    
} 

export default BtnAction;