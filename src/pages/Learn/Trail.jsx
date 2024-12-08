import PropTypes from "prop-types";

import Stage from "../../components/Learn/Stage";
import FinalStage from "../../components/Learn/FinalStage";

function Trail({ stages, bg }) {
  return (
    <section className="relative left-0 top-0 rotate-90 md:w-auto lg:rotate-0 xl:top-5">
      <img src={bg} alt="trilha de aprendizagem" width={1920} />
      {stages.map((stage) =>
        stage.final ? (
          <FinalStage
            key={stage.id}
            top={stage.top}
            left={stage.left - 450 / (window.innerWidth / 2)}
          />
        ) : (
          <Stage
            key={stage.id}
            top={stage.top}
            left={stage.left - 300 / (window.innerWidth / 2)}
            open={stage.open}
            icon={stage.icon}
            iconWidth={stage.iconWidth}
          />
        ),
      )}
    </section>
  );
}

Trail.propTypes = {
  stages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      icon: PropTypes.string,
      iconWidth: PropTypes.number,
      top: PropTypes.number.isRequired,
      left: PropTypes.number.isRequired,
      open: PropTypes.bool.isRequired,
      final: PropTypes.bool,
    }),
  ).isRequired,
  bg: PropTypes.string.isRequired,
};

export default Trail;