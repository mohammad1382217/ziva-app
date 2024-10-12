import React from 'react';

import BoxDescription from './BoxDescription'; 
import { ClipboardCheck } from 'solar-icon-set';

interface RulesProps {
  rules: string[];
}

const Rules: React.FC<RulesProps> = ({ rules }) => {
  return (
    <BoxDescription
      clsasName=""
      name="قوانین و شرایط استفاده"
      Icon={ClipboardCheck}
    >
      <ul className="list-none p-0">
        {rules.map((rule, index) => (
          <li key={index} className="text-base font-normal text-slate-600 mb-6">
            {rule}
          </li>
        ))}
      </ul>
    </BoxDescription>
  );
};

export default Rules;