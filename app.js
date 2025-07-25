const jobs = [
  { title: "Frontend Developer", location: "Delhi", role: "Developer", date: "2025-07-20" },
  { title: "Data Analyst", location: "Bangalore", role: "Analyst", date: "2025-07-15" },
  { title: "UI Developer Intern", location: "Hyderabad", role: "Developer", date: "2025-07-22" },
  { title: "Product Manager", location: "Delhi", role: "Manager", date: "2025-07-18" },
];

function displayJobs(list) {
  const jobList = document.getElementById("jobList");
  jobList.innerHTML = "";

  list.forEach(job => {
    const card = `
      <div class="col">
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h5 class="card-title">${job.title}</h5>
            <p class="card-text">Location: ${job.location}</p>
            <p class="card-text">Role: ${job.role}</p>
            <p class="card-text text-muted">Posted on: ${job.date}</p>
          </div>
        </div>
      </div>`;
    jobList.innerHTML += card;
  });
}

function filterJobs() {
  const location = document.getElementById("filterLocation").value;
  const role = document.getElementById("filterRole").value;

  let filtered = [...jobs];

  if (location) filtered = filtered.filter(job => job.location === location);
  if (role) filtered = filtered.filter(job => job.role === role);

  displayJobs(filtered);
}

function sortJobs() {
  const sorted = [...jobs].sort((a, b) => new Date(b.date) - new Date(a.date));
  displayJobs(sorted);
}

// Initial load
displayJobs(jobs);

// Add event listeners for filters
document.getElementById("filterLocation").addEventListener("change", filterJobs);
document.getElementById("filterRole").addEventListener("change", filterJobs);
