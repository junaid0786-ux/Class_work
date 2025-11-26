function submitForm() {
  const name = document.getElementById("name").value;
  const contact = document.getElementById("contact").value;
  const email = document.getElementById("email").value;
  const qualification = document.getElementById("Qualification").value;
  const branch = document.getElementById("branch").value;
  const schoolname = document.getElementById("schoolname").value;
  const year = document.getElementById("year").value;
  const information = document.getElementById("Information").value;
  const executive = document.getElementById("ExecutiveName").value;

  const selectedCourses = [];
  document.querySelectorAll("input[name='course']:checked").forEach((box) => {
    const label = box.parentElement.querySelector("label").innerText;
    selectedCourses.push(label);
  });

  console.log("Name:", name);
  console.log("Contact:", contact);
  console.log("Email:", email);
  console.log("Qualification:", qualification);
  console.log("College/School:", schoolname);
  console.log("Year:", year);
  console.log("Branch:", branch);
  console.log("Selected Courses:", selectedCourses);
  console.log("Source of Information:", information);
  console.log("Executive Name:", executive);

  document.getElementById("name").value = "";
  document.getElementById("contact").value = "";
  document.getElementById("email").value = "";
  document.getElementById("Qualification").value = "";
  document.getElementById("branch").value = "";
  document.getElementById("schoolname").value = "";
  document.getElementById("year").selectedIndex = 0;
  document.getElementById("Information").selectedIndex = 0;
  document.getElementById("ExecutiveName").selectedIndex = 0;

  document.querySelectorAll("input[name='course']").forEach((box) => {
    box.checked = false;
  });
}

const SCROLL_THRESHOLD = 400;
const header = document.getElementById("mainHeader");

if (header) {
  function handleScroll() {
    const scrollPosition = window.scrollY;

    if (scrollPosition > SCROLL_THRESHOLD) {
      if (!header.classList.contains("header-visible")) {
        header.classList.add("header-visible");
      }
    } else {
      if (header.classList.contains("header-visible")) {
        header.classList.remove("header-visible");
      }
    }
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll();
}
