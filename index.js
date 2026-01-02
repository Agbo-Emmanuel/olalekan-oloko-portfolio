// agbo.js

// Array of projects
const projects = [
  {
    name: "Resume Analyzer",
    description:
      "An AI powered resume analyzer that evaluates resumes and provides feedback to help users improve their job applications.",
    image: "./images/resume_analyzer_image.png",
    github: "https://github.com/Agbo-Emmanuel/resume-checker",
    live: "https://resume-checker-sable.vercel.app/",
  },
  {
    name: "Amazing Health Care Clinic",
    description:
      "A responsive healthcare platform built with React and TailwindCSS, focusing on accessibility and user-friendly UI.",
    image: "./images/amazing_healt_care_clinic_image.png",
    github:
      "https://github.com/Agbo-Emmanuel/amazing-health-care-clinic-frontend",
    live: "https://www.amazinghealthcareclinic.org/",
  },
  {
    name: "Reborn Necessary Clothing",
    description:
      "A modern fashion e-commerce website for purchasing trendy clothing, designed with a clean UI, smooth shopping experience, and responsive layout.",
    image: "./images/reborn_necessary_clothing_image.png",
    github: "https://github.com/Agbo-Emmanuel/Reborn-Necessary-Clothing",
    live: "https://reborn-necessary-clothing-ruddy.vercel.app/",
  },
  {
    name: "NGC Business and Career Fair 2024",
    description:
      "A dynamic church event website for the NGC Business and Career Fair 2024, featuring program details, speaker highlights. built with a responsive and user-friendly design.",
    image: "./images/ngc_image.png",
    github: "https://github.com/Agbo-Emmanuel/ngc-bcf",
    live: "https://ngc-bcf.vercel.app/",
  },
  {
    name: "Emzy Classic Portfolio",
    description:
      "A sleek and modern portfolio website for an artist, showcasing creative works, projects, and achievements with a visually engaging and responsive design.",
    image: "./images/emzy_classic_image.png",
    github: "https://github.com/Agbo-Emmanuel/emezy-classic-arist",
    live: "https://emezy-classic-arist.vercel.app",
  },
  {
    name: "Compassionate Health Care Service",
    description:
      "A responsive hospital website offering healthcare service information with a clean, user-friendly design.",
    image: "./images/compassionate_health_care_service_image.png",
    github:
      "https://github.com/Agbo-Emmanuel/compassionate-health-care-service",
    live: "https://compassionate-health-care-service.vercel.app/",
  },
];

// Function to render projects
function renderProjects() {
  const container = document.getElementById("projects-grid");

  container.innerHTML = projects
    .map(
      (project) => `
      <article class="border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition">
        <div class="aspect-w-16 aspect-h-9 bg-gray-100 flex items-center justify-center">
          ${
            project.image
              ? `<img src="${project.image}" alt="${project.name}" class="w-full h-[300px] object-cover" />`
              : `<div class="w-full h-full flex items-center justify-center text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <rect x="3" y="3" width="18" height="14" rx="2" ry="2" />
                    <path d="M7 21h10" />
                  </svg>
                 </div>`
          }
        </div>

        <div class="p-4">
          <h3 class="font-semibold">${project.name}</h3>
          <p class="mt-2 text-sm text-gray-600">${project.description}</p>

          <div class="mt-4 flex items-center gap-3">
            <a href="${
              project.github
            }" target="_blank" class="text-sm px-3 py-2 border rounded-md hover:bg-gray-50">GitHub</a>
            <a href="${
              project.live
            }" target="_blank" class="text-sm px-3 py-2 bg-gray-900 text-white rounded-md hover:opacity-95">Live Demo</a>
          </div>
        </div>
      </article>
    `
    )
    .join("");
}

// Run on page load
document.addEventListener("DOMContentLoaded", renderProjects);
