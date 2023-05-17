import "./Help.css";

function Help(props) {
    return (
        <div className="window" onClick={props.onCancel} />
    );
  }
  
  export default Help;