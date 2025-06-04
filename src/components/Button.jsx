const Button = ({ type = "button", onClick, children, className = "" }) => {
  return (
    <button type={type} onClick={onClick} className={`btn ${className}`}>
      {children}
    </button>
  );
};

export default Button;
