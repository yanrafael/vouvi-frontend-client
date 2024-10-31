import CreateAvatar from "./CreateAvatar";
import LogoWhite from "../../Header/LogoWhite";
import AvatarCustom from "./AvatarCustom";
import { useState } from "react";
function Avatar() {
  const [showCreate, setShowCreate] = useState(true);

  const darkMode = document.body.classList.contains("dark")


  const VouviWord = (
    <svg
      width="156"
      height="36"
      viewBox="0 0 156 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="149.03"
        y="1.7281"
        width="6.32022"
        height="32.7619"
        rx="3.16011"
        fill={darkMode ? "white" : "black"}
      />
      <path
        d="M126.781 34.49C125.66 34.49 124.642 33.8377 124.174 32.8198L111.861 6.04014C110.907 3.96492 112.423 1.59911 114.707 1.59911C115.952 1.59911 117.079 2.33616 117.577 3.4767L128.091 27.5248C128.471 28.3933 127.835 29.366 126.887 29.366C125.938 29.366 125.302 28.391 125.684 27.5223L136.292 3.39704C136.772 2.30448 137.853 1.59911 139.046 1.59911C141.241 1.59911 142.697 3.87181 141.78 5.86537L129.387 32.8198C128.919 33.8377 127.901 34.49 126.781 34.49Z"
        fill={darkMode ? "white" : "black"}
      />
      <path
        d="M91.0817 35.2639C88.3858 35.2639 85.9455 34.6624 83.761 33.4592C81.6228 32.2098 79.9495 30.4976 78.741 28.3227C77.5325 26.1478 76.9283 23.6259 76.9283 20.7568V4.73656C76.9283 3.0038 78.333 1.59911 80.0657 1.59911V1.59911C81.7985 1.59911 83.2032 3.00379 83.2032 4.73656V20.4792C83.2032 22.2839 83.5053 23.8572 84.1096 25.1992C84.7603 26.4949 85.6899 27.4898 86.8984 28.1839C88.1069 28.878 89.5246 29.2251 91.1514 29.2251C93.6149 29.2251 95.5438 28.4616 96.9382 26.9345C98.3326 25.3612 99.0299 23.2094 99.0299 20.4792V4.73656C99.0299 3.0038 100.435 1.59911 102.167 1.59911V1.59911C103.9 1.59911 105.305 3.0038 105.305 4.73656V20.7568C105.305 23.6259 104.701 26.1478 103.492 28.3227C102.284 30.4976 100.61 32.2098 98.4721 33.4592C96.3805 34.6624 93.917 35.2639 91.0817 35.2639Z"
        fill={darkMode ? "white" : "black"}
      />
      <path
        d="M53.6467 35.2639C50.4065 35.2639 47.4903 34.5015 44.8981 32.9766C42.306 31.4517 40.2461 29.3955 38.7186 26.8078C37.1911 24.1739 36.4273 21.2397 36.4273 18.0051C36.4273 14.8167 37.1911 11.9518 38.7186 9.41033C40.2461 6.82266 42.306 4.76638 44.8981 3.24151C47.4903 1.71663 50.4065 0.954193 53.6467 0.954193C56.8406 0.954193 59.7336 1.71663 62.3258 3.24151C64.9643 4.72018 67.0472 6.75335 68.5748 9.34102C70.1023 11.9287 70.866 14.8167 70.866 18.0051C70.866 21.2397 70.1023 24.1739 68.5748 26.8078C67.0472 29.3955 64.9643 31.4517 62.3258 32.9766C59.7336 34.5015 56.8406 35.2639 53.6467 35.2639ZM53.6467 29.2337C55.7297 29.2337 57.5812 28.7486 59.2013 27.7782C60.8214 26.8078 62.0944 25.4909 63.0201 23.8274C63.9459 22.1176 64.4088 20.1769 64.4088 18.0051C64.4088 15.8795 63.9228 13.985 62.9507 12.3215C62.0249 10.658 60.752 9.36412 59.1319 8.43996C57.5581 7.46958 55.7297 6.98439 53.6467 6.98439C51.5637 6.98439 49.7122 7.46958 48.0921 8.43996C46.472 9.36412 45.199 10.658 44.2732 12.3215C43.3475 13.985 42.8846 15.8795 42.8846 18.0051C42.8846 20.1769 43.3475 22.1176 44.2732 23.8274C45.199 25.4909 46.472 26.8078 48.0921 27.7782C49.7122 28.7486 51.5637 29.2337 53.6467 29.2337Z"
        fill={darkMode ? "white" : "black"}
      />
      <path
        d="M17.6601 34.49C16.5397 34.49 15.5219 33.8377 15.0538 32.8198L2.74069 6.04014C1.78651 3.96492 3.30263 1.59911 5.5867 1.59911C6.83149 1.59911 7.95816 2.33616 8.45682 3.4767L18.971 27.5248C19.3507 28.3933 18.7144 29.366 17.7665 29.366C16.8174 29.366 16.1811 28.391 16.5631 27.5223L27.1713 3.39704C27.6517 2.30448 28.7324 1.59911 29.9259 1.59911C32.1201 1.59911 33.5765 3.87181 32.6599 5.86537L20.2665 32.8198C19.7984 33.8377 18.7805 34.49 17.6601 34.49Z"
        fill={darkMode ? "white" : "black"}
      />
    </svg>
  );

  return (
    <section className="flex flex-col items-center mt-12">
      <div className="mb-16">
        <LogoWhite darkMode={darkMode} Name={VouviWord} width={"80"} />
      </div>

      {/* Condicional para renderizar os componentes */}
      {showCreate ? (
        <CreateAvatar onClick={() => setShowCreate(!showCreate)} />
      ) : (
        <AvatarCustom />
      )}
    </section>
  );
}

export default Avatar;
