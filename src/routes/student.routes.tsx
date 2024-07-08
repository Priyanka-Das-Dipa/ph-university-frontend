import OfferedCoursed from "../pages/student/OfferedCoursed";
import StudentDeshboard from "../pages/student/StudentDeshboard";

export const studentPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <StudentDeshboard />,
  },
  {
    name: "Offered Course",
    path: "offered-course",
    element: <OfferedCoursed />,
  },
];
