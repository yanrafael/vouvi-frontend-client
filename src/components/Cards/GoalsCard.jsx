import { Icon } from "@iconify/react";
import trend from "../../assets/images/goals-trend.svg";
import conclude from "../../assets/images/goals-conclude.svg";
import notStarted from "../../assets/images/goals-notstarted.svg";
import delayed from "../../assets/images/goals-delayed.svg";
import { useEffect, useState } from "react";

function GoalsCard({ objective, actualValue, maxValue, date}) {
  const [iconBar, setIconBar] = useState(null);
  const [bgColor, setBgColor] = useState(null);
  const [textColor, setTextColor] = useState(null);
  const [describeText, setDescribeText] = useState(null);

  const colors = {
    default: ["bg-[#C6C6C6]", "text-[#6F6F6F]"],
    progress: ["bg-[#FF8800]", "text-[#6F6F6F]"],
    complete: ["bg-[#14A900]", "text-[#14A900]"],
    delayed: ["bg-[#E30000]", "text-[#E30000]"]
  };

  const describe = ["Não iniciado", "Em andamento...", "Concluída",'Atrasado'];

  const currentDate = new Date();
  const objectiveDate = new Date(date);
  objectiveDate.setDate(objectiveDate.getDate() + 1);


  let progression = Math.min((actualValue / maxValue) * 100, 100).toFixed(2);
  progression;

  useEffect(() => {
    const conclusive = () => {
      if (objectiveDate < currentDate && progression < 100) {
        setIconBar(delayed);
        setBgColor(colors.delayed[0]);
        setTextColor(colors.delayed[1]);
        setDescribeText(describe[3]);
      } else if (progression == 0) {
        setIconBar(notStarted);
        setBgColor(colors.default[0]);
        setTextColor(colors.default[1]);
        setDescribeText(describe[0]);
      } else if (progression > 0 && progression <= 99) {
        setIconBar(trend);
        setBgColor(colors.progress[0]);
        setTextColor(colors.progress[1]);
        setDescribeText(describe[1]);
      } else {
        setIconBar(conclude);
        setBgColor(colors.complete[0]);
        setTextColor(colors.complete[1]);
        setDescribeText(describe[2]);   
      }
    };

    conclusive();
  }, [progression,currentDate,objectiveDate]);

  return (
    <div className="rounded-md bg-[#86868633] dark:bg-[#1B1B1B] py-8 px-14 flex flex-col">
      <p className="text-[#878787] text-base">{objective}</p>
      <div className="flex gap-5 mt-4 items-center">
        <div className={`${bgColor} rounded-full w-fit h-fit p-4 flex-none`}>
          <Icon icon="fa6-solid:house" width="36px" className="text-white" />
        </div>
        <div className="flex flex-col justify-between w-full">
          <div className="flex justify-between text-[#6F6F6F] text-[32px]">
            <p>{describeText}</p>
            <p>{progression}%</p>
          </div>
          <div className=" flex m-auto w-[100%] h-[25px] bg-[#F5F5F480] rounded-md">
            <div
              style={{ width: `${progression}%` }}
              className={` ${bgColor} rounded-md`}
            ></div>
          </div>
          <div className="flex justify-between text-[#6F6F6F] text-[32px]">
            <p>
              R${actualValue.toFixed(2)} / R${maxValue.toFixed(2)}
            </p>
            <p className={`${textColor}`}>{`${objectiveDate.toLocaleDateString()}`}</p>
          </div>
        </div>
        <div>
          <img src={iconBar} alt="Icone de progresso" />
        </div>
      </div>
    </div>
  );
}
export default GoalsCard;
