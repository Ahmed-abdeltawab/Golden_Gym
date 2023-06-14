import React from "react";
import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";
export const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetails = [
    { icon: BodyPartImage, name: bodyPart },
    { icon: TargetImage, name: target },
    { icon: EquipmentImage, name: equipment },
  ];
  return (
    <div className="flex gap-x-14 px-10 mb-24">
      <img className="w-1/3 h-[650px] " src={gifUrl} alt={name} />
      <div className="details ">
        <p className="text-7xl font-bold mb-8">{name}</p>
        <p className="text-xl mb-8 leading-loose">
          Exercises keep you strong. <span className="capitalize	">{name}</span>{" "}
          bup is one of the best
          <br /> exercises to target your abs. It will help you improve your
          {target}
          <br /> mood and gain energy.
        </p>
        <div>
          {extraDetails?.map((item, index) => (
            <div key={index} className="flex items-center mb-10 gap-4">
              <img
                className="w-24 bg-orange-100 hover:bg-white transition-all p-3 rounded-full "
                src={item.icon}
                alt={item.name}
              />
              <p className="text-3xl font-semibold capitalize	">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
