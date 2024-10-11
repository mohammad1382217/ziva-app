import React from 'react';

import BoxDescription from './BoxDescription';
import { DangerCircle } from 'solar-icon-set';

interface NotificationListProps {
  notifications: string[];
}

const NotificationList: React.FC<NotificationListProps> = ({ notifications }) => {
  return (
    <BoxDescription name="اطلاعیه ها" Icon={DangerCircle}>
      <ul className="list-disc list-inside text-right text-base font-normal text-orange-300">
        {notifications.map((notification, index) => (
          <li key={index}>{notification}</li>
        ))}
      </ul>
    </BoxDescription>
  );
};

export default NotificationList;