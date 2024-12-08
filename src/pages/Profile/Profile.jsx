import Top from "./Top";
import Mid from "./Mid";
import Low from "./Low";

import axios from "axios";

import HeaderIntern from "../../components/Header/HeaderIntern";
import Footer from "../../components/Footer/Footer";
import Settings from "../../components/Header/Settings";

import SettingsModal from "../../components/Modals/SettingsModal";
import InsigneModal from "../../components/Modals/InsigneModal";
import FriendsModal from "../../components/Modals/FriendsModal";
import FriendsAddModal from "../../components/Modals/FriendAddModal";

import { useState, useEffect } from "react";

import HeaderMobile from "../../components/Header/HeaderMobile";

function Profile() {
  const userId = JSON.parse(localStorage.getItem("user")).id;

  const [darkMode, setDarkMode] = useState(
    document.body.classList.contains("dark"),
  );
  const [activeModal, setActiveModal] = useState(null); // "settings" ou "insigne"

  const openModal = (modalType) => setActiveModal(modalType);
  const closeModal = () => setActiveModal(null);

  // API para buscar dados do usuário
  const [userName, setUserName] = useState(null);
  const [levelUser, setLevelUser] = useState(1);
  const [xp, setXp] = useState(0);
  const [vcoin, setVcoin] = useState(0);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      setUserName(userData.username);
      setXp(userData.xp);
      setVcoin(userData.vcoin);
      setLevelUser(Math.floor(xp / 100) + 1);
    }
  }, [xp]);

  const [achievements, setAchievements] = useState([]);
  const [achievementCount, setAchievementCount] = useState(0);

  useEffect(() => {
    if (userId) {
      axios
        .get(`https://backend.vouvi.com.br/achieved/${userId}`)
        .then((response) => {
          setAchievements(response.data);
          setAchievementCount(response.data.length); // Contar as conquistas
        })
        .catch((error) =>
          console.error("Erro ao buscar conquistas do usuário:", error)
        );
    }
  }, [userId]);



  return (
    <>
      <HeaderIntern
        iconActiveNumber={""}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      >
        <Settings openModal={() => openModal("settings")} />
      </HeaderIntern>
      <Top
        userName={userName}
        levelUser={levelUser}
        xpLeft={levelUser * 100 - xp}
        progressionbar={((xp % 100) / 100) * 100}
        vcoin={vcoin}
        achievements={achievementCount+"/20"}
      />
      <Mid openModal={() => openModal("insigne")} />
      <Low
        openModal={() => openModal("friends")}
        openModal2={() => openModal("friendsAdd")}
        friends={"3"}
      />
      <Footer />
      {activeModal === "settings" && <SettingsModal closeModal={closeModal} />}
      {activeModal === "insigne" && <InsigneModal closeModal={closeModal} />}
      {activeModal === "friends" && (
        <FriendsModal
          openModal={() => openModal("friendsAdd")}
          closeModal={closeModal}
        />
      )}
      {activeModal === "friendsAdd" && (
        <FriendsAddModal closeModal={closeModal} />
      )}
      <HeaderMobile iconId={4} />
    </>
  );
}

export default Profile;
