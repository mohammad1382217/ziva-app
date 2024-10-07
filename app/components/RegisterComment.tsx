"use client";

import Rate from "antd/es/rate";
import BoxDescription from "./BoxDescription";
import { AddCircle, ChatLine, CloseCircle, TrashBinMinimalistic } from "solar-icon-set";
import { Input, Textarea } from "@nextui-org/react";
import { useState } from "react";
import ButtonZiva from "./Button";

export interface RegisterCommentType {}

const RegisterComment: React.FC<RegisterCommentType> = ({}) => {
  const [strengths, setStrengths] = useState<string[]>([]);
  const [strength, setStrength] = useState<string>("");
  const [Weaknesses, setWeakneses] = useState<string[]>([]);
  const [Weakness, setWeakness] = useState<string>("");

  const addStrenth = () => {
    if (strength) {
      setStrengths([...strengths, strength]);
      setStrength("");
    }
  };
  const handleRemoveStrength = (index: number) => {
    const newStrengths = strengths.filter((_, i) => i !== index);
    setStrengths(newStrengths);
  };
  const addWeakness = () => {
    if (Weakness) {
      setWeakneses([...Weaknesses, Weakness]);
      setWeakness("");
    }
  };
  const handleRemoveWeakness = (index: number) => {
    const newtWeaknesses = Weaknesses.filter((_, i) => i !== index);
    setWeakneses(newtWeaknesses);
  };
  return (
    <BoxDescription clsasName="lg-max:w-full" name="ثبت نظر" Icon={ChatLine}>
      <p className="text-slate-500 text-base font-normal">
        تجربه خودت رو در استفاده از مجموعه برامون بنویس.
      </p>

      <form
        className="flex flex-col gap-4"
        onSubmit={(message) => {
          console.log(message);
        }}
      >
        <div className="flex flex-row justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <span className="text-slate-800 text-2xl sm-max:text-xl font-bold">0.0</span>
            <span className="font-semibold text-sm sm-max:text-xs">از</span>
            <span className="text-slate-600 font-bold text-xl sm-max:text-lg">5</span>
          </div>
          <div>
            <Rate defaultValue={0} />
          </div>
        </div>
        <div>
          <Textarea
            label="متن نظر"
            isRequired
            variant="bordered"
            classNames={{
              // base:'bg-transparent border-1 border-[#E4E4E7]',
              description: "text-slate-500 text-sm",
              label: "text-slate-600 text-xs",
            }}
            placeholder="نظرت رو برامون بنویس ..."
            className="w-full "
          />
        </div>
        <div className="flex flex-col gap-2">
          <Input
            type="text"
            id="strength"
            name="strength"
            value={strength}
            onChange={(e) => {
              setStrength(e.target.value);
            }}
            variant="bordered"
            placeholder="نقطه قوت"
            labelPlacement="outside"
            startContent={
              <AddCircle
                color="#12B76A"
                size={20}
                iconStyle="Bold"
                className="text-2xl text-default-400 pointer-events-none flex-shrink-0"
              />
            }
            endContent={
              <button
                type="button"
                className="text-2xl text-slate-500"
                onClick={addStrenth}
              >
                +
              </button>
            }
          />
          <div className="px-4 flex flex-col gap-2">
            {strengths.map((item, index) => (
              <div key={index} className="flex justify-between">
                <span className="text-sm font-normal text-slate-600">{item}</span>
                <TrashBinMinimalistic
                  onClick={() => {
                    handleRemoveStrength(index);
                  }}
                  color="#98A2B3"
                  size={13}
                  iconStyle="Bold"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Input
            type="text"
            id="weakness"
            name="weakness"
            value={Weakness}
            onChange={(e) => {
              setWeakness(e.target.value);
            }}
            variant="bordered"
            placeholder="نقطه ضعف"
            labelPlacement="outside"
            startContent={
              <CloseCircle
                color="#F04438"
                size={20}
                iconStyle="Bold"
                className="text-2xl text-default-400 pointer-events-none flex-shrink-0"
              />
            }
            endContent={
              <button
                type="button"
                className="text-2xl text-slate-500"
                onClick={addWeakness}
              >
                +
              </button>
            }
          />
          <div className="px-4 flex flex-col gap-2">
            {Weaknesses.map((item, index) => (
              <div key={index} className="flex justify-between">
                <span className="text-sm font-normal text-slate-600">{item}</span>
                <TrashBinMinimalistic
                  onClick={() => {
                    handleRemoveWeakness(index);
                  }}
                  color="#98A2B3"
                  size={13}
                  iconStyle="Bold"
                />
              </div>
            ))}
          </div>
        </div>
        <ButtonZiva className="h-10" type="button" buttonText="ثبت نظر" />
      </form>
    </BoxDescription>
  );
};

export default RegisterComment;
