// Output Elements
const
  aboutContainer = document.querySelector('.about-container'),
  skillsContainer = document.querySelector('.skills-container'),
  workContainer = document.querySelector('.work'),
  studiesContainer = document.querySelector('.studies'),
  portfolioContainer = document.querySelector('.portfolio-container');

// API URLs
const aboutUrl = 'http://localhost:8080/portfolio/api/bio?published=true';
const skillsUrl = 'http://localhost:8080/portfolio/api/skills';
const workUrl = 'http://localhost:8080/portfolio/api/jobs';
const studiesUrl = 'http://localhost:8080/portfolio/api/courses';
const portfolioUrl = 'http://localhost:8080/portfolio/api/projects';



/********** GET **********/
/* Gets data and call create appropriate element
  * @param        {string}        url       API-url
*/
const fetchAndCreate = (url, createElement) => {
  fetch(url)
    .then(res => res.json())
    .then(data => createElement(data))
    .catch(e => console.error(e))
};



/* Gets all bio with GET request
  * @param        {object}        fetchData       fetchData.bios[0].id/heading/bio/img_src
*/
const createBio = (fetchData) => {
  const bio = fetchData.bios[0];

  aboutContainer.innerHTML += `
    <div class="avatar-container">
      <div class="avatar" style="background: url('${bio.img_src}') no-repeat center center/cover"></div>
    </div>

    <div>
          <div>
            <h3>${bio.heading}</h3>
            <p>${bio.bio}</p>
          </div>
        </div>
  `
};



/* Gets all skills with GET request
  * @param        {object}        fetchData       fetchData.skills
*/
const createSkills = (fetchData) => {
  const skills = fetchData.skills;

  skills.forEach(skill => {
    skillsContainer.innerHTML += `
      <div class="skill">
        <i class="${skill.icon} fa-3x"></i>
        <span>${skill.skill}</span>
      </div>
    `
  })
};



/* Gets all jobs with GET request
  * @param        {object}        fetchData       fetchData.jobs
*/
const createWork = (fetchData) => {
  const jobs = fetchData.jobs;

  jobs.forEach(job => {
    workContainer.innerHTML += `
      <div class="resume-item">
        <h4>${job.company}</h4>
        <span>${job.title}</span><br>
        <span>${job.date_start} – ${job.date_end}</span>
        <p>${job.descr}</p>
      </div>
    `;
  });
};



/* Gets all studies with GET request
  * @param        {object}        fetchData       fetchData.courses
*/
const createStudies = (fetchData) => {
  const courses = fetchData.courses;

  courses.forEach(course => {
    studiesContainer.innerHTML += `
      <div class="resume-item">
        <h4>${course.title}</h4>
        <span>${course.institution}</span><br>
        <span>${course.date_start} – ${course.date_end}</span>
        <p>${course.descr}</p>
      </div>
    `;
  });
};



/* Gets all jobs with GET request
  * @param        {object}        fetchData       fetchData.projects
*/
const createPortfolio = (fetchData) => {
  const projects = fetchData.projects;

  projects.forEach(project => {
    portfolioContainer.innerHTML += `
      <div class="portfolio-item">
        <img src="${project.img_src}" alt="" />
      </div>
    `
  });
};



window.addEventListener("load",
  fetchAndCreate(aboutUrl, createBio),
  fetchAndCreate(skillsUrl, createSkills),
  fetchAndCreate(workUrl, createWork),
  fetchAndCreate(studiesUrl, createStudies),
  fetchAndCreate(portfolioUrl, createPortfolio)
);
