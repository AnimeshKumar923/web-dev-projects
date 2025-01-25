import menuLogo from './menu-logo.jpg';

export const loadMenu = () => {
  const menuDiv = document.createElement('div');
  menuDiv.className = 'menu';
  menuDiv.innerHTML = `
  <h2>Our Menu</h2>
  <p>Explore our delicious offerings, crafted with love and fresh ingredients:</p>
  <ul>
    <li><strong>Appetizers:</strong> Bruschetta, Caesar Salad, Garlic Bread</li>
    <li><strong>Main Course:</strong> Grilled Salmon, Spaghetti Carbonara, Chicken Alfredo</li>
    <li><strong>Desserts:</strong> Tiramisu, Chocolate Lava Cake, Cheesecake</li>
    <li><strong>Beverages:</strong> Fresh Lemonade, Iced Tea, House Wine</li>
  </ul>`;
  document.querySelector('#content').appendChild(menuDiv);
  
  // menu logo
  const imgDiv = document.createElement('div');
  menuDiv.appendChild(imgDiv);
  const image = document.createElement("img");
  image.src = menuLogo;
  image.style = `height: 50px; width: 50px;`;
  imgDiv.appendChild(image);
}