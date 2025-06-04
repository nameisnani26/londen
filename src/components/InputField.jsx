const InputField = ({ id, type, value, onChange, placeholder, className = "" }) => {
  return (
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`form-control ${className}`} 
    />
  );
};

export default InputField;
