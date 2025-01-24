import restaurantImg from "./restaurant.png";
   
const loadUI = (() => {
  const contentDiv = document.querySelector('#content');
  const container = document.createElement('div');
  container.className = 'container';
  contentDiv.appendChild(container);
  
  const pageHeading = document.createElement('h2')
  pageHeading.textContent = 'Wonderful Restaurant'
  container.appendChild(pageHeading);

  const imgDiv = document.createElement('div');
  container.appendChild(imgDiv);
  const image = document.createElement("img");
  image.src = restaurantImg;
  imgDiv.appendChild(image);

  // Add intro section
  const intro = document.createElement('div');
  intro.className = 'intro';
  intro.innerHTML = `
    <h3>Proud Intro</h3>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  `;
  container.appendChild(intro);

  // Add timings section
  const timings = document.createElement('div');
  timings.className = 'timings';
  timings.innerHTML = `
    <h3>Hours</h3>
    <p>Monday: 6am - 6pm</p>
    <p>Tuesday: 6am - 6pm</p>
    <p>Wednesday: 6am - 6pm</p>
    <p>Thursday: 6am - 10pm</p>
    <p>Friday: 6am - 10pm</p>
    <p>Saturday: 8am - 10pm</p>
    <p>Sunday: CLOSED</p>
  `;
  container.appendChild(timings);

})();