import PropTypes from "prop-types";

import Stage from "../../components/Learn/Stage";
import FinalStage from "../../components/Learn/FinalStage";

function Trail({ stages, bg }) {
  return (
    <section className="relative left-0 top-0 min-w-[100vh] rotate-90 md:w-auto lg:rotate-0 xl:top-5">
      <img src={bg} alt="trilha de aprendizagem" />
      {stages.map((stage) => (
        <Stage key={stage.id} {...stage} />
      ))}
      <FinalStage top={35} left={91.2} />
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
      finished: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  bg: PropTypes.string.isRequired,
};

export default Trail;
