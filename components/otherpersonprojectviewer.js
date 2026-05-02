function projectViewer() {
  if (location.pathname !== "/me") {
    return
  }
  const queryParams = new URLSearchParams(window.location.search)
  let projectidtoview = Object.fromEntries(queryParams).projectId
  if (!projectidtoview) {
    if (Object.fromEntries(queryParams).projectobj) {
      projectidtoview = 676767
    }
  }
  let isViewHash = location.hash === "#view"
  if (!isViewHash) {
    return
  }
  console.log("HCTG+: projectViewer running")
  window.HCTG = window.HCTG || {}

  if (!document.getElementById("HCTGplus-projectviewer-styles")) {
    let style = document.createElement("style")
    style.id = "HCTGplus-projectviewer-styles"
    style.textContent = `
          [data-hctg-action-btn="true"] img { filter: invert(1); }
          [data-hctg-action-btn="true"]:hover img { filter: invert(0); }
        `
    document.head.appendChild(style)
  }

  function prepareforcustomsite(titlee) {
    // change title
    let title = document.getElementsByClassName(
      "text-[48px] font-bold tracking-[-0.06em] text-nowrap text-white smoothing-white",
    )[0]
    if (!title) {
      console.warn(
        "HCTG: could not find project title div! prob not on the project page ID: 9s8f7g",
      )
      return null
    }
    title.textContent = titlee

    let oldcontent = document.getElementsByClassName("grid grid-cols-1 md:grid-cols-2")[0]
    if (!oldcontent) {
      console.warn("HCTG: could not find old content container. ID: 4jv1mn")
      return null
    }
    oldcontent.remove()

    let containerx = document.getElementsByClassName(
      "relative -ml-2 h-screen w-full flex-1 overflow-y-scroll px-6 py-10",
    )[0]
    if (!containerx) {
      console.warn("HCTG: could not find page container. ID: a2q7kp")
      return null
    }
    let container = document.createElement("div")
    container.className = "flex flex-col gap-10 px-6 py-8 xl:px-24 xl:py-16"
    containerx.appendChild(container)
    return container
  }

  function formattime(seconds) {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)

    const formatted = `${hours}h ${minutes}m`
    return formatted // shi prob in 3 different components lowkey
  }

  if (!projectidtoview) {
    alert("What are you doing buddy?")
    return
  }

  function dqnidnqwi(project) {
    let highqualelement = ""
    if (project.high_quality) {
      highqualelement = `<span class="absolute top-2 right-3 text-sm font-bold text-[#fecb0d]">★ High quality</span>`
    }
    let hoursicon =
      "data:image/svg+xml,%3csvg%20width='100%25'%20height='100%25'%20overflow='visible'%20style='display:%20block;'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20id='Clock%20Icon'%20d='M8%200C12.4184%200%2016%203.5816%2016%208C16%2012.4184%2012.4184%2016%208%2016C3.5816%2016%200%2012.4184%200%208C0%203.5816%203.5816%200%208%200ZM8%203.2C7.78783%203.2%207.58434%203.28429%207.43431%203.43431C7.28429%203.58434%207.2%203.78783%207.2%204V8C7.20005%208.21216%207.28436%208.41561%207.4344%208.5656L9.8344%2010.9656C9.98528%2011.1113%2010.1874%2011.192%2010.3971%2011.1901C10.6069%2011.1883%2010.8075%2011.1042%2010.9559%2010.9559C11.1042%2010.8075%2011.1883%2010.6069%2011.1901%2010.3971C11.192%2010.1874%2011.1113%209.98528%2010.9656%209.8344L8.8%207.6688V4C8.8%203.78783%208.71571%203.58434%208.56569%203.43431C8.41566%203.28429%208.21217%203.2%208%203.2Z'%20fill='var(--fill-0,%20black)'/%3e%3c/svg%3e"
    let repoicon =
      "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20448%20512%22%3E%3C!--!Font%20Awesome%20Free%20v7.2.0%20by%20%40fontawesome%20-%20https%3A%2F%2Ffontawesome.com%20License%20-%20https%3A%2F%2Ffontawesome.com%2Flicense%2Ffree%20Copyright%202026%20Fonticons%2C%20Inc.--%3E%3Cpath%20d%3D%22M80%20104a24%2024%200%201%200%200-48%2024%2024%200%201%200%200%2048zm80-24c0%2032.8-19.7%2061-48%2073.3l0%2070.7%20176%200c26.5%200%2048-21.5%2048-48l0-22.7c-28.3-12.3-48-40.5-48-73.3%200-44.2%2035.8-80%2080-80s80%2035.8%2080%2080c0%2032.8-19.7%2061-48%2073.3l0%2022.7c0%2061.9-50.1%20112-112%20112l-176%200%200%2070.7c28.3%2012.3%2048%2040.5%2048%2073.3%200%2044.2-35.8%2080-80%2080S0%20476.2%200%20432c0-32.8%2019.7-61%2048-73.3l0-205.3C19.7%20141%200%20112.8%200%2080%200%2035.8%2035.8%200%2080%200s80%2035.8%2080%2080zm232%200a24%2024%200%201%200%20-48%200%2024%2024%200%201%200%2048%200zM80%20456a24%2024%200%201%200%200-48%2024%2024%200%201%200%200%2048z%22%2F%3E%3C%2Fsvg%3E"
    let demoicon =
      "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20576%20512%22%3E%3C!--!Font%20Awesome%20Free%20v7.2.0%20by%20%40fontawesome%20-%20https%3A%2F%2Ffontawesome.com%20License%20-%20https%3A%2F%2Ffontawesome.com%2Flicense%2Ffree%20Copyright%202026%20Fonticons%2C%20Inc.--%3E%3Cpath%20d%3D%22M419.5%2096c-16.6%200-32.7%204.5-46.8%2012.7-15.8-16-34.2-29.4-54.5-39.5%2028.2-24%2064.1-37.2%20101.3-37.2%2086.4%200%20156.5%2070%20156.5%20156.5%200%2041.5-16.5%2081.3-45.8%20110.6l-71.1%2071.1c-29.3%2029.3-69.1%2045.8-110.6%2045.8-86.4%200-156.5-70-156.5-156.5%200-1.5%200-3%20.1-4.5%20.5-17.7%2015.2-31.6%2032.9-31.1s31.6%2015.2%2031.1%2032.9c0%20.9%200%201.8%200%202.6%200%2051.1%2041.4%2092.5%2092.5%2092.5%2024.5%200%2048-9.7%2065.4-27.1l71.1-71.1c17.3-17.3%2027.1-40.9%2027.1-65.4%200-51.1-41.4-92.5-92.5-92.5zM275.2%20173.3c-1.9-.8-3.8-1.9-5.5-3.1-12.6-6.5-27-10.2-42.1-10.2-24.5%200-48%209.7-65.4%2027.1L91.1%20258.2c-17.3%2017.3-27.1%2040.9-27.1%2065.4%200%2051.1%2041.4%2092.5%2092.5%2092.5%2016.5%200%2032.6-4.4%2046.7-12.6%2015.8%2016%2034.2%2029.4%2054.6%2039.5-28.2%2023.9-64%2037.2-101.3%2037.2-86.4%200-156.5-70-156.5-156.5%200-41.5%2016.5-81.3%2045.8-110.6l71.1-71.1c29.3-29.3%2069.1-45.8%20110.6-45.8%2086.6%200%20156.5%2070.6%20156.5%20156.9%200%201.3%200%202.6%200%203.9-.4%2017.7-15.1%2031.6-32.8%2031.2s-31.6-15.1-31.2-32.8c0-.8%200-1.5%200-2.3%200-33.7-18-63.3-44.8-79.6z%22%2F%3E%3C%2Fsvg%3E"
    let readmeicon =
      "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20384%20512%22%3E%3C!--!Font%20Awesome%20Free%20v7.2.0%20by%20%40fontawesome%20-%20https%3A%2F%2Ffontawesome.com%20License%20-%20https%3A%2F%2Ffontawesome.com%2Flicense%2Ffree%20Copyright%202026%20Fonticons%2C%20Inc.--%3E%3Cpath%20d%3D%22M0%2064C0%2028.7%2028.7%200%2064%200L213.5%200c17%200%2033.3%206.7%2045.3%2018.7L365.3%20125.3c12%2012%2018.7%2028.3%2018.7%2045.3L384%20448c0%2035.3-28.7%2064-64%2064L64%20512c-35.3%200-64-28.7-64-64L0%2064zm208-5.5l0%2093.5c0%2013.3%2010.7%2024%2024%2024L325.5%20176%20208%2058.5zM120%20256c-13.3%200-24%2010.7-24%2024s10.7%2024%2024%2024l144%200c13.3%200%2024-10.7%2024-24s-10.7-24-24-24l-144%200zm0%2096c-13.3%200-24%2010.7-24%2024s10.7%2024%2024%2024l144%200c13.3%200%2024-10.7%2024-24s-10.7-24-24-24l-144%200z%22%2F%3E%3C%2Fsvg%3E"
    // TODO: host on hc cdn

    let projectcard = document.createElement("div")
    projectcard.innerHTML = `
          <div class="flex h-full flex-col col-span-full" id="HCTGplus-project" data-hctg-project-id="${project.id}" style="display: block;">
            <div class="relative h-8 rounded-tl-2xl rounded-tr-2xl bg-black">
              ${highqualelement}
              <div class="absolute top-2 left-5 flex gap-1.5" style="left: 0.5rem; top: 0.5rem;">
                <img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20448%20512%22%3E%3C!--!Font%20Awesome%20Free%20v7.2.0%20by%20%40fontawesome%20-%20https%3A%2F%2Ffontawesome.com%20License%20-%20https%3A%2F%2Ffontawesome.com%2Flicense%2Ffree%20Copyright%202026%20Fonticons%2C%20Inc.--%3E%3Cpath%20d%3D%22M192%200c-35.3%200-64%2028.7-64%2064l0%20256c0%2035.3%2028.7%2064%2064%2064l192%200c35.3%200%2064-28.7%2064-64l0-200.6c0-17.4-7.1-34.1-19.7-46.2L370.6%2017.8C358.7%206.4%20342.8%200%20326.3%200L192%200zM64%20128c-35.3%200-64%2028.7-64%2064L0%20448c0%2035.3%2028.7%2064%2064%2064l192%200c35.3%200%2064-28.7%2064-64l0-16-64%200%200%2016-192%200%200-256%2016%200%200-64-16%200z%22%2F%3E%3C%2Fsvg%3E" class="w-4 invert hover:pink cursor-pointer" title="">
                <span class="text-[#ffffff] text-sm font-bold invert items-center">${project.id}</span>
              </div>
            </div>
            <div class="flex flex-1 flex-col rounded-br-2xl rounded-bl-2xl border-2 border-t-0 border-black bg-white px-6 py-4">
              <img alt="${project.title}" class="mb-4 w-full object-contain h-64" src="${project.screenshot}?disposition=inline">
              <div class="flex items-start justify-between gap-6">
                <h2 class="smoothing-black text-4xl font-bold tracking-[-0.03em]">${project.title}</h2>
                <div class="flex items-center gap-1.5">
                  <img alt="Hours" class="h-5 w-5" src="${hoursicon}">
                  <span class="smoothing-black text-2xl tracking-[-0.03em]">${formattime(project.approved_seconds)}</span>
                </div>
                
              </div>
              <p class="smoothing-gray text-xl text-gray-600">by <a href="javascript:void(0)" onclick="alert('coming soon') //TODO ">${project.username}</a></p>
              <p class="smoothing-black mt-2 text-xl tracking-[-0.02em]">${project.desc}</p>
              <div class="mt-auto">
                <div class="mt-4 flex items-center gap-2">
                    <a href="${project.demo_link}" data-hctg-action-btn="true" class="group smoothing-white justify-center w-full mt-4 flex gap-3 cursor-pointer bg-black px-5 py-3 items-center text-xl font-bold tracking-tight text-white transition-colors hover:bg-[#fecb0d] hover:text-black">
                      <img src="${demoicon}" class="w-4">
                        Demo
                    </a>
                    <a href="${project.repo_link}" data-hctg-action-btn="true" class="group smoothing-white justify-center w-full mt-4 flex gap-3 cursor-pointer bg-black px-5 py-3 items-center text-xl font-bold tracking-tight text-white transition-colors hover:bg-[#fecb0d] hover:text-black">
                      <img src="${repoicon}" class="w-4">
                        Repository
                    </a>
                    <a href="${project.repo_link + "/blob/main/README.md"}" data-hctg-action-btn="true" class="group smoothing-white justify-center w-full mt-4 flex gap-3 cursor-pointer bg-black px-5 py-3 items-center text-xl font-bold tracking-tight text-white transition-colors hover:bg-[#fecb0d] hover:text-black" >
                      <img src="${readmeicon}" class="w-4">
                        Readme
                    </a>
                </div>
              </div>
            </div>
          </div>
        `

    mainContainer.appendChild(projectcard)
  }

  // let project = { // first project i saw and also a good example
  //     // TODO: get other proejcs ad not hard code it
  //     "id": 14,
  //     "aasm_state": "approved",
  //     "approved_at": "2026-03-09T16:32:47.251Z",
  //     "demo_link": "https://aregus.me",
  //     "desc": "its my own website :P",
  //     "rejected_at": null,
  //     "repo_link": "https://github.com/Areg472/my-portfolio",
  //     "submitted_at": "2026-02-14T15:24:06.991Z",
  //     "title": "My portfolio",
  //     "ysws": null,
  //     "created_at": "2026-01-17T07:28:09.232Z",
  //     "updated_at": "2026-03-09T16:32:47.267Z",
  //     "user_id": 44,
  //     "high_quality": true,
  //     "ai_declaration": null,
  //     "reported_seconds": 3439,
  //     "total_seconds": null,
  //     "approved_seconds": 3439,
  //     "real_approved_seconds": 3439,
  //     "hackatime_projects": [
  //         335
  //     ],
  //     "tags": [],
  //     "status": "Approved on 2026-03-09",
  //     "unread_notification_count": 0,
  //     "screenshot": "/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6ODIsInB1ciI6ImJsb2JfaWQifX0=--85063a9fc08aad981fba5fcf347669d71e77bf62/Screenshot%202026-02-14%20at%2019-23-49%20Areg.png?disposition=inline",
  //     "username": "Areg (Արեգ)"
  // }

  // find the project
  let project = null
  if (projectidtoview !== 676767) { // check for override
    
    let galleryprojects = null
    let rawGalleryCache = localStorage.getItem("hctg-gallery-cache")
    if (rawGalleryCache) {
      try {
        let parsedCache = JSON.parse(rawGalleryCache)
        if (Array.isArray(parsedCache)) {
          galleryprojects = parsedCache
        } else if (parsedCache && Array.isArray(parsedCache.projects)) {
          galleryprojects = parsedCache.projects
        }
      } catch (error) {
        console.warn("HCTG: invalid gallery cache, clearing it. ID: 8r3jwy")
        localStorage.removeItem("hctg-gallery-cache")
      }
    }

    if (!galleryprojects) {
      alert("need to go to gallery page")
      return
    }

    let projectIdAsNumber = Number(projectidtoview)
    for (let galleryproject of galleryprojects) {
      if (galleryproject.id === projectidtoview || galleryproject.id === projectIdAsNumber) {
        project = galleryproject
        break
      }
    }
    if (!project) {
      alert("not found :(")
      return
    }
  } else {
    project = decodeURIComponent(Object.fromEntries(queryParams).projectobj)
    project = JSON.parse(project)
  }

  let mainContainer = prepareforcustomsite("Project")
  if (!mainContainer) {
    return
  }

  console.log(project)
  dqnidnqwi(project)
}

window.addEventListener("pageChange", function () {
  setTimeout(projectViewer, 200)
})

projectViewer()
