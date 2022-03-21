import React from "react";
import ReactDOM from "react-dom";
import "./NavBar.css";
import logoSicodi from "../../assets/SICODISinFondo.png";
import logoGob from "../../assets/logosgg.png";

class NavBar extends React.Component {
  render() {
    return (
      <header>
        <div className="content">
          <div className="logoIzq">
            <img src={logoSicodi} alt="SICODI" />
          </div>

          <div className="leyendas">
            <p> GOBIERNO DEL ESTADO DE NAYARIT </p>
            <p> SECRETARIA DE ADMINISITRACÓN Y FINANZAS </p>
            <p> SISTEMA DE CORRESPONDENCIA DIGITAL </p>
          </div>

          <div className="logoDer">
            <img src={logoGob} alt="GOB" />
          </div>
        </div>
      </header>
    );
  }
}
ReactDOM.render(<NavBar />, document.getElementById("root"));
export default NavBar;
