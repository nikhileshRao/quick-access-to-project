document.addEventListener("DOMContentLoaded", () => {
  const projectNameEl = document.getElementById("projectName");
  const envContainer = document.getElementById("env");
  const docsContainer = document.getElementById("docs");

  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      const project = data.result[0];

      projectNameEl.textContent = project.project_name;

      // Environments
      project.environments.forEach((env) => {
        const a = document.createElement("a");
        a.className = "btn";
        a.textContent = env.environment_name;
        a.href = env.environment_link;
        a.target = "_blank";
        envContainer.appendChild(a);
      });

      // Docs
      project.docs.forEach((doc) => {
        const a = document.createElement("a");
        a.className = "btn";
        a.textContent = doc.doc_name;
        a.href = doc.doc_link;
        a.target = "_blank";
        docsContainer.appendChild(a);
      });
    });

  // Tabs logic
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      document
        .querySelectorAll(".tab")
        .forEach((t) => t.classList.remove("active"));

      document
        .querySelectorAll(".content")
        .forEach((c) => c.classList.remove("active"));

      tab.classList.add("active");
      document.getElementById(tab.dataset.tab).classList.add("active");
    });
  });
});
