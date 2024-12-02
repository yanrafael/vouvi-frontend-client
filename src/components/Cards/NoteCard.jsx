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
      className={`flex max-h-64 sm:w-[40vw] flex-col rounded-sm bg-[#FFB515] xs:p-4 p-2`}
    >
      <div className="flex justify-between">
        <h3 className="relative float-left my-2 w-fit md:text-lg text-sm font-bold">
          {title}
        </h3>
        <Icon
          icon="mdi:trash-can-outline"
          width={38}
          color="white"
          className="relative float-left cursor-pointer w-10"
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
