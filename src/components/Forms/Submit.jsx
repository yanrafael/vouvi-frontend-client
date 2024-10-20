function Submit({ text, setStep }) {
    return <input
        className="w-full bg-primary-200 hover:bg-secondary-200 focus:bg-secondary-200 text-white hover:text-secondary-300 focus:text-secondary-300 transition-all hover:cursor-pointer py-4 rounded-md text-base font-bold"
        id="next-button"
        type="button"
        value={text}
        onClick={() => setStep(s => s + 1)}
    />;
}

export default Submit