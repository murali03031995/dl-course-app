import "./Header.css";
import logo from "../../assets/DL-icon.png"

export default function Header() {
  return (
    <>
      <div className="header d-flex justify-content-center align-items-center">
        <img className="pb-1" src={logo} alt="DL-icon" />
        <h1 className="ps-2" >Course Library</h1>
      </div>
    </>
  );
}
