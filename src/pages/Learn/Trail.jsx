import PropTypes from "prop-types";

import Stage from "../../components/Learn/Stage";
import FinalStage from "../../components/Learn/FinalStage";

function Trail({ stages, bg }) {
  return (
    <section className="relative left-0 top-0 rotate-90 md:w-auto lg:rotate-0 xl:top-5">
      <img src={bg} alt="trilha de aprendizagem" width={1920} />
      {stages.map((stage) => (
        <Stage key={stage.id} {...stage} />
      ))}
      <FinalStage top={35} left={91.5} />
    </section>
  );
}

Trail.propTypes = {
  stages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      icon: PropTypes.string,
      iconWidth: PropTypes.number,
      top: PropTypes.number.isRequired,
      left: PropTypes.number.isRequired,
      open: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  bg: PropTypes.string.isRequired,
};

export default Trail;
