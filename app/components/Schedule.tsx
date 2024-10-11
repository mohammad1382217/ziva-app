import React from 'react';

import BoxDescription from './BoxDescription';
import { ClockCircle } from 'solar-icon-set';

interface ScheduleItem {
  label: string;
  schedule: string;
}

interface ScheduleProps {
  men: ScheduleItem[];
  women: ScheduleItem[];
}

const Schedule: React.FC<ScheduleProps> = ({ men, women }) => {
  return (
    <BoxDescription name="زمان‌بندی و سانس ها" Icon={ClockCircle}>
      <ul className="flex justify-between text-base md-max:flex-col gap-6 text-slate-700">
        {men.map((item, index) => (
          <li key={index} className="gap-4">
            <span className="font-semibold">{item.label}</span>
            <section className="font-normal mt-4 text-base">{item.schedule}</section>
          </li>
        ))}
        {women.map((item, index) => (
          <li key={index} className="gap-4">
            <span className="font-semibold">{item.label}</span>
            <section className="font-normal mt-4 text-base">{item.schedule}</section>
          </li>
        ))}
      </ul>
    </BoxDescription>
  );
};

export default Schedule;