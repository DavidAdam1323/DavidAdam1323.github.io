import Arrow from "/images/arrow-down.svg";

const Button = ({ text, className, id }) => {
  return (
    <a id={id} className={`${className ?? ''} cta-wrapper`}>
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src={Arrow} alt="Arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;
