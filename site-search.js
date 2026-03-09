(() => {
    const SECTION_ID_ASSIGNMENTS = [
        { selector: ".about-us", id: "home-hero" },
        { selector: ".business", id: "home-business" },
        { selector: ".nation", id: "home-network" },
        { selector: ".why", id: "home-why-choose" },
        { selector: ".count", id: "home-count" },
        { selector: ".about-intro", id: "about-intro" },
        { selector: ".about-who", id: "about-who" },
        { selector: ".about-social", id: "about-social" },
        { selector: ".about-partners", id: "about-partners" },
        { selector: ".about-stories", id: "about-stories" },
        { selector: ".about-related", id: "about-related" },
        { selector: ".about-faq", id: "about-faq" },
        { selector: ".blog-feature-card", id: "blog-featured" },
        { selector: ".blog-articles", id: "blog-articles" },
        { selector: ".blog-overview-cta", id: "blog-overview-cta" },
        { selector: ".advantage-main", id: "advantage-main" },
        { selector: ".advantage-grid", id: "advantage-services" },
        { selector: ".advantage-extra", id: "advantage-disclaimer" },
        { selector: ".touch-grid", id: "contact-grid" },
        { selector: ".touch-card--info", id: "contact-info" },
        { selector: ".touch-card--form", id: "contact-form" },
        { selector: ".touch-card--map", id: "contact-location" },
        { selector: ".touch-card--social", id: "contact-social" },
        { selector: ".atm-network", id: "atm-network" },
        { selector: ".installations", id: "atm-installations" },
        { selector: ".atm-directory", id: "atm-directory" },
        { selector: ".wla-section", id: "wla" },
        { selector: ".products-care360", id: "atm-care-360" },
        { selector: ".products-visibility", id: "visibility-boost" },
        { selector: ".products-ready", id: "products-ready" },
        { selector: ".franchise-why", id: "franchise-why" },
        { selector: ".partners", id: "franchise-partners" },
        { selector: ".franchise-models", id: "franchise-models" },
        { selector: ".faq-section", id: "franchise-faq" },
        { selector: ".join-hero", id: "join-opportunities" },
        { selector: ".apply-hero", id: "apply-hero" },
        { selector: ".apply-openings", id: "apply-openings" },
        { selector: ".apply-help", id: "apply-help" },
        { selector: ".apply-form-section", id: "apply-form" },
        { selector: ".sahasra-form-section", id: "sahasra-application" },
        { selector: ".policy-hero", id: "policy-hero" },
        { selector: ".policy-content", id: "policy-content" },
        { selector: ".terms-hero", id: "terms-hero" },
        { selector: ".terms-content", id: "terms-content" },
        { selector: ".refund-hero", id: "refund-hero" },
        { selector: ".refund-content", id: "refund-content" },
        { selector: ".accessibility-hero", id: "accessibility-hero" },
        { selector: ".accessibility-content", id: "accessibility-content" }
    ];

    const SEARCH_ITEMS = [
        { title: "Home", page: "Page", url: "index.html", keywords: ["landing", "main", "start"] },
        { title: "About Us", page: "Page", url: "about.html", keywords: ["company", "who we are", "story"] },
        { title: "Blog", page: "Page", url: "blog.html", keywords: ["articles", "guides", "learning"] },
        { title: "PixelPay Advantage", page: "Page", url: "advantage.html", keywords: ["services", "support", "care"] },
        { title: "Contact Us", page: "Page", url: "contact.html", keywords: ["phone", "email", "location"] },
        { title: "Our ATMs", page: "Page", url: "atm.html", keywords: ["network", "locations", "directory"] },
        { title: "Our Products", page: "Page", url: "products.html", keywords: ["care360", "visibility boost", "wla"] },
        { title: "Become Franchise", page: "Page", url: "franchise.html", keywords: ["franchise", "models", "roi"] },
        { title: "Join Us", page: "Page", url: "join.html", keywords: ["influencer", "employee", "career"] },
        { title: "Job Application", page: "Page", url: "apply.html", keywords: ["jobs", "openings", "apply"] },
        { title: "Influencer Program", page: "Page", url: "sahasra.html", keywords: ["sahasra", "creator", "network"] },
        { title: "Privacy Policy", page: "Page", url: "policy.html", keywords: ["policy", "privacy", "legal"] },
        { title: "Terms & Conditions", page: "Page", url: "terms.html", keywords: ["terms", "conditions", "legal"] },
        { title: "Refund Policy", page: "Page", url: "refund.html", keywords: ["refund", "policy", "legal"] },
        { title: "Accessibility Statement", page: "Page", url: "accessibility.html", keywords: ["accessibility", "a11y", "support"] },

        { title: "Why ATM Business", page: "Home Section", url: "index.html#home-business", keywords: ["roi", "opportunity", "cash"] },
        { title: "Network Statistics", page: "Home Section", url: "index.html#home-network", keywords: ["uptime", "active franchises", "support"] },
        { title: "Why Choose Us", page: "Home Section", url: "index.html#home-why-choose", keywords: ["benefits", "trust", "partners"] },

        { title: "About Intro", page: "About Section", url: "about.html#about-intro", keywords: ["trusted partner", "atm franchise india"] },
        { title: "Who We Are", page: "About Section", url: "about.html#about-who", keywords: ["industry expertise", "experience"] },
        { title: "Group Companies", page: "About Section", url: "about.html#group", keywords: ["pixellpay", "evosyz"] },
        { title: "WLA Partners", page: "About Section", url: "about.html#about-partners", keywords: ["trusted wla", "operators"] },
        { title: "Success Stories", page: "About Section", url: "about.html#about-stories", keywords: ["testimonials", "results"] },
        { title: "FAQ (About)", page: "About Section", url: "about.html#about-faq", keywords: ["questions", "answers"] },

        { title: "Featured Blog Article", page: "Blog Section", url: "blog.html#blog-featured", keywords: ["profit calculator", "featured"] },
        { title: "All Blog Cards", page: "Blog Section", url: "blog.html#blog-articles", keywords: ["comparison", "stories", "guides"] },
        { title: "Blog Detail View", page: "Blog Section", url: "blog.html#blog-detail-comparison", keywords: ["comparison guide", "bank atm vs wla"] },

        { title: "Advantage Services", page: "Advantage Section", url: "advantage.html#advantage-services", keywords: ["gmb", "payout", "dispute", "support"] },
        { title: "Important Disclaimer", page: "Advantage Section", url: "advantage.html#advantage-disclaimer", keywords: ["legal", "note", "responsibility"] },

        { title: "Contact Information", page: "Contact Section", url: "contact.html#contact-info", keywords: ["call", "email", "visit"] },
        { title: "Send a Message", page: "Contact Section", url: "contact.html#contact-form", keywords: ["form", "message", "inquiry"] },
        { title: "Office Location", page: "Contact Section", url: "contact.html#contact-location", keywords: ["map", "corporate office", "kochi"] },
        { title: "Connect With Us", page: "Contact Section", url: "contact.html#contact-social", keywords: ["social", "instagram", "linkedin"] },

        { title: "ATM Distribution Map", page: "ATM Section", url: "atm.html#atm-network", keywords: ["network", "states", "map"] },
        { title: "ATM Installations", page: "ATM Section", url: "atm.html#atm-installations", keywords: ["gallery", "photos"] },
        { title: "ATM Locations Directory", page: "ATM Section", url: "atm.html#atm-directory", keywords: ["directory", "search", "pin code"] },

        { title: "WLA Partnership", page: "Products Section", url: "products.html#wla", keywords: ["wla", "partners", "atm"] },
        { title: "ATM Care360", page: "Products Section", url: "products.html#atm-care-360", keywords: ["care360", "premium support"] },
        { title: "Visibility Boost", page: "Products Section", url: "products.html#visibility-boost", keywords: ["seo", "maps", "discoverability"] },
        { title: "Products Contact Cards", page: "Products Section", url: "products.html#products-ready", keywords: ["call us", "website", "email"] },

        { title: "Why Become Franchise", page: "Franchise Section", url: "franchise.html#franchise-why", keywords: ["why choose", "support"] },
        { title: "WLA Partners (Franchise)", page: "Franchise Section", url: "franchise.html#franchise-partners", keywords: ["rbi licensed", "partners"] },
        { title: "Franchise Models", page: "Franchise Section", url: "franchise.html#franchise-models", keywords: ["plans", "investment", "returns"] },
        { title: "Franchise FAQ", page: "Franchise Section", url: "franchise.html#franchise-faq", keywords: ["questions", "support"] },

        { title: "Join Opportunities", page: "Join Section", url: "join.html#join-opportunities", keywords: ["influencer", "employee", "join"] },
        { title: "Job Openings", page: "Apply Section", url: "apply.html#apply-openings", keywords: ["roles", "vacancies"] },
        { title: "Application Form", page: "Apply Section", url: "apply.html#apply-form", keywords: ["submit", "resume", "apply"] },
        { title: "Sahasra Application", page: "Influencer Section", url: "sahasra.html#sahasra-application", keywords: ["registration", "form"] }
    ];

    const MAX_RESULTS = 10;
    const POPULAR_SEARCHES = [
        { title: "ATM Franchise", query: "ATM Franchise" },
        { title: "Passive Income", query: "Passive Income" },
        { title: "Sales Agent", query: "Sales Agent" },
        { title: "Start ATM", query: "Start ATM" },
        { title: "Investment", query: "Investment" }
    ];
    const PAGE_CHIP_BY_FILE = {
        "index.html": "Home",
        "about.html": "About",
        "blog.html": "Blog",
        "advantage.html": "Advantage",
        "contact.html": "Contact",
        "atm.html": "ATMs",
        "products.html": "Products",
        "franchise.html": "Franchise",
        "join.html": "Join",
        "apply.html": "Jobs",
        "sahasra.html": "Influencer",
        "policy.html": "Policy",
        "terms.html": "Terms",
        "refund.html": "Refund",
        "accessibility.html": "Access"
    };
    const PAGE_SNIPPETS = {
        "index.html": "Start your ATM franchise business with minimal investment and full support across India.",
        "about.html": "Learn about our team, expertise, and trusted business partnerships across India.",
        "blog.html": "Read practical guides, comparisons, and real success stories for ATM franchise growth.",
        "advantage.html": "Explore complete service support covering setup, compliance, payouts, and growth.",
        "contact.html": "Reach our team through phone, email, or message form for direct assistance.",
        "atm.html": "Discover ATM network coverage, installations, and location directories across India.",
        "products.html": "Compare WLA partnerships, Care360 services, and visibility solutions in one place.",
        "franchise.html": "Understand franchise models, partner benefits, and expected returns with full guidance.",
        "join.html": "View available opportunities to join as an influencer, employee, or partner.",
        "apply.html": "Browse current openings and submit your application through the job form.",
        "sahasra.html": "Apply for the influencer program and grow with our franchise partner network."
    };
    let searchRoot;
    let searchInput;
    let searchResults;
    let searchHint;
    let closeBtn;
    let clearBtn;
    let currentResults = [];
    let activeIndex = -1;

    const normalize = (value) =>
        (value || "")
            .toString()
            .trim()
            .toLowerCase()
            .replace(/\s+/g, " ");

    const getCurrentFile = () => {
        const path = window.location.pathname.split("/").pop();
        return path && path.length ? path : "index.html";
    };

    const ensureSectionIds = () => {
        SECTION_ID_ASSIGNMENTS.forEach(({ selector, id }) => {
            const node = document.querySelector(selector);
            if (node && !node.id) {
                node.id = id;
            }
        });
    };

    const scrollToCurrentHashTarget = () => {
        const hash = window.location.hash;
        if (!hash || hash.length < 2) {
            return;
        }
        const target = document.getElementById(hash.slice(1));
        if (target) {
            setTimeout(() => {
                target.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 30);
        }
    };

    const scoreItem = (item, terms) => {
        const title = normalize(item.title);
        const page = normalize(item.page);
        const url = normalize(item.url);
        const keywords = (item.keywords || []).map(normalize);
        let score = 0;

        terms.forEach((term) => {
            if (!term) {
                return;
            }
            if (title.startsWith(term)) {
                score += 85;
            } else if (title.includes(term)) {
                score += 60;
            }
            if (page.includes(term)) {
                score += 28;
            }
            if (url.includes(term)) {
                score += 12;
            }
            keywords.forEach((keyword) => {
                if (keyword.includes(term)) {
                    score += 18;
                }
            });
        });

        if (item.url.endsWith(getCurrentFile()) || item.url.includes(`${getCurrentFile()}#`)) {
            score += 6;
        }

        return score;
    };

    const getResults = (query) => {
        const normalized = normalize(query);
        if (!normalized) {
            return SEARCH_ITEMS.slice(0, MAX_RESULTS);
        }
        const terms = normalized.split(" ").filter(Boolean);
        return SEARCH_ITEMS.map((item) => ({ item, score: scoreItem(item, terms) }))
            .filter((entry) => entry.score > 0)
            .sort((a, b) => b.score - a.score || a.item.title.localeCompare(b.item.title))
            .slice(0, MAX_RESULTS)
            .map((entry) => entry.item);
    };

    const escapeHtml = (value) =>
        value.replace(/[&<>"']/g, (ch) => {
            const map = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
            return map[ch] || ch;
        });

    const getTargetFile = (url) => {
        const [rawPath] = (url || "").split("#");
        const file = (rawPath || "index.html").split("/").pop();
        return file && file.length ? file : "index.html";
    };

    const getResultChip = (item) => {
        if (normalize(item.page).includes("section")) {
            return "Section";
        }
        return PAGE_CHIP_BY_FILE[getTargetFile(item.url)] || "Page";
    };

    const getResultSnippet = (item) => {
        if (normalize(item.page).includes("section")) {
            if (item.keywords && item.keywords.length) {
                const focus = item.keywords.slice(0, 3).join(", ");
                return `Jump to this section for details on ${focus}.`;
            }
            return "Jump to this section to explore the topic in detail.";
        }
        const file = getTargetFile(item.url);
        return PAGE_SNIPPETS[file] || "Open this page to view complete details.";
    };

    const highlight = (text, query) => {
        const safeText = escapeHtml(text);
        const q = normalize(query);
        if (!q) {
            return safeText;
        }
        const idx = normalize(text).indexOf(q);
        if (idx < 0) {
            return safeText;
        }
        const start = safeText.slice(0, idx);
        const mid = safeText.slice(idx, idx + q.length);
        const end = safeText.slice(idx + q.length);
        return `${start}<mark>${mid}</mark>${end}`;
    };

    const buildItemMarkup = (item, query, index) => {
        const mode = item.mode || "result";
        const isPopular = mode === "popular";
        const classes = [
            "site-search__result",
            isPopular ? "site-search__result--popular" : "site-search__result--card",
            index === activeIndex ? "is-active" : ""
        ]
            .filter(Boolean)
            .join(" ");

        if (isPopular) {
            return `
                <li>
                    <button
                        type="button"
                        class="${classes}"
                        data-index="${index}"
                        data-mode="${mode}"
                    >
                        <span class="site-search__result-icon" aria-hidden="true">&#128269;</span>
                        <span class="site-search__result-text">${escapeHtml(item.title)}</span>
                    </button>
                </li>
            `;
        }

        const isSection = normalize(item.page).includes("section");
        const icon = isSection ? "&#35;" : "&#128196;";
        const iconClass = isSection ? "site-search__result-card-icon is-section" : "site-search__result-card-icon";
        const chip = escapeHtml(getResultChip(item));
        const snippet = escapeHtml(getResultSnippet(item));

        return `
            <li>
                <button
                    type="button"
                    class="${classes}"
                    data-index="${index}"
                    data-mode="${mode}"
                >
                    <span class="${iconClass}" aria-hidden="true">${icon}</span>
                    <span class="site-search__result-card-copy">
                        <span class="site-search__result-title">${highlight(item.title, query)}</span>
                        <span class="site-search__result-desc">${snippet}</span>
                        <span class="site-search__result-meta">
                            <span class="site-search__result-chip">${chip}</span>
                        </span>
                    </span>
                    <span class="site-search__result-arrow" aria-hidden="true">&#8594;</span>
                </button>
            </li>
        `;
    };

    const navigateTo = (url) => {
        const current = getCurrentFile();
        const [rawPath, hashPart] = url.split("#");
        const targetFile = (rawPath || current).split("/").pop() || current;
        const samePage = targetFile === current;

        if (samePage && hashPart) {
            const target = document.getElementById(hashPart);
            if (target) {
                history.pushState(null, "", `#${hashPart}`);
                target.scrollIntoView({ behavior: "smooth", block: "start" });
                closeSearch();
                return;
            }
        }

        window.location.href = url;
    };

    const renderResults = (query) => {
        const normalizedQuery = normalize(query);
        const hasQuery = Boolean(normalizedQuery);

        searchRoot.classList.toggle("site-search--query", hasQuery);
        if (clearBtn) {
            clearBtn.hidden = !hasQuery;
        }

        if (!hasQuery) {
            searchHint.textContent = "Popular Searches";
            currentResults = POPULAR_SEARCHES.map((item) => ({ ...item, mode: "popular" }));
        } else {
            currentResults = getResults(query).map((item) => ({ ...item, mode: "result" }));
            searchHint.textContent = `Search Results (${currentResults.length})`;
        }

        activeIndex = currentResults.length ? 0 : -1;

        if (!currentResults.length) {
            searchResults.innerHTML = `
                <li class="site-search__empty">
                    <p>No matches found.</p>
                    <small>Try searching page names, section names, or products.</small>
                </li>
            `;
            return;
        }

        searchResults.innerHTML = currentResults
            .map((item, index) => buildItemMarkup(item, query, index))
            .join("");
    };

    const updateActiveResult = () => {
        const buttons = searchResults.querySelectorAll(".site-search__result");
        buttons.forEach((button, idx) => {
            button.classList.toggle("is-active", idx === activeIndex);
        });
    };

    const moveActive = (step) => {
        if (!currentResults.length) {
            return;
        }
        const total = currentResults.length;
        activeIndex = (activeIndex + step + total) % total;
        updateActiveResult();
    };

    const submitActive = () => {
        if (!currentResults.length) {
            return;
        }
        const entry = currentResults[Math.max(0, activeIndex)];
        if (!entry) {
            return;
        }
        if (entry.mode === "popular") {
            searchInput.value = entry.query || entry.title;
            renderResults(searchInput.value);
            searchInput.focus();
            return;
        }
        if (entry.url) {
            navigateTo(entry.url);
        }
    };

    const isTypingTarget = (target) => {
        if (!target) {
            return false;
        }
        if (target.isContentEditable) {
            return true;
        }
        const tag = target.tagName;
        return tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT";
    };

    const openSearch = () => {
        if (!searchRoot) {
            return;
        }
        document.querySelectorAll(".navbar.is-open").forEach((nav) => nav.classList.remove("is-open"));
        document.body.classList.remove("nav-open");
        searchRoot.hidden = false;
        searchRoot.classList.add("is-open");
        document.body.classList.add("site-search-open");
        searchInput.value = "";
        renderResults("");
        setTimeout(() => searchInput.focus(), 20);
    };

    const closeSearch = () => {
        if (!searchRoot) {
            return;
        }
        searchRoot.classList.remove("is-open");
        searchRoot.hidden = true;
        document.body.classList.remove("site-search-open");
    };

    const createSearchRoot = () => {
        if (document.querySelector(".site-search")) {
            return document.querySelector(".site-search");
        }
        const root = document.createElement("div");
        root.className = "site-search";
        root.hidden = true;
        root.innerHTML = `
            <div class="site-search__backdrop" data-close-search></div>
            <div class="site-search__panel" role="dialog" aria-modal="true" aria-labelledby="site-search-title">
                <div class="site-search__head">
                    <h2 id="site-search-title"><span class="site-search__head-icon" aria-hidden="true">&#128269;</span> Search ATM Franchise India</h2>
                    <button type="button" class="site-search__close" aria-label="Close search">&#10005;</button>
                </div>
                <label class="site-search__input-wrap">
                    <span class="site-search__icon" aria-hidden="true">&#128269;</span>
                    <span class="site-search__divider" aria-hidden="true"></span>
                    <input type="search" class="site-search__input" placeholder="Search for ATM franchise, WLA ATMs, agent program..." autocomplete="off" />
                    <button type="button" class="site-search__clear" aria-label="Clear search" hidden>&#10005;</button>
                </label>
                <p class="site-search__hint"></p>
                <ul class="site-search__results" aria-live="polite"></ul>
            </div>
        `;
        document.body.appendChild(root);
        return root;
    };

    const connectNavbarTrigger = () => {
        document.querySelectorAll(".navbar").forEach((nav) => {
            const list = nav.querySelector(".nav-list");
            if (!list) {
                return;
            }

            let legacyIcon = list.querySelector("img[alt='search']");
            const existingTrigger = list.querySelector(".site-search-trigger");

            if (existingTrigger) {
                existingTrigger.addEventListener("click", openSearch);
                return;
            }

            const trigger = document.createElement("button");
            trigger.type = "button";
            trigger.className = "site-search-trigger";
            trigger.setAttribute("aria-label", "Open site search");
            trigger.setAttribute("title", "Search");

            if (legacyIcon) {
                legacyIcon.alt = "Search";
                trigger.appendChild(legacyIcon);
            } else {
                trigger.innerHTML = '<span aria-hidden="true">&#128269;</span>';
            }

            list.appendChild(trigger);
            trigger.addEventListener("click", openSearch);
        });
    };

    const bindEvents = () => {
        searchInput.addEventListener("input", () => {
            renderResults(searchInput.value);
        });

        searchInput.addEventListener("keydown", (event) => {
            if (event.key === "ArrowDown") {
                event.preventDefault();
                moveActive(1);
            } else if (event.key === "ArrowUp") {
                event.preventDefault();
                moveActive(-1);
            } else if (event.key === "Enter") {
                event.preventDefault();
                submitActive();
            } else if (event.key === "Escape") {
                event.preventDefault();
                closeSearch();
            }
        });

        searchResults.addEventListener("click", (event) => {
            const button = event.target.closest(".site-search__result");
            if (!button) {
                return;
            }
            const index = Number(button.getAttribute("data-index"));
            const item = currentResults[index];
            if (!item) {
                return;
            }
            if (item.mode === "popular") {
                searchInput.value = item.query || item.title;
                renderResults(searchInput.value);
                searchInput.focus();
                return;
            }
            if (item.url) {
                navigateTo(item.url);
            }
        });

        searchResults.addEventListener("mousemove", (event) => {
            const button = event.target.closest(".site-search__result");
            if (!button) {
                return;
            }
            activeIndex = Number(button.getAttribute("data-index"));
            updateActiveResult();
        });

        closeBtn.addEventListener("click", closeSearch);
        clearBtn.addEventListener("click", () => {
            searchInput.value = "";
            renderResults("");
            searchInput.focus();
        });
        searchRoot.addEventListener("click", (event) => {
            if (event.target.matches("[data-close-search]")) {
                closeSearch();
            }
        });

        document.addEventListener("keydown", (event) => {
            const key = event.key.toLowerCase();
            const hasMeta = event.ctrlKey || event.metaKey;

            if (hasMeta && key === "k") {
                event.preventDefault();
                openSearch();
                return;
            }

            if (key === "/" && !isTypingTarget(event.target) && !searchRoot.classList.contains("is-open")) {
                event.preventDefault();
                openSearch();
                return;
            }

            if (key === "escape" && searchRoot.classList.contains("is-open")) {
                event.preventDefault();
                closeSearch();
            }
        });
    };

    const init = () => {
        ensureSectionIds();
        scrollToCurrentHashTarget();
        searchRoot = createSearchRoot();
        searchInput = searchRoot.querySelector(".site-search__input");
        searchResults = searchRoot.querySelector(".site-search__results");
        searchHint = searchRoot.querySelector(".site-search__hint");
        closeBtn = searchRoot.querySelector(".site-search__close");
        clearBtn = searchRoot.querySelector(".site-search__clear");

        connectNavbarTrigger();
        bindEvents();
    };

    document.addEventListener("DOMContentLoaded", init);
})();
