import Landing from "./views/landing.js";
import Demo from "./views/demo.js";
import Play from "./views/play.js";
import Mint from "./views/mint.js";
import CheckWL from "./views/checkWL.js";
import Details from "./views/details.js";
import HowToPlay from "./views/instructions.js";
import Faq from "./views/faq.js";
import Roadmap from "./views/roadmap.js";
import Team from "./views/team.js";
import Rewards from "./views/rewards.js";
import Attributes from "./views/attributes.js";
import About from "./views/about.js"

const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
};

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        { path: "/", view: Landing },
        { path: "/home", view: Landing },
        { path: "/demo", view: Demo },
        { path: "/play", view: Play },
        { path: "/about", view: About },
        { path: "/roadmap", view: Roadmap },
        { path: "/team", view: Team },
        { path: "/wordlist", view: CheckWL },
        { path: "/whitelist", view: CheckWL },
        { path: "/mint", view: Mint },
        { path: "/details", view: Details },
        { path: "/instructions", view: HowToPlay },
        { path: "/faq", view: Faq },
        { path: "/rewards", view: Rewards },
        { path: "/attributes", view: Attributes }
    ];

    // Test each route for potential match
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path))
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

    if (!match) {
        match = {
            route: routes[0],
            result: [location.pathname]
        };
    }

    const view = new match.route.view(getParams(match));

    document.querySelector("#app").innerHTML = await view.getHtml();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });

    router();
});
