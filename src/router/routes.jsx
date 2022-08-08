import React from "react";
import Main from "../pages/public/main/Main";
import Equipments from "../pages/public/equipments/Equipments";
import Services from "../pages/public/services/Services";
import Workers from "../pages/public/workers/Workers";
import Login from "../pages/public/login/Login";
import AdminMain from "../pages/private/admin/AdminMain";
import Owner from "../pages/private/owner/Owner";
import Vacancies from "../pages/public/vacancies/Vacancies";
import Contacts from "../pages/public/contacts/Contacts";
import AboutCompany from "../pages/public/aboutCompany/AboutCompany";

export const PUBLIC_ROUTES = [
  { path: "", exact: true, element: <Main />, textLink: null },
  {
    path: "/equipments",
    exact: true,
    element: <Equipments />,
    textLink: "Оборудование",
  },
  {
    path: "/services",
    exact: true,
    element: <Services />,
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
    path: "/workers",
    exact: true,
    element: <Workers />,
    textLink: "Сотрудники",
  },
  { path: "/login", exact: true, element: <Login />, textLink: null },
  {
    path: "/aboutCompany",
    exact: true,
    element: <AboutCompany />,
    textLink: "О компании",
  },
  {
    path: "/vacancies",
    exact: true,
    element: <Vacancies />,
    textLink: "Вакансии",
  },
  {
    path: "/contacts",
    exact: true,
    element: <Contacts />,
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
