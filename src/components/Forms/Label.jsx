function Label({ children, htmlFor = "" }) {
    return <label className="text-base w-fit" htmlFor={htmlFor}>{children}</label>;
}

export default Label