"use client";

import Collapse from "antd/es/collapse";
import { AddSquare, MinusSquare } from "solar-icon-set";

interface CollapseZivaType {
  items: any;
}
const CollapseZiva: React.FC<CollapseZivaType> = ({ items }) => {
  return (
    <Collapse
      accordion
      bordered={false}
      defaultActiveKey={["1"]}
      expandIcon={({ isActive }) =>
        isActive ? (
          <MinusSquare
            iconStyle="Outline"
            className="my-auto h-full"
            size={12}
            color="#FF5400"
          />
        ) : (
          <AddSquare
            iconStyle="Outline"
            className="my-auto h-full"
            size={12}
            color="#FF5400"
          />
        )
      }
      style={{ background: "#F8FAFC" }}
      items={items}
    />
  );
};

export default CollapseZiva;