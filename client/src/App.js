import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from "./components/layouts/Landing";

// Authentication View
import Auth from "./views/Auth/Auth";

// Dashboard View
import Dashboard from "./views/Dashboard/Dashboard";

// Student View
import Student from "./views/Student/Student";
import StudentDetail from "./views/Student/StudentDetail";
import StudentWave from "./views/Student/StudentWave";

// Lecturer View
import Lecturer from "./views/Lecturer/Lecturer";
import LecturerDetail from "./views/Lecturer/LecturerDetail";

// Course View
import Course from "./views/Course/Course";
import CourseLecturer from "./views/Course/CourseLecturer/CourseLecturer";
import CourseStudent from "./views/Course/CourseStudent/CourseStudent";
import CourseDetail from "./views/Course/CourseDetail/CourseDetail";
import CourseYear from "./views/Course/CourseYear/CourseYear";
import CourseWave from "./views/Course/CourseWave/CourseWave";
import CourseDepartment from "./views/Course/CourseDepartment/CourseDepartment";
import CourseExport from "./views/Course/Export/CourseExport";

// Result View
import Result from "./views/Result/Result";
import ResultStudent from "./views/Result/ResultStudent";
import ResultYearProgram from "./views/Result/ResultYearProgram/ResultYearProgram";
import ResultWave from "./views/Result/ResultWave/ResultWave";
import ResultMajor from "./views/Result/ResultMajor/ResultMajor";
import ResultDetail from "./views/Result/ResultDetail/ResultDetail";
import ResultStudentSearch from "./views/Result/ResultStudentSearch";
import ResultExport from "./views/Result/ResultExport/ResultExport";

// User View
import User from "./views/User/User";
import UserRole from "./views/User/UserRole";

// Profile View
import ProfileStudent from "./views/Profile/ProfileStudent";

// 404
import NotFound from "./views/NotFound/NotFound";

// Context
import AuthContextProvider from "./contexts/AuthContext";
import ProtectedRoute from "./components/routing/ProtectedRoute";
import PostContextProvider from "./contexts/PostContext";
import StudentContextProvider from "./contexts/StudentContext";
import LecturerContextProvider from "./contexts/LecturerContext";
import CourseContextProvider from "./contexts/CourseContext";
import CourseStudentContextProvider from "./contexts/CourseStudentContext";
import ResultContextProvider from "./contexts/ResultContext";
import UserContextProvider from "./contexts/UserContext";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <PostContextProvider>
          <StudentContextProvider>
            <LecturerContextProvider>
              <CourseContextProvider>
                <CourseStudentContextProvider>
                  <ResultContextProvider>
                    <UserContextProvider>
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
                            path="/student/:major"
                            component={StudentWave}
                          />
                          <ProtectedRoute
                            exact
                            path="/student/:major/:session"
                            component={StudentDetail}
                          />
                          <ProtectedRoute
                            exact
                            path="/lecturer"
                            component={Lecturer}
                          />
                          <ProtectedRoute
                            exact
                            path="/lecturer/:department"
                            component={LecturerDetail}
                          />
                          <ProtectedRoute exact path="/user" component={User} />
                          <ProtectedRoute
                            exact
                            path="/user/:role"
                            component={UserRole}
                          />
                          <ProtectedRoute
                            exact
                            path="/profile"
                            component={ProfileStudent}
                          />
                          <ProtectedRoute
                            exact
                            path="/result/:studentID"
                            component={ResultStudentSearch}
                          />
                          <ProtectedRoute
                            exact
                            path="/result"
                            component={Result}
                          />
                          <ProtectedRoute
                            exact
                            path="/result/export/:wave/:courseCode"
                            component={ResultExport}
                          />
                          <ProtectedRoute
                            exact
                            path="/result/:year/:levelOfTraining"
                            component={ResultYearProgram}
                          />
                          <ProtectedRoute
                            exact
                            path="/result/:year/:levelOfTraining/:wave"
                            component={ResultWave}
                          />
                          <ProtectedRoute
                            exact
                            path="/result/:year/:levelOfTraining/:wave/:major"
                            component={ResultMajor}
                          />
                          <ProtectedRoute
                            exact
                            path="/result/:year/:levelOfTraining/:wave/:major/:courseName"
                            component={ResultDetail}
                          />
                          <ProtectedRoute
                            exact
                            path="/resultStudent"
                            component={ResultStudent}
                          />
                          <ProtectedRoute
                            exact
                            path="/course"
                            component={Course}
                          />
                          <ProtectedRoute
                            exact
                            path="/courseStudent"
                            component={CourseStudent}
                          />
                          <ProtectedRoute
                            exact
                            path="/course/export/:wave/:courseCode"
                            component={CourseExport}
                          />
                          <ProtectedRoute
                            exact
                            path="/course/:year/:program"
                            component={CourseYear}
                          />
                          <ProtectedRoute
                            exact
                            path="/course/:year/:program/:wave"
                            component={CourseWave}
                          />
                          <ProtectedRoute
                            exact
                            path="/course/:year/:program/:wave/:department"
                            component={CourseDepartment}
                          />
                          <ProtectedRoute
                            exact
                            path="/course/:year/:program/:wave/:department/:courseName"
                            component={CourseDetail}
                          />
                          <Route component={NotFound} />
                        </Switch>
                      </BrowserRouter>
                    </UserContextProvider>
                  </ResultContextProvider>
                </CourseStudentContextProvider>
              </CourseContextProvider>
            </LecturerContextProvider>
          </StudentContextProvider>
        </PostContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
