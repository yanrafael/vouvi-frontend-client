// Desc: Top section of the Learn page
function TopSection({ section, sectionName }) {
  return (
    <section>
      <div>
        <p>
          <span className="font-bold">Sessão {section}:</span>
          <span>{sectionName}</span>
        </p>
      </div>
      <div></div>
      <div></div>
    </section>
  );
}

export default TopSection;
