// ====Top-navbar-start====
function updateDateTime() {
  const now = new Date();
  // Get Day, Month, and Year with Leading Zeros
  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const year = now.getFullYear();
  // Format Date (DD - MM - YYYY)
  const formattedDate = `${day} - ${month} - ${year}`;
  // Get Hours, Minutes, Seconds with Leading Zeros
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  // Small Space Between Time Units (Use Thin Space Character)
  const formattedTime = `${hours} : ${minutes} : ${seconds}`;
  // Update the HTML elements
  document.getElementById('date').innerHTML = formattedDate; // Fix innerHTM to innerHTML
  document.getElementById('time').innerHTML = formattedTime;
}
// Call the function initially
document.addEventListener("DOMContentLoaded", function () {
  updateDateTime();
  setInterval(updateDateTime, 1000);
});
// ===Top-navbar-end===
//===Side-menu-without-toggle-start===
function toggleSidebar() {
  let sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("active");
}
//===Side-menu-without-toggle-end===
//===Side-menu-with-toggle-start ==! include Side-menu-without-toggle js code also====
document.addEventListener("DOMContentLoaded", function () {
  let sidebarToggle = document.getElementById("sidebar-toggle");
  let sidebar = document.getElementById("sidebar");
  let anchors = document.querySelectorAll(".list-unstyled li a");
  let bottomAnchors = document.querySelectorAll(".bottom-a");
  let dropdownArrow = document.querySelector(".dropdown-arrow");
  let expendnav = document.querySelector(".expendnav");
  sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("toggle-width");
    // Toggle sidebar-text-center class for all anchors
    anchors.forEach(anchor => {
      anchor.classList.toggle("sidebar-text-center");
    });
    bottomAnchors.forEach(anchorbottom => {
      anchorbottom.classList.toggle("sidebar-text-center");
    });
    // Correctly toggle ml-auto class for dropdownArrow
    if (dropdownArrow) {
      dropdownArrow.classList.toggle("ml-auto");
    }
    // Move the icon toggle inside the event listener
    if (sidebar.classList.contains("toggle-width")) {
      expendnav.classList.remove("fa-angles-left");
      expendnav.classList.add("fa-angles-right"); // Change to right icon
    } else {
      expendnav.classList.remove("fa-angles-right");
      expendnav.classList.add("fa-angles-left"); // Change back to left icon
    }
  });
});
//=====Side-menu-with-toggle-end====
//==full-width-table-custom-start
function changeTab(selectedTab) {
  document.querySelectorAll(".tab").forEach(tab => tab.classList.remove("active"));
  selectedTab.classList.add("active");
}
//==full-width-table-custom-start
//===full-width-table-pagination-start==
document.addEventListener("DOMContentLoaded", function () {
  const tableBody = document.getElementById("table-body");
  const pagination = document.querySelector(".pagination");
  const rowsPerPage = 7; // Adjust as needed
  const rows = tableBody.getElementsByTagName("tr");
  const totalPages = Math.ceil(rows.length / rowsPerPage);
  function displayPage(page) {
    for (let i = 0; i < rows.length; i++) {
      rows[i].style.display = i >= (page - 1) * rowsPerPage && i < page * rowsPerPage ? "" : "none";
    }
  }
  function generatePagination() {
    pagination.innerHTML = `
          <li class="page-item disabled" id="prev-page">
              <a class="page-link pill" href="#" aria-label="Previous">&laquo;</a>
          </li>`;
    for (let i = 1; i <= totalPages; i++) {
      pagination.innerHTML += `<li class="page-item"><a class="page-link pill" href="#">${i}</a></li>`;
    }
    pagination.innerHTML += `
          <li class="page-item" id="next-page">
              <a class="page-link pill" href="#" aria-label="Next">&raquo;</a>
          </li>`;
    addPaginationEventListeners();
  }
  function addPaginationEventListeners() {
    const pageLinks = document.querySelectorAll(".pagination .page-link");
    let currentPage = 1;
    pageLinks.forEach((link, index) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        if (index === 0 && currentPage > 1) currentPage--;
        else if (index === pageLinks.length - 1 && currentPage < totalPages) currentPage++;
        else if (index > 0 && index < pageLinks.length - 1) currentPage = index;
        displayPage(currentPage);
        updateActivePage(currentPage);
      });
    });
    function updateActivePage(page) {
      document.querySelectorAll(".pagination .page-item").forEach((item, index) => {
        item.classList.remove("active");
        if (index === page) item.classList.add("active");
      });
      document.getElementById("prev-page").classList.toggle("disabled", page === 1);
      document.getElementById("next-page").classList.toggle("disabled", page === totalPages);
    }
    displayPage(1);
    updateActivePage(1);
  }
  generatePagination();
});
//===full-width-table-pagination-end===
