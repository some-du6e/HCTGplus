function addGoals() {
    if (location.pathname !== "/me") { return }
    if (location.hash !== "#goals") { return }
    console.log("HCTG+: addGoals running")


    // change title
    let title = document.getElementsByClassName("text-[48px] font-bold tracking-[-0.06em] text-nowrap text-white smoothing-white")[0]
    if (!title) {
        console.warn("HCTG: could not find goals title div! prob not on the goals page ID: 9s8f7g")
        return
    }
    title.textContent = "Goals"
   
}

window.addEventListener('pageChange', function() {
    setTimeout(addGoals, 200)
});

addGoals()
