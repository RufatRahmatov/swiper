



const container = document.querySelector(".container");

container.addEventListener("click", (event) => {
    const clickedPanel = event.target.closest(".panel");
    if (!clickedPanel) return;

    document.querySelectorAll(".panel").forEach((panel) => {
        panel.classList.remove("active");
    });

    clickedPanel.classList.add("active");
});

if (window.innerWidth <= 480) {
    document.querySelectorAll('.panel:nth-of-type(4), .panel:nth-of-type(5)').forEach((panel) => {
        panel.style.display = "none";
    });
}
