document.querySelectorAll("nav a").forEach(function(link) {
    link.addEventListener("click", function() {
        document.querySelectorAll("nav a").forEach(function(item) {
            item.classList.remove("active");
        });

        this.classList.add("active");
    });
});

window.addEventListener("scroll", function() {
    const sections = document.querySelectorAll("section");
    const links = document.querySelectorAll("nav a");

    sections.forEach(function(section) {
        const top = window.scrollY;
        const offset = section.offsetTop - 150;
        const height = section.offsetHeight;

        if (top >= offset && top < offset + height) {
            links.forEach(function(link) {
                link.classList.remove("active");

                if (link.getAttribute("href") === "#" + section.id) {
                    link.classList.add("active");
                }
            });
        }
    });
});