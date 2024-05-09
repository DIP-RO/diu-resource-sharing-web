import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import DashBoard from "../Layout/DashBoard";
import DashboardHome from "../Pages/DashboardHome/DashboardHome";
import Setting from "../Pages/Setting/Setting";
import SearchBook from "../Pages/Book/SearchBook";
import AllBook from "../Pages/Book/AllBook";
import SearchPdf from "../Pages/Pdf/SearchPdf";
import AllPdf from "../Pages/Pdf/AllPdf";
import SearchNote from "../Pages/Notes/SearchNote";
import AllNotes from "../Pages/Notes/AllNotes";
import SearchQuestion from "../Pages/Question/SearchQuestion";
import AllQuestion from "../Pages/Question/AllQuestion";
import SingleQuestion from "../Pages/Question/SingleQuestion";
import SearchDiscussion from "../Pages/Discussion/SearchDiscussion";
import AllDiscussion from "../Pages/Discussion/AllDiscussion";
import SingleDiscussion from "../Pages/Discussion/SingleDiscussion";
import AddBook from "../Pages/Book/AddBook";
import ManageBook from "../Pages/Book/ManageBook";
import AddPdf from "../Pages/Pdf/AddPdf";
import AddQuestion from "../Pages/Question/AddQuestion";
import AddDiscussion from "../Pages/Discussion/AddDiscussion";
import AddNotes from "../Pages/Notes/AddNotes";
import PrivateRoutes from "./PrivateRoutes";
import ManageNote from "../Pages/Notes/ManageNote";
import ManagePdf from "../Pages/Pdf/ManagePdf";
import ManageQuestion from "../Pages/Question/ManageQuestion";
import Connect from "../Pages/ConnectDjango.jsx/Connect";

 export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main />,
      children: [
        {
          path: "/",
          element:<PrivateRoutes><Home/></PrivateRoutes>,
        },
        {
          path: "/login",
          element:<Login/>,
        },
        {
          path: "/signup",
          element:<Signup/>,
        },
        {
          path: "/searchbook",
          element:<SearchBook/>,
        },
        {
          path: "/allbook",
          element:<AllBook/>,
        },
        {
          path: "/searchpdf",
          element:<SearchPdf/>,
        },
        {
          path: "/allpdf",
          element:<AllPdf/>,
        },
        {
          path: "/searchnotes",
          element:<SearchNote/>,
        },
        {
          path: "/allnotes",
          element:<AllNotes/>,
        },
        {
          path: "/searchquestion",
          element:<SearchQuestion/>,
        },
        {
          path: "/connect",
          element:<Connect/>,
        },
        {
          path: "/allquestion",
          element:<AllQuestion/>,
        },
        {
          path: "/singlequestion",
          element:<SingleQuestion/>,
        },
        {
          path: "/searchdiscussion",
          element:<SearchDiscussion/>,
        },
        {
          path: "/alldiscussion",
          element:<AllDiscussion/>,
        },
        {
          path: "/singlediscussion",
          element:<SingleDiscussion/>,
        },

      ],
    },
    {
      path: "/dashboard",
      element:<PrivateRoutes><DashBoard/></PrivateRoutes> ,
      children: [
        {
          path: "/dashboard",
          element:<DashboardHome/>,
        },
        {
          path: "/dashboard/setting",
          element:<Setting/>,
        },
        {
          path: "/dashboard/addbook",
          element:<AddBook/>,
        },
        {
          path: "/dashboard/managebook",
          element:<ManageBook/>,
        },
        {
          path: "/dashboard/addpdf",
          element:<AddPdf/>,
        },
        {
          path: "/dashboard/addquestion",
          element:<AddQuestion/>,
        },
        {
          path: "/dashboard/addiscussion",
          element:<AddDiscussion/>,
        },
        {
          path: "/dashboard/addnotes",
          element:<AddNotes/>,
        },
        {
          path: "/dashboard/managenote",
          element:<ManageNote/>,
        },
        {
          path: "/dashboard/managepdf",
          element:<ManagePdf/>,
        },
        {
          path: "/dashboard/managequestion",
          element:<ManageQuestion/>,
        },

      ],
    }
  ]);
  