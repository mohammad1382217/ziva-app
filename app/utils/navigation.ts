import { IRoute } from "../types/navigation";

// NextJS Requirement
export const isWindowAvailable = () => typeof window !== "undefined";

export const findCurrentRoute = (routes: IRoute[], pathname: string): IRoute | undefined => {
  return routes.find((route) => pathname.includes(route.layout + route.path));
};

export const getActiveRoute = (routes: IRoute[], pathname: string): string => {
  const route = findCurrentRoute(routes, pathname);
  return route?.name || "Default Brand Text";
};

// بروز رسانی getActiveNavbar با استفاده از pathname
export const getActiveNavbar = (routes: IRoute[], pathname: string): boolean => {
  const route = findCurrentRoute(routes, pathname);
  return route?.secondary || false;
};

// بروز رسانی getActiveNavbarText با استفاده از pathname
export const getActiveNavbarText = (routes: IRoute[], pathname: string): string | boolean => {
  return getActiveRoute(routes, pathname) || false;
};