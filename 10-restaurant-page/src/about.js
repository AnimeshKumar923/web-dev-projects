import infoIcon from './information-button.png'

export const loadAbout = () => {
  const aboutDiv = document.createElement('div');
  aboutDiv.className = 'menu';
  aboutDiv.innerHTML = `
    <h2>About Us</h2>
    <p>Welcome to <strong>Wonderful Restaurant</strong>, where passion meets flavor! Established in 2005, we pride ourselves on serving the finest dishes made from locally sourced ingredients. Our chefs bring years of experience and creativity to every plate, ensuring a memorable dining experience for our guests.</p>
    <p>Whether you're here for a casual meal or a special celebration, we strive to make every visit exceptional. Come join us and taste the difference!</p>
`;
  document.querySelector('#content').appendChild(aboutDiv);

  // info logo
    const imgDiv = document.createElement('div');
    aboutDiv.appendChild(imgDiv);
    const image = document.createElement("img");
    image.src = infoIcon;
    image.style = `height: 50px; width: 50px;`;
    imgDiv.appendChild(image);
}
