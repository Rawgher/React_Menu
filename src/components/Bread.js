const Bread = ({ breadObj }) => {
  const { img, name, description, price } = breadObj;

  return (
    <li className="bread">
      <img src={img} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
        <span>${price}</span>
      </div>
    </li>
  );
};

export default Bread;
