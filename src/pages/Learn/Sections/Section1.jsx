import Stage from "../../../components/Learn/Stage";

function Section1() {
  return (
    <section className="relative">
      <Stage
        icon={"mdi:book-open-page-variant"}
        iconWidth={40}
        top={0}
        left={0}
      />
      <Stage
        icon={"mdi:book-open-page-variant"}
        iconWidth={40}
        top={200}
        left={100}
      />
    </section>
  );
}

Section1.propTypes = {};

export default Section1;
