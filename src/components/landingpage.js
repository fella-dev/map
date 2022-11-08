import travelpicture from "../assets/img/travel.jpeg";
function Landingpage() {
  return (
    <div className="landing">
      <img src={travelpicture} alt="" />
      <div className="head">
        <h1>Travel is a Therapy</h1>
        <button className="cta">Start</button>
      </div>
    </div>
  );
}

export default Landingpage;
