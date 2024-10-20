function ProgressBar({ value = 0, max = 100 }) {
    return (
        <>
            <progress className="rounded-[5px] mb-3" max={max} value={value}></progress>
        </>
    )
}

export default ProgressBar