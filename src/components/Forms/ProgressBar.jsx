function ProgressBar({ value }) {
    return (
        <>
            <progress className="rounded-[5px] mb-3" max="100" value={value}></progress>
        </>
    )
}

export default ProgressBar