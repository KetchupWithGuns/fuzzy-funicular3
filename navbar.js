(() => {
    const MOBILE_BREAKPOINT = 980;

    const setNavbarOpenState = (nav, isOpen) => {
        nav.classList.toggle("is-open", isOpen);
        const toggle = nav.querySelector(".navbar-toggle");
        if (toggle) {
            toggle.setAttribute("aria-expanded", String(isOpen));
        }
        if (window.innerWidth <= MOBILE_BREAKPOINT) {
            document.body.classList.toggle("nav-open", isOpen);
        } else {
            document.body.classList.remove("nav-open");
        }
    };

    const closeNavbar = (nav) => {
        setNavbarOpenState(nav, false);
        nav.querySelectorAll(".nav-about").forEach((item) => item.classList.remove("is-sub-open"));
    };

    const ensureToggleButton = (nav) => {
        let toggle = nav.querySelector(".navbar-toggle");
        if (toggle) {
            return toggle;
        }

        toggle = document.createElement("button");
        toggle.type = "button";
        toggle.className = "navbar-toggle";
        toggle.setAttribute("aria-label", "Toggle menu");
        toggle.setAttribute("aria-expanded", "false");
        toggle.innerHTML = '<span class="navbar-toggle__open" aria-hidden="true">&#9776;</span><span class="navbar-toggle__close" aria-hidden="true">&#10005;</span>';
        nav.appendChild(toggle);
        return toggle;
    };

    const initNavbar = (nav) => {
        const navList = nav.querySelector(".nav-list");
        if (!navList) {
            return;
        }

        const toggle = ensureToggleButton(nav);

        toggle.addEventListener("click", () => {
            const willOpen = !nav.classList.contains("is-open");
            setNavbarOpenState(nav, willOpen);
        });

        const aboutItem = nav.querySelector(".nav-about");
        const aboutLink = aboutItem ? Array.from(aboutItem.children).find((child) => child.tagName === "A") : null;
        if (aboutItem && aboutLink) {
            aboutLink.addEventListener("click", (event) => {
                if (window.innerWidth > MOBILE_BREAKPOINT) {
                    return;
                }

                // Mobile behavior matches a disclosure menu.
                event.preventDefault();
                aboutItem.classList.toggle("is-sub-open");
            });
        }

        navList.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                const isAboutTopLink = aboutLink && link === aboutLink;
                if (window.innerWidth <= MOBILE_BREAKPOINT && !isAboutTopLink) {
                    closeNavbar(nav);
                }
            });
        });

        const joinButton = nav.querySelector(".join");
        if (joinButton) {
            joinButton.addEventListener("click", () => {
                if (window.innerWidth <= MOBILE_BREAKPOINT) {
                    closeNavbar(nav);
                }
            });
        }

        document.addEventListener("click", (event) => {
            if (!nav.contains(event.target)) {
                closeNavbar(nav);
            }
        });

        window.addEventListener("resize", () => {
            if (window.innerWidth > MOBILE_BREAKPOINT) {
                closeNavbar(nav);
            }
        });

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                closeNavbar(nav);
            }
        });
    };

    document.addEventListener("DOMContentLoaded", () => {
        document.querySelectorAll(".navbar").forEach(initNavbar);
    });
})();
