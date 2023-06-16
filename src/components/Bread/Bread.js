import './bread.css';

const Bread = ({ breadObj }) => {
  const { img, name, description, price, soldOut } = breadObj;

  // if (soldOut) return null;

  return (
    <li className={`bread ${soldOut ? 'sold-out' : ''}`}>
      <img src={img} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
        <span>{soldOut ? 'Sold Out' : <>${price}</>}</span>
      </div>
    </li>
  );
};

export default Bread;
