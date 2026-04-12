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

    let oldcontent = document.getElementsByClassName("grid grid-cols-1 md:grid-cols-2")[0]
    oldcontent.remove()
    
    let container = document.getElementsByClassName("relative -ml-2 h-screen w-full flex-1 overflow-y-scroll px-6 py-10")[0]


    let progress = 44 // TODO: dont make it a placeholder

    let alltimeprogress = document.createElement("div")
    alltimeprogress.innerHTML = `
<div class="flex w-full flex-col">
   <div class="relative flex items-center">
      <div class="relative z-10 h-16 w-16 shrink-0 rounded-full bg-[#fecb0d]"></div>
      <div class="relative -mx-3 h-5 flex-1 overflow-hidden rounded-full bg-black">
         <div class="absolute inset-y-0 left-0 bg-[#fecb0d]" style="width: ${progress}%;"></div>
      </div>
      <div class="relative z-10 h-16 w-16 shrink-0 rounded-full bg-black"></div>
   </div>
   <div class="mt-1 flex items-start justify-between px-1">
      <span class="smoothing-black pl-12 text-2xl font-bold tracking-tight">Begin</span>
      <div class="hidden px-10 lg:block">
         <p class="smoothing-black text-center text-2xl tracking-[-0.04em]">You currently are <span class="font-bold">${progress}% of the way there</span>.</p>
      </div>
      <span class="smoothing-black min-w-max pr-12 text-2xl font-bold tracking-tight">Your item</span>
   </div>
</div>`



    let youritem = document.createElement("div")
    youritem.innerHTML = `
<h2 class="smoothing-black mb-4 text-3xl font-bold tracking-[-0.02em]">Your item</h2>
<div class="smoothing-black mt-5 text-xl leading-snug text-black/80">You chose a  <span class="font-bold">Macbook neo</span> for your item</div>
    `

    container.appendChild(alltimeprogress)
    container.appendChild(youritem)
}

window.addEventListener('pageChange', function() {
    setTimeout(addGoals, 200)
});

addGoals()
