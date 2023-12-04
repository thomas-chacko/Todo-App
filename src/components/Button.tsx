type Button = {
  children: JSX.Element | string;
  className?: string;
  onClick?: () => void;
};

const Button = ({ children, className ,onClick}: Button) => {
  return (
    <div>
      <button className={className} type="submit" onClick={onClick}>
        {children}
      </button>
    </div>
  );
};
export default Button;
