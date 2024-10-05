import { User , Widget5, CartCheck, Heart } from "solar-icon-set";
import { IRoute } from "../../types/navigation";

const routes: IRoute[] = [
  {
    name: "داشبورد",
    layout: "/",
    path: "Dashboard",
    icon: <Widget5 iconStyle="Outline" width="20px" height="20px" color="#ff5400" />,
    secondary: true,
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
    path: "MyTickets",
    icon: <CartCheck iconStyle="Outline" width="20px" height="20px" color="#ff5400" />,
    secondary: true,
  },
  {
    name: "علاقه مندی ها",
    layout: "/",
    path: "MyFavorite",
    icon: <Heart iconStyle="Outline" width="20px" height="20px" color="#ff5400" />,
    secondary: true,
  },
];

export default routes;