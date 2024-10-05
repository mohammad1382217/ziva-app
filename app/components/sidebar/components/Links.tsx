import Link from 'next/link';
import { IRoute } from '../../../types/navigation';
import { usePathname } from 'next/navigation';
import { useCallback } from 'react';
import React from 'react';

interface SidebarLinksProps {
  routes: IRoute[];
}

const SidebarLinks = ({ routes }: SidebarLinksProps) => {
  const pathname = usePathname();

  // Determine if the route is active
  const activeRoute = useCallback(
    (routeName: string) => pathname?.includes(routeName.toLowerCase()),
    [pathname]
  );

  // Create sidebar links
  const createLinks = (routes: IRoute[]) =>
    routes.map((route, index) => {
      const isActive = activeRoute(route.path);

      // Adjust icon style based on active status
      const iconWithStyle = React.cloneElement(route.icon, {
        iconStyle: isActive ? 'Bold' : 'Outline',
        color: '#ff5400', // Keep the color the same
      });

      return (
        <Link key={index} href={route.layout + route.path}>
          <div className="flex items-center py-1.5 px-2 justify-center">
            <div
              className={`ml-3 ${
                isActive ? 'text-[#ff5400]' : 'text-gray-400'
              } flex items-center justify-center`}
            >
              {iconWithStyle}
            </div>
            <span
              className={`ml-auto font-semibold ${
                isActive ? 'text-gray-800' : 'text-gray-400'
              }`}
            >
              {route.name}
            </span>
            <div
              className={`h-9 w-1 ml-2 rounded ${
                isActive ? 'bg-[#ff5400]' : 'bg-transparent'
              }`}
            />
          </div>
        </Link>
      );
    });

  return <>{createLinks(routes)}</>;
}

export default SidebarLinks;