import Bread from './Bread';
import breadData from '../data';

function Menu() {
  const breads = breadData;
  // const breads = [];
  const breadLength = breads.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {breadLength > 0 ? (
        <ul className="breads">
          {breads.map((bread) => (
            <Bread breadObj={bread} key={bread.name} />
          ))}
        </ul>
      ) : (
        <p>We're currently out of stock of our breads. Please come back later to see what we've made!</p>
      )}
    </main>
  );
}

export default Menu;
