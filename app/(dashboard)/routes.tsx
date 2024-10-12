import { User, Widget5, CartCheck, Heart } from "solar-icon-set";
import { IRoute } from "../types/navigation";

const routes: IRoute[] = [
  {
    name: "داشبورد",
    layout: "/",
    path: "Dashboard",
    icon: <Widget5 iconStyle="Outline" width="20px" height="20px" color="#ff5400" />,
    activeIcon: <Widget5 iconStyle="Bold" width="20px" height="20px" color="white" />,
    secondary: true,
  },
  {
    name: "اطلاعات حساب",
    layout: "/",
    path: "Account",
    icon: <User iconStyle="Outline" width="20px" height="20px" color="#ff5400" />,
    activeIcon: <User iconStyle="Bold" width="20px" height="20px" color="white" />,
  },
  {
    name: "بلیط های من",
    layout: "/",
    path: "MyTickets",
    icon: <CartCheck iconStyle="Outline" width="20px" height="20px" color="#ff5400" />,
    activeIcon: <CartCheck iconStyle="Bold" width="20px" height="20px" color="white" />,
  },
  {
    name: "علاقه مندی ها",
    layout: "/",
    path: "MyFavorite",
    icon: <Heart iconStyle="Outline" width="20px" height="20px" color="#ff5400" />,
    activeIcon: <Heart iconStyle="Bold" width="20px" height="20px" color="white" />,
  },
];

export default routes;
