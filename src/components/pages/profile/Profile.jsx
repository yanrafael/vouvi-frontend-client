import Top from "./Top";
import Mid from "./Mid";
import Low from "./Low";
import HeaderIntern from "../../Header/HeaderIntern";
import Footer from "../../Footer/Footer";
function Profile() {
  return (
    <>
      <HeaderIntern/>
      <Top />
      <Mid />
      <Low friends={"15"} />
      <Footer/>
    </>
  );
}
export default Profile;
