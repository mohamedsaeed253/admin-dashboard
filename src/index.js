import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App";
import Dashboard from "./pages/dashboard/Dashboard";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Manage from "./pages/manage/Manage";
import ContactsInfo from "./pages/contacts/ContactsInfo";
import Invoices from "./pages/invoices/Invoices";
import AddUser from "./pages/add-user/AddUser";
import Calendar from "./pages/calendar/Calendar";
import FAQ from "./pages/FAQ/FAQ";
import BarChart from "./pages/bar-chart/BarChart";
import PieChart from "./pages/bie-chart/PieChart";
import LineChart from "./pages/line-chart/LineChart";
import Geography from "./pages/geography-chart/Geography";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} />
      <Route path="/manage" element={<Manage />} />
      <Route path="/contacts" element={<ContactsInfo />} />
      <Route path="/invoices" element={<Invoices />} />
      <Route path="/add" element={<AddUser />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/FAQ" element={<FAQ />} />
      <Route path="/bar_chart" element={<BarChart />} />
      <Route path="/pie_chart" element={<PieChart />} />
      <Route path="/line_chart" element={<LineChart />} />
      <Route path="/geography_chart" element={<Geography />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);