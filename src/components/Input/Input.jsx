const Input = (props) => {
    const {
        placeholder, 
        label, 
        type, 
        name, 
        options = {}, 
        register, 
        className = '',
        error = false,
    } = props;

  return (
    <fieldset className={`form-floating text-dark ${className}`}>
            <input 
            type={type}
            id={`${name}-input`} 
            className={`form-control ${error? 'is-invalid' : ''}`}
            placeholder={placeholder}
            {...register(name,options)}
            />
            <label htmlFor={`${name}-input`}>{label}:</label>
        </fieldset>
  )
};
export default Input;