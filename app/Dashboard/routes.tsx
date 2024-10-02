import { User , Widget5, CartCheck, Heart } from "solar-icon-set";
import { IRoute } from "../types/navigation";

const routes: IRoute[] = [
  {
    name: "داشبورد",
    layout: "/",
    path: "Dashboard",
    icon: <Widget5 iconStyle="Bold" width="20px" height="20px" color="#ff5400" />,
  },
  {
    name: "اطلاعات حساب",
    layout: "/",
    path: "Account",
    icon: <User iconStyle="Outline" width="20px" height="20px" color="#ff5400" />,
    secondary: true,
  },
  {
    name: "بلیط های من",
    layout: "/",
    icon: <CartCheck iconStyle="Outline" width="20px" height="20px" color="#ff5400" />,
    path: "MyTickets",
  },
  {
    name: "علاقه مندی ها",
    layout: "/",
    path: "Favorite",
    icon: <Heart iconStyle="Outline" width="20px" height="20px" color="#ff5400" />,
  },
];

export default routes;