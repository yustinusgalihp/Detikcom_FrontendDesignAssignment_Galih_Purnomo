import React from "react";

function CartBerita(props) {
  const { src, title, description, className, classNameTitle } = props;

  return (
    <div className="card-artikel-size card">
      <img src={src} className="card-img-top img-artikel-size" alt="..." />
      <div className="card-body">
        <h5 className={classNameTitle}>{title}</h5>
        <p className={className}>{description}</p>
      </div>
    </div>
  );
}

function CartTime(props) {
  const {
    src,
    title,
    description,
    timestampIcon,
    timestampText,
    onClick,
    className,
    classNameTitle,
  } = props;

  return (
    <div className="card-timestamp-size card" onClick={onClick}>
      <img src={src} className="card-img-top img-timestamp-size" alt="..." />
      <div className="timestamp justify-content-center d-flex ">
        <h5>
          {timestampIcon && <img src={timestampIcon} alt="" className="mr-2" />}
          {timestampText && <span>{timestampText}</span>}
        </h5>
      </div>
      <div className="card-body ">
        {title && <h5 className={classNameTitle}>{title}</h5>}
        {description && <p className={className}>{description}</p>}
      </div>
    </div>
  );
}

export { CartBerita, CartTime };
