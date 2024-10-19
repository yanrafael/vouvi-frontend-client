function ProgressBar({ value }) {
    return (
        <>
            <progress className="rounded-[5px]" max="100" value={value}></progress>
        </>
    )
}

export default ProgressBar