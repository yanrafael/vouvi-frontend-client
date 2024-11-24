import propTypes from "prop-types";

// Desc: Top section of the Learn page
function TopSection({
  section,
  sectionName,
  playerLevel,
  playerXP,
  playerCoins,
}) {
  const vcoin = (
    <svg
      width="38"
      height="39"
      viewBox="0 0 38 39"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="Vector 27"
        d="M0.241091 19.5201C0.158585 19.5145 0.078192 19.5078 0 19.5C0.0794202 19.5061 0.159796 19.5128 0.241091 19.5201C5.43445 19.8721 19 15.7576 19 0.5C19 15.7576 32.5655 19.8721 37.7589 19.5201C37.8402 19.5128 37.9206 19.5061 38 19.5C37.9218 19.5078 37.8414 19.5145 37.7589 19.5201C31.3899 20.0931 19.377 24.393 19 37.244C19.012 37.6539 19.0122 38.0725 19 38.5C18.9878 38.0725 18.988 37.6539 19 37.244C18.623 24.393 6.61009 20.0931 0.241091 19.5201Z"
        fill="#FF8800"
      />
    </svg>
  );

  return (
    <section className="mt-4 flex w-full justify-center gap-4 text-[32px]">
      <div className="flex items-center rounded-[9px] bg-black/20 px-4">
        <p>
          <span className="font-bold">Sessão {section}:</span> {sectionName}
        </p>
      </div>

      <div className="flex items-center rounded-[9px] bg-secondary-200 px-3 py-1 text-white">
        <span className="font-bold">Nível {playerLevel}</span>

        <div className="relative mx-2 h-6 w-[35vw] rounded-[4px] bg-secondary-400">
          <div className="h-full w-4/5 rounded-[4px] bg-white"></div>
          <span className="absolute right-1 top-0 text-right text-sm text-secondary-200">
            Faltam 338 XP
          </span>
        </div>

        <span className="font-bold">Nível {playerLevel + 1}</span>
      </div>

      <div className="flex gap-2">
        <span className="flex items-center gap-2 rounded-[9px] bg-black/20 px-4">
          <span className="font-bold text-secondary-200">XP</span>
          {playerXP.toLocaleString()}
        </span>

        <span className="flex items-center gap-2 rounded-[9px] bg-black/20 px-4">
          {vcoin}
          {playerCoins.toLocaleString()}
        </span>
      </div>
    </section>
  );
}

TopSection.propTypes = {
  section: propTypes.number.isRequired,
  sectionName: propTypes.string.isRequired,
  playerLevel: propTypes.number.isRequired,
  playerXP: propTypes.number.isRequired,
  playerCoins: propTypes.number.isRequired,
};

export default TopSection;