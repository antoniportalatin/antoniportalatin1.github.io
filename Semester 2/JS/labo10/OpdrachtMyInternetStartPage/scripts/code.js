let historyArray = [];

const setup = () => {
    let goButton = document.getElementById("goButton");
    goButton.addEventListener("click", go);

    // Laad bestaande history uit localStorage
    let stored = localStorage.getItem("history");
    if (stored) {
        historyArray = JSON.parse(stored);
        for (let item of historyArray) {
            addCard(item.title, item.text, item.url, getPrefixFromSite(item.title));
        }
    }
};

const go = () => {
    let input = document.getElementById("cmndoInput");
    let value = input.value.trim();

    if (!value.startsWith("/")) {
        alert("Commando moet beginnen met een '/'");
        return;
    }

    let spaceIndex = value.indexOf(" ");
    if (spaceIndex === -1) {
        alert("Formaat moet zijn: / + [g, i, x, y] + zoekopdracht");
        return;
    }

    let prefix = value.substring(0, spaceIndex);
    let zoekopdracht = value.substring(spaceIndex + 1);
    let site = "";
    let baseUrl = "";

    if (prefix === "/g") {
        site = "Google";
        baseUrl = "https://www.google.com/search?q=";
    } else if (prefix === "/y") {
        site = "Youtube";
        baseUrl = "https://www.youtube.com/results?search_query=";
    } else if (prefix === "/x") {
        site = "X";
        baseUrl = "https://x.com/search?q=";
    } else if (prefix === "/i") {
        site = "Instagram";
        baseUrl = "https://www.instagram.com/explore/tags/";
    } else {
        alert("Onbekend commando: gebruik /g, /y, /x of /i");
        return;
    }

    let finalUrl = baseUrl + encodeURIComponent(zoekopdracht);
    window.open(finalUrl, "_blank");

    // ➕ Voeg toe aan array & sla op
    let h = {
        title: site,
        text: zoekopdracht,
        url: finalUrl
    };
    historyArray.push(h);
    localStorage.setItem("history", JSON.stringify(historyArray));

    addCard(site, zoekopdracht, finalUrl, prefix);
    document.getElementById("cmndoInput").value = "";
};

const addCard = (site, zoekopdracht, url, prefix) => {
    let history = document.getElementById("history");

    let col = document.createElement("div");
    col.className = "col";

    let card = document.createElement("div");
    card.className = "card h-100 text-white";

    // kleur achtergrond
    if (prefix === "/y") {
        card.style.backgroundColor = "#ff0000";
    } else if (prefix === "/x") {
        card.style.backgroundColor = "#000000";
    } else if (prefix === "/i") {
        card.style.backgroundColor = "#c32aa3";
    } else if (prefix === "/g") {
        card.style.backgroundColor = "#4285f4";
    }

    let cardBody = document.createElement("div");
    cardBody.className = "card-body";

    let title = document.createElement("h5");
    title.className = "card-title";
    title.textContent = site;

    let text = document.createElement("p");
    text.className = "card-text";
    text.textContent = zoekopdracht;

    let link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.textContent = "Go!";
    link.className = "btn";

    // kleur knop
    if (prefix === "/g") {
        link.style.backgroundColor = "#ea4335";
        link.style.color = "#4285f4";
    } else if (prefix === "/y") {
        link.style.backgroundColor = "#282828";
        link.style.color = "#ff0000";
    } else if (prefix === "/x") {
        link.style.backgroundColor = "#23272a";
        link.style.color = "#ffffff";
    } else if (prefix === "/i") {
        link.style.backgroundColor = "#f46f30";
        link.style.color = "#c32aa3";
    }

    cardBody.appendChild(title);
    cardBody.appendChild(text);
    cardBody.appendChild(link);
    card.appendChild(cardBody);
    col.appendChild(card);
    history.appendChild(col);
};

const getPrefixFromSite = (site) => {
    switch (site) {
        case "Google": return "/g";
        case "Youtube": return "/y";
        case "X": return "/x";
        case "Instagram": return "/i";
        default: return "";
    }
};

window.addEventListener("load", setup);
