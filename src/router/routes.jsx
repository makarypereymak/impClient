import React from "react";
import Main from "../pages/public/main/Main";
import Equipments from "../pages/public/equipments/Equipments";
import Services from "../pages/public/services/Services";
import Login from "../pages/public/login/Login";
import AdminMain from "../pages/private/admin/AdminMain";
import Owner from "../pages/private/owner/Owner";
import Vacancies from "../pages/public/vacancies/Vacancies";
import Contacts from "../pages/public/contacts/Contacts";

export const PUBLIC_ROUTES = [
  {
    path: "/",
    exact: true,
    element: <Main />,
    modifier: "main",
    textLink: "Главная",
    lowerLavelLinks: [
      {
        id: 0,
        idName: "certificates",
        text: "Лицензии",
      },
      {
        id: 1,
        idName: "security",
        text: "Охрана",
      },
      {
        id: 2,
        idName: "callback",
        text: "Обратный звонок",
      },
    ],
  },
  {
    path: "/services",
    exact: true,
    element: <Services />,
    modifier: "services",
    textLink: "Услуги",
    lowerLavelLinks: [
      {
        id: 0,
        idName: "physical",
        text: "Охрана объектов",
      },
      {
        id: 1,
        idName: "escort",
        text: "Сопровождение грузов",
      },
      {
        id: 2,
        idName: "personal",
        text: "Личная охрана",
      },
      {
        id: 3,
        idName: "development",
        text: "Разработка концепций безопасности",
      },
    ],
  },
  {
    path: "/equipments",
    exact: true,
    element: <Equipments />,
    modifier: "equipments",
    textLink: "Оборудование",
  },
  {
    path: "/login",
    exact: true,
    element: <Login />,
    idName: "",
    textLink: null,
  },
  {
    path: "/vacancies",
    exact: true,
    element: <Vacancies />,
    modifier: "vacancies",
    textLink: "Трудоустройство",
  },
  {
    path: "/contacts",
    exact: true,
    element: <Contacts />,
    modifier: "contacts",
    textLink: "Контакты",
  },
];

export const PRIVATE_ROUTES = {
  ADMIN: [
    {
      path: "/adminMain",
      exact: true,
      element: <AdminMain />,
      textLink: "Админ Главная",
    },
  ],
  OWNER: [
    {
      path: "/ownerMain",
      exact: true,
      element: <Owner />,
      textLink: "Владелец Главная",
    },
  ],
};
