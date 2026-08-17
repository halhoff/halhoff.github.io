document.addEventListener("DOMContentLoaded", async () => {  
  let projectData = await getProjects();

  updateProjects(projectData);
});

async function getProjects() {
  try {
    const response = await fetch("/projects.json");
    if (!response.ok) throw Error(response.status);

    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

function updateProjects(projectData) {
  const personalProjects = document.getElementById("personal-projects");
  const academicProjects = document.getElementById("academic-projects");

  if (!projectData) {
    const errorMsg = `<p class="indent-1" style="color: red">Failed to load projects</p>`;
    personalProjects.innerHTML = errorMsg;
    academicProjects.innerHTML = errorMsg;
    return;
  }

  personalProjects.innerHTML = projectData.personal.map((project) => `
    <div>
      ${project.link ? 
      `<p class="indent-link"><a href="${project.link}">${project.name}</a></p>`
    : `<p class="indent-1">${project.name}</p>`}
      ${project.subtitle.map(subtitle => `<p class="indent-2">${subtitle}</p>`).join("")}
    </div>
    `).join("");
  academicProjects.innerHTML = projectData.academic.map((project) => `
    <div>
      <p class="indent-1">${project.name}</p>
      ${project.subtitle.map(subtitle => `<p class="indent-2">${subtitle}</p>`).join("")}
    </div>
    `).join("");
}