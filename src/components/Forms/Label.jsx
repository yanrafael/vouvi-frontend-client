function Label({ children, htmlFor = "" }) {
  return (
    <label className="w-fit text-base" htmlFor={htmlFor}>
      {children}
    </label>
  );
}

export default Label;
