import Partone from "./Partone";
import Parttwo from "./Parttwo";
const HeadingPart = () => {
  const information = [
    { name: "ayush", roll: 18 },
    { name: "afrin", roll: 20 },
  ];
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-sm-12">
          <Partone nameKey={information[0].name} rollKey={information[0].roll} />
        </div>
        <div className="col-lg-6 col-sm-12">
          <Parttwo nameKey={information[1].name} rollKey={information[1].roll} />
        </div>
      </div>
    </div>
  );
};

export default HeadingPart;
