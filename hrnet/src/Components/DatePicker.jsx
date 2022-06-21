import ErrorMessageField from "./ErrorMessageField";

export const DatePicker = ({
  htmlFor,
  className,
  title,
  type,
  register,
  required,
  errors,
  name,
}) => {
  return (
    <label htmlFor={htmlFor} className={className}>
      {title}
      <input type={type} {...register(name, { required })} />
      {errors && (
        <ErrorMessageField
          className="errorMessageDate"
          message="Please, fill out the field !"
        />
      )}
    </label>
  );
};
