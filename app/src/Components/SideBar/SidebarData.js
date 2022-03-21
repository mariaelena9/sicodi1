import React from "react";
// import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
// import * as IoIcons from "react-icons/io";
// import * as RiIcons from "react-icons/ri";
import * as MdIcons from "react-icons/md";
// import * as VscIcons from "react-icons/vsc";
import * as ImIcons from "react-icons/im";

export const SidebarData = [
  {
    title: "Inicio",
    icon: <AiIcons.AiFillHome />,
  },

  {
    title: "Directorio",
    icon: <MdIcons.MdImportContacts />,
  },

  {
    title: "Nueva Correspondencia",
    icon: <ImIcons.ImFileText2 />,
  },

  {
    title: "Enviados",
    icon: <ImIcons.ImBoxRemove />,
  },

  {
    title: "Recibidos",
    icon: <ImIcons.ImBoxAdd />,
  },

  {
    title: "Historico",
    icon: <ImIcons.ImHistory />,
  },

  {
    title: "Reportes",
    icon: <ImIcons.ImStatsDots />,
  },
];
