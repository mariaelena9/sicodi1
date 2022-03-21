import React from "react";
import "./SideBar.css";
//Import styled-components
import styled from "styled-components";
import "./SideBar.css";

//Import assets
import { IconContext } from "react-icons";
import * as ImIcons from "react-icons/im";

//Import components
import { SidebarData } from "./SidebarData";

const SidebarIt = styled.div`
    display: flex;
    color: #e1e9fc;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    list-style: none;
    height: 60px;
    text-decoration: none;
    font-size: 18px;
    border-bottom: solid white .5px;

&:hover{
    background: #2b030e;
    border-left: 4px solid #c04d00;
    cursor: pointer;
`;
const SidebarLabel = styled.span`
  margin-left: 16px;
`;
export default function SideBar({ setSelectedMode }) {
  const OnButtonClick = (mode) => {
    setSelectedMode(mode);
  };
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="Nav">
          <div className="NavIcon">
            <ImIcons.ImUser />
            <p className="Usuario">Michelle Salinas Tirado</p>
            <p className="Cargo">
              Dirección Gral. de Sistemas y Tec. Informática
            </p>
          </div>
        </div>
        <div className="SidebarNav">
          <div className="SidebarWrap">
            <ul>
              {SidebarData.map((item, index) => {
                return (
                  <SidebarIt
                    item={item}
                    key={index}
                    onClick={() => OnButtonClick(item.title)}
                  >
                    <div>
                      {item.icon}
                      <SidebarLabel>{item.title}</SidebarLabel>
                    </div>
                  </SidebarIt>
                );
              })}
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}
