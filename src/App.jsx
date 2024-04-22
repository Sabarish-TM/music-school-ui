import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Layout from "./components/Layout";
import CourseTable from "./components/CourseTable";
import { Provider } from "react-redux";
import store from "./store/store";
import Dashboard from "./components/Dashboard";
import Test from "./components/Test";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <Layout>
                <Dashboard />
              </Layout>
            }
          />
          <Route
            path="/course"
            element={
              <Layout>
                <CourseTable />
              </Layout>
            }
          />
          <Route
            path="/test"
            element={
              <Layout>
                <Test />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
