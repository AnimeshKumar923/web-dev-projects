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

  const intro = document.createElement('div');
  intro.className = 'intro';
  container.appendChild(intro);

  const introHeading = document.createElement('h3');
  introHeading.textContent = 'Proud Intro';
  intro.appendChild(introHeading);

  const paragraph = document.createElement('p');
  paragraph.innerHTML = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
  intro.appendChild(paragraph);

  const timings = document.createElement('div');
  timings.className = 'timings';
  container.appendChild(timings);

  const timingsHeading = document.createElement('h3');
  timingsHeading.textContent = 'Hours';
  timings.appendChild(timingsHeading);

  // days paras
  const monday = document.createElement('p');
  monday.innerText = 'Monday: 6am - 6pm';
  const tuesday = document.createElement('p');
  tuesday.innerText = 'Tuesday: 6am - 6pm';
  const wednesday = document.createElement('p');
  wednesday.innerText = 'Wednesday: 6am - 6pm';
  const thursday = document.createElement('p');
  thursday.innerText = 'Thursday: 6am - 10pm';
})();
