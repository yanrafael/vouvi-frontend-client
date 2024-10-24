function PreviousButton({ setStep }) {
    return <input
        className="w-full bg-black bg-opacity-15 hover:bg-opacity-70 text-black hover:text-white transition-all hover:cursor-pointer py-4 rounded-md text-base font-bold"
        id="previous-button"
        type="button"
        value="Voltar"
        onClick={() => setStep(s => s - 1)}
    />;
}

export default PreviousButton