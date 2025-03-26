import { Navigate, RouteObject } from "react-router-dom";
// import Layout from '../Layout';
import FreelancePlatform from "../pages/home/home";

const routes: RouteObject[] = [
  {
    path: "",
    element: <FreelancePlatform />,
  },
  //   {
  //     path: '/myguide',
  //     element: <Layout />,
  //     children: [
  //       {
  //         path: '',
  //         element: <Myguide />,
  //       },
  //     ],
  //   },
];
export default routes;
