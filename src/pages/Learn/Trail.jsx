import PropTypes from "prop-types";

import Stage from "../../components/Learn/Stage";
import FinalStage from "../../components/Learn/FinalStage";

function Trail({ stages, bg }) {
  return (
    <section className="relative top-14 rotate-90 xl:rotate-0">
      <img src={bg} alt="trilha de aprendizagem" />
      {stages.map((stage) => (
        <Stage key={stage.id} {...stage} />
      ))}
      <FinalStage top={220} left={1295} />
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
