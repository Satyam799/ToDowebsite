import image from "../assets/check.png";

export default function Header() {
  return (
    <div className="Header">
        <div  className="styling">
      <div className="dlist">
        <p className="logo">
          2D
          <img src={image} alt="img"  className="image"/> 
          list
        </p>
      </div>
      <div className="othersentence">
        <p className="headersentence">You Probable have somthing to do</p>
      </div>
      </div>
    </div>
  );
}
