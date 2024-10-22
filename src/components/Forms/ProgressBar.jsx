import PropTypes from "prop-types";

function ProgressBar({ value = 0, max = 100 }) {
  return (
    <>
      <progress
        className="rounded-[5px] mb-3 w-full h-4"
        max={max}
        value={value}
      ></progress>
    </>
  );
}

ProgressBar.propTypes = {
  value: PropTypes.number,
  max: PropTypes.number,
};

export default ProgressBar;
