import { Icon } from "@iconify/react";
import PropTypes from "prop-types";

function NoteCard({ title, content }) {
  let cutContent;

  if (window.innerWidth < 400) {
    if (content.length > 100) {
      cutContent = content.slice(0, 100) + "...";
    }
  } else {
    cutContent = content.slice(0, 130) + "...";
  }

  return (
    <div
      className={`flex max-h-64 flex-col rounded-sm dark:bg-[#FFB51566] bg-[#FFB515] text-black dark:text-white p-2 xs:p-4 sm:w-[40vw]`}
    >
      <div className="flex justify-between">
        <h3 className="relative float-left my-2 w-fit text-sm font-bold md:text-lg">
          {title}
        </h3>
        <Icon
          tabIndex="0"
          icon="mdi:trash-can-outline"
          width={38}
          color="white"
          className="relative float-left w-10 cursor-pointer"
        />
      </div>

      <p className="text-[16px] xs:text-sm md:text-md">{cutContent}</p>
    </div>
  );
}

NoteCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default NoteCard;
