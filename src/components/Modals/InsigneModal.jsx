import { Icon } from "@iconify/react";
import InsigneModalCard from "../Cards/InsigneModalCard";
import VouviLover from "../../assets/images/vouvi-lover-md-icon.svg";
import Newbie from "../../assets/images/newbie-insigne.svg";
import Unknown from "../../assets/images/insigne-unknow.svg";
import { useEffect, useState } from "react";
import axios from "axios";

function InsineModal({ closeModal }) {
  const [achievements, setAchievements] = useState([]);
  const [userAchievements, setUserAchievements] = useState([]);
  const userId = JSON.parse(localStorage.getItem("user")).id;

  useEffect(() => {
    axios
      .get("https://backend.vouvi.com.br/achievement")
      .then((response) => setAchievements(response.data))
      .catch((error) => console.error("Erro ao buscar conquistas:", error));
  }, []);

  useEffect(() => {
    if (userId) {
      axios
        .get(`https://backend.vouvi.com.br/achieved/${userId}`)
        .then((response) => setUserAchievements(response.data))
        .catch((error) =>
          console.error("Erro ao buscar conquistas do usuário:", error)
        );
    }
  }, [userId]);

  const achievementIcons = {
    1: VouviLover,
    2: Newbie,
    
  };

  const achievementColors = [
    "bg-[#D3D3D3]",
    "bg-[#7C20BE33]",
    "bg-[#14A90033]",
    "bg-[#FFD70033]",
    "bg-[#FF634733]",
  ];

  const getAchievementIcon = (achievementId) => {
    return achievementIcons[achievementId] || Unknown;
  };

  const getAchievementColor = (achievementId) => {
    return achievementColors[achievementId] || "bg-[#D3D3D333]";
  };
  
  return (
    <section className="fixed left-0 top-0 z-20 flex h-full w-full items-center justify-center overflow-y-hidden bg-white/50 backdrop-blur-[25px] dark:bg-black/50">
      <div className="flex h-fit w-11/12 flex-col rounded-md bg-white p-4 shadow-2xl shadow-black sm:h-[90vh] sm:p-6 md:w-10/12 lg:w-8/12 dark:bg-[#1B1B1B]">
        <div className="flex items-center justify-between">
          <h1 className="text-right text-[32px] font-medium dark:text-white">
            Conquistas
          </h1>

          <Icon
            onClick={closeModal}
            className="relative right-[1px] cursor-pointer text-black opacity-35 dark:text-white"
            icon="carbon:close-filled"
            width="3rem"
          />
        </div>
        <div className="flex gap-5 overflow-x-scroll">
          {achievements.map((achievement, index) => {
            // Verifica se o índice é par ou ímpar para renderizar as conquistas em pares
            if (index % 2 === 0) {
              return (
                <div
                  key={achievement.idAchievement}
                  className="mt-8 flex flex-col gap-5"
                >
                  {/* Primeira conquista */}
                  <InsigneModalCard
                    img={getAchievementIcon(achievement.idAchievement)} // Ícone dinâmico pode ser colocado aqui
                    title={achievement.nameAchievement}
                    text={achievement.describeAchievement}
                    color={getAchievementColor(achievement.idAchievement)} // Atribui a cor com base no ID da conquista
                  />
                  {/* Verifica se existe a próxima conquista para renderizar */}
                  {achievements[index + 1] && (
                    <InsigneModalCard
                      img={getAchievementIcon(achievements[index + 1].idAchievement)} // Ícone dinâmico pode ser colocado aqui
                      title={achievements[index + 1].nameAchievement}
                      text={achievements[index + 1].describeAchievement}
                      color={getAchievementColor(
                        achievements[index + 1].idAchievement
                      )} // Atribui a cor com base no ID da conquista
                    />
                  )}
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </section>
  );
}
export default InsineModal;
