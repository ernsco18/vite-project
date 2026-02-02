const Button = function (props) {
  console.log("PROPS", props);
  return <button className={props.customClass}>{props.label}</button>;
};

export default Button;
