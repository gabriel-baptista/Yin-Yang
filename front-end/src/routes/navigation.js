import Dashboard from "../scenes/dashboard";
import Pacients from "../scenes/patients";
import Login from "../scenes/login";
import Form from "../scenes/form";
import Calendario from "../scenes/calendar";
import Login from "../scenes/login/login";
import User from "../scenes/user";
import Recipe from "../scenes/recipe";

export const nav = [
  {
    path: "/",
    name: "Dashboard",
    element: <Dashboard />,
    isMenu: true,
    isPrivate: true,
  },
  {
    path: "/Pacientes",
    name: "Pacientes",
    element: <Pacients />,
    isMenu: true,
    isPrivate: true,
  },
  {
    path: "/Login",
    name: "Login",
    element: <Login />,
    isMenu: false,
    isPrivate: false,
  },
  {
    path: "/Formulario",
    name: "Formulario",
    element: <Form />,
    isMenu: true,
    isPrivate: true,
  },
  {
    path: "/Calendario",
    name: "Calendario",
    element: <Calendario />,
    isMenu: true,
    isPrivate: true,
  },
  {
    path: "/user",
    name: "user",
    element: <User />,
    isMenu: true,
    isPrivate: true,
  },
  {
    path: "/Recipes",
    name: "Recipes",
    element: <Recipe />,
    isMenu: true,
    isPrivate: true,
  },
];
