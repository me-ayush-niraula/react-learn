import "./Parttwo.css";
const Parttwo = (props) => {
  return (
    <div className="twodiv">
      I'm part two
      {props.rollKey}
      {props.nameKey}
      {props.rollKey}
    </div>
  );
};

export default Parttwo;
