import Repositories from "../pages/Repositories";
import Developers from "../pages/Developers";

const Routes = [
  {
    path: "/trending",
    exact: true,
    auth: false,
    component: Repositories,
  },
  {
    path: "/trending/developers",
    exact: true,
    auth: false,
    component: Developers,
  },
];

export default Routes;
