document.addEventListener("DOMContentLoaded", () => {
  const links = [
    { url: "https://ilias3.uni-stuttgart.de/go/crs/3800526", icon: "icons/cv.svg", label: "Computer Vision" },
    { url: "https://ilias3.uni-stuttgart.de/go/crs/3797769", icon: "icons/mc.svg", label: "Modern Cryptography" },
    { url: "https://ilias3.uni-stuttgart.de/go/crs/3426251", icon: "icons/base.svg", label: "Machine Perception" },
    { url: "https://ilias3.uni-stuttgart.de/go/crs/3622578", icon: "icons/base.svg", label: "Machine Computing" },
    { url: "https://ilias3.uni-stuttgart.de/go/crs/3803063", icon: "icons/base.svg", label: "Mobile Robotics" },
    { url: "https://ilias3.uni-stuttgart.de/go/crs/3803065", icon: "icons/base.svg", label: "Mobile Robotics (Exercise)" },
    { url: "https://ilias3.uni-stuttgart.de/go/crs/3799079", icon: "icons/base.svg", label: "Real-time Concepts" },
    { url: "https://ilias3.uni-stuttgart.de/go/crs/3799086", icon: "icons/base.svg", label: "Real-time Concepts (Exercise)" }
  ];

  const linksContainer = document.getElementById("links");

  links.forEach(link => {
    const linkContainer = document.createElement("div");
    linkContainer.classList.add("link-container");

    const icon = document.createElement("img");
    icon.src = link.icon;
    icon.classList.add("link-icon");

    const linkElement = document.createElement("a");
    linkElement.href = link.url;
    linkElement.target = "_blank";
    linkElement.classList.add("link-text");
    linkElement.textContent = link.label;

    linkContainer.appendChild(icon);
    linkContainer.appendChild(linkElement);
    linksContainer.appendChild(linkContainer);
  });
});
