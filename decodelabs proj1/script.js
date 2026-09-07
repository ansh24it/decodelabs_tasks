

const menuToggle =
    document.querySelector(".menu-toggle");

const navLinks =
    document.querySelector("#primary-menu");


menuToggle.addEventListener("click", () => {

    const isOpen =
        navLinks.classList.toggle("open");

    menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
    );

});




navLinks.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("open");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});




const filters =
    document.querySelectorAll(".filter");

const resources =
    document.querySelectorAll(".resource");


filters.forEach(filter => {

    filter.addEventListener("click", () => {

        const category =
            filter.dataset.filter;


        

        filters.forEach(item => {

            item.classList.remove("active");

        });


        

        filter.classList.add("active");



        resources.forEach(resource => {

            if (
                category === "all" ||
                resource.dataset.category === category
            ) {

                resource.hidden = false;

            } else {

                resource.hidden = true;

            }

        });

    });

});