import PropTypes from "prop-types";

import Stage from "../../components/Learn/Stage";
import trail from "../../assets/images/learning-trail-1.svg";

function Trail({ stages }) {
  return (
    <section className="relative top-14 mx-auto">
      <img src={trail} alt="trilha de aprendizagem" />
      {stages.map((stage) => (
        <Stage key={stage.id} {...stage} />
      ))}
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
};

export default Trail;
