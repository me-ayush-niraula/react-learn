import "./Partone.css";
const Partone = (props) => {
  return (
    <div className="onediv">
      I'm part one
      {props.nameKey}
      {props.rollKey}
    </div>
  );
};

export default Partone;
