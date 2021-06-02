import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from "./components/layouts/Landing";

import Auth from "./views/Auth";
import Dashboard from "./views/Dashboard";
import Student from "./views/Student";
import Lecturer from "./views/Lecturer";
import Course from "./views/Course";
import Result from "./views/Result";

import AuthContextProvider from "./contexts/AuthContext";
import ProtectedRoute from "./components/routing/ProtectedRoute";
import PostContextProvider from "./contexts/PostContext";
import StudentContextProvider from "./contexts/StudentContext";
import LecturerContextProvider from "./contexts/LecturerContext";
import CourseContextProvider from "./contexts/CourseContext";
import ResultContextProvider from "./contexts/ResultContext";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <PostContextProvider>
          <StudentContextProvider>
            <LecturerContextProvider>
              <CourseContextProvider>
                <ResultContextProvider>
                  <BrowserRouter>
                    <Switch>
                      <Route exact path="/" component={Landing} />
                      <Route
                        exact
                        path="/login"
                        render={(props) => (
                          <Auth {...props} authRoute="login" />
                        )}
                      />
                      <ProtectedRoute
                        exact
                        path="/dashboard"
                        component={Dashboard}
                      />
                      <ProtectedRoute
                        exact
                        path="/student"
                        component={Student}
                      />
                      <ProtectedRoute
                        exact
                        path="/lecturer"
                        component={Lecturer}
                      />
                      <ProtectedRoute exact path="/course" component={Course} />
                      <ProtectedRoute exact path="/result" component={Result} />
                    </Switch>
                  </BrowserRouter>
                </ResultContextProvider>
              </CourseContextProvider>
            </LecturerContextProvider>
          </StudentContextProvider>
        </PostContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
