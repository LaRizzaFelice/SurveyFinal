import { createBrowserRouter } from "react-router-dom";
import { Home } from "../Pages/Home/Home";
import { Login } from "../Pages/Login/Login";
import HeaderNavBar from "../Pages/Items/HeaderNavBar";
import { AboutMe } from "../Pages/AboutMe/AboutMe";
import { SurveyPage } from "../Pages/SurveyPage/SurveyPage.";
import ResultPage from "../Pages/SurveyPage/partials/ResultPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HeaderNavBar />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/aboutme",
        element: <AboutMe />,
      },
      {
        path: "/surveypage",
        element: <SurveyPage />,
      },
      {
        path: "/resultpage",
        element: <ResultPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
