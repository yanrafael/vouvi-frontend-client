import Top from "./Top";
import Mid from "./Mid";
import Low from "./Low";

import HeaderIntern from "../../components/Header/HeaderIntern";
import Footer from "../../components/Footer/Footer";
import Settings from "../../components/Header/Settings";

import SettingsModal from "../../components/Modals/SettingsModal";
import InsigneModal from "../../components/Modals/InsigneModal";
import FriendsModal from "../../components/Modals/FriendsModal";
import FriendsAddModal from "../../components/Modals/FriendAddModal";

import { useState } from "react";

function Profile() {
  const [darkMode, setDarkMode] = useState(
    document.body.classList.contains("dark"),
  );
  const [activeModal, setActiveModal] = useState(null); // "settings" ou "insigne"

  const openModal = (modalType) => setActiveModal(modalType);
  const closeModal = () => setActiveModal(null);

  return (
    <>
      <HeaderIntern
        iconActiveNumber={""}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      >
        <Settings openModal={() => openModal("settings")} />
      </HeaderIntern>
      <Top />
      <Mid openModal={() => openModal("insigne")} />
      <Low
        openModal={() => openModal("friends")}
        openModal2={() => openModal("friendsAdd")}
        friends={"15"}
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
      
    </>
  );
}

export default Profile;
