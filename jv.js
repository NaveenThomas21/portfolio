const headerButton = document.querySelector("#header-top");

headerButton.addEventListener("click", () => {
    const header = document.querySelector("#header-top")
    header.scrollIntoView({behavior:"smooth"})
})