import React from "react";
import "./MailContainer.css";
import JSONData from "../../assets/Data.json";
import MailItem from "../MailItem/MailItem";
import "../Header/Header.css";
import SearchBar from "../SearchBar/SearchBar";
import Categories from "../Categories/Categories";
import { useState } from "react";

export default function MailContainer({ selectedMode }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedButton, setSelectedButton] = useState("");
  const f3 = (val) => {
    if (selectedButton === "") {
      return val;
    } else if (val.area.includes(selectedButton)) {
      return val;
    }
  };
  const f2 = (val) => {
    if (searchTerm === "") {
      return val;
    } else if (val.author.toLowerCase().includes(searchTerm.toLowerCase())) {
      return val;
    }
  };
  const f1 = (val) => {
    switch (selectedMode) {
      case "Principal":
      case "Recibidos":
        if (
          val.area === "Paquetería" ||
          val.area === "Oficio" ||
          val.area === "Importante" ||
          val.area === "Circular"
        ) {
          return val;
        }
        break;
      case "Historico":
        if (val.area === "Archivado") {
          return val;
        }
        break;
      case "Enviados":
        if (val.area === "Enviado" || val.area === "En Proceso") {
          return val;
        }
        break;
    }
  };
  const filters = [f1, f2, f3];
  return (
    <div id="main" className="container">
      <SearchBar setSearchTerm={setSearchTerm} />
      <div className="fs-4">{selectedMode}</div>
      <Categories
        setSelectedButton={setSelectedButton}
        selectedMode={selectedMode}
      />

      <div id="container" className="mailBox">
        {JSONData.filter((v) => filters.every((f) => f(v))).map((val, key) => {
          return (
            <MailItem
              author={val.author}
              subject={val.subject}
              content={val.content}
              area={val.area}
              status={val.status}
              key={key}
            />
          );
        })}
      </div>
    </div>
  );
}
