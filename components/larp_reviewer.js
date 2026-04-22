function larprevewing() {
    if (location.pathname !== "/me") { return }
    let isViewHash = location.hash === "#larp-reviewer"
    if (!isViewHash && !projectidtoview) { return }
    console.log("HCTG+: larprevewing running")
    window.HCTG = window.HCTG || {}



    function prepareforcustomsite(titlee) {
        // change title
        let title = document.getElementsByClassName("text-[48px] font-bold tracking-[-0.06em] text-nowrap text-white smoothing-white")[0]
        if (!title) {
            console.warn("HCTG: could not find project title div! prob not on the project page ID: 9s8f7g")
            return null
        }
        title.textContent = titlee

        let oldcontent = document.getElementsByClassName("grid grid-cols-1 md:grid-cols-2")[0]
        if (!oldcontent) {
            console.warn("HCTG: could not find old content container. ID: 4jv1mn")
            return null
        }
        oldcontent.remove()

        let containerx = document.getElementsByClassName("relative -ml-2 h-screen w-full flex-1 overflow-y-scroll px-6 py-10")[0]
        if (!containerx) {
            console.warn("HCTG: could not find page container. ID: a2q7kp")
            return null
        }
        let container = document.createElement("div")
        container.className = "flex flex-col gap-10 px-6 py-8 xl:px-24 xl:py-16"
        containerx.appendChild(container)
        return container
    }
    let mainContainer = prepareforcustomsite("Project")

    let queue_count = 999

    let ohiosigmaboy = document.createElement("div")

    let ohiogubby = `
    <div class="px-8">
            <div class="mb-4 flex flex-col gap-1">
              <h1 class="smoothing-black text-4xl font-bold">
                Reviewer Dashboard
              </h1>
              <p class="text-gray-500 italic">not quite absolute power...</p>
            </div>
    
            <div class="py-5">
              <h2 class="mb-2 text-3xl font-semibold">Next up to review!</h2>
              <div class="grid grid-cols-3 gap-5" id="nextupproject">
                
              </div>
            </div>
    
            <div class="py-5">
              <div class="mb-3 flex items-baseline gap-4">
                <h2 class="text-3xl font-semibold">Review Queue</h2>
                <span class="text-gray-500">
                  ${queue_count} project${queue_count !== 1 && "s"} remaining
                </span>
              </div>
              <table class="w-full border-collapse text-left text-sm">
                <thead>
                  <tr class="border-b border-gray-200 text-gray-500">
                    <th class="py-2 pr-4 font-semibold">#</th>
                    <th class="py-2 pr-4 font-semibold">Title</th>
                    <th class="py-2 pr-4 font-semibold">Author</th>
                    <th class="py-2 pr-4 font-semibold">Submitted</th>
                    <th class="py-2 pr-4 font-semibold">Reported Hours</th>
                    <th class="py-2 pr-4 font-semibold">
                      Prior Approved Hours
                    </th>
                  </tr>
                </thead>
                <tbody>
                <!-- Queue items will be populated here -->
                </tbody>
              </table>
            </div>
    
            <div class="py-5">
              <div class="mb-4 flex flex-col gap-1">
                <h2 class="text-3xl font-semibold">Leaderboard</h2>
                <p class="text-gray-500 italic">
                  Number of reviews in the past week
                </p>
              </div>
    
              <div class="flex w-full gap-3">
                <div class="flex max-w-xl flex-col gap-3">
                  <p class="text-2xl font-bold">Last week</p>
                  <!-- Leaderboard items will be populated here -->
                </div>
                <div class="flex max-w-xl flex-col gap-3">
                  <p class="text-2xl font-bold">All time</p>
                  <!-- All-time leaderboard items will be populated here -->
                </div>
              </div>
            </div>
          </div>
    `
    function projectCard(project) {
        let highQualityHTML = project.high_quality ? `<p class="pt-2 text-center font-semibold text-yellow-600 italic">🎫 Golden ticket winner!</p>` : ""
        const hours = Math.floor(project.reported_seconds / 3600);
        const minutes = Math.floor((project.reported_seconds % 3600) / 60);

        const formatted = `${hours}h ${minutes}m`;
        return `
        <a
            href="http://TODO.com"
            target="_blank"
            rel="noopener noreferrer"
            class="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl transition-transform hover:scale-[1.02] shadow-[0_0_30px_rgba(255,215,0,0.9)]"
        >
            <div class="relative overflow-hidden rounded-t-2xl">
                <img
                    src="${project.screenshot}"
                    alt="${project.title ?? "Project screenshot"}"
                    class="h-[105px] w-full rounded-tl-2xl rounded-tr-2xl border-2 border-b-0 border-black object-cover"
                />
            </div>
    
            ${project.unread_notification_count !== 0 ? '<div class="absolute top-2 left-2 z-10 rounded-full bg-red-500 px-4 py-2 font-semibold text-white">' + project.unread_notification_count + ' unread notification'+ (project.unread_notification_count != 1 ? "s" : "") + '</div>' : ""}
      
            <div class="flex-1 rounded-br-2xl rounded-bl-2xl border-2 border-black bg-white p-6">
                <div class="flex items-start justify-between gap-2">
                    <h2 class="smoothing-black text-4xl font-bold tracking-[-0.03em] wrap-anywhere">
                        ${project.title}
                    </h2>
                    <div class="flex shrink-0 items-center gap-1.5">
                        <span class="smoothing-black text-2xl tracking-[-0.03em]" title="Hours reported">
                            ${formatted}
                        </span>
                    </div>
                </div>
        
                <p class="smoothing-gray text-xl text-gray-600">
                    by ${project.username}
                </p>
        
                <p class="smoothing-black mt-2 max-h-14 overflow-hidden text-xl tracking-[-0.02em] wrap-break-word text-ellipsis">
                    ${project.desc}
                </p>
                ${highQualityHTML}
            </div>
        </a>`
    }

    ohiosigmaboy.innerHTML = ohiogubby
    mainContainer.appendChild(ohiosigmaboy)

    let nextupproject = document.getElementById("nextupproject")
    let nextupfakeproject = {
        "id": 1506,
        "aasm_state": "submitted",
        "approved_at": "2026-04-16T20:33:37.087Z",
        "demo_link": "https://chromewebstore.google.com/detail/hctg+/kdndfafcpodecbbjhoicneekmbdhhckm",
        "desc": "Adds some qol features to HCTG that i would like.\r\n\r\nNote: please install from github since webstore reviews take a long time and i have been adding a lot of stuff",
        "rejected_at": "2026-04-15T15:25:21.424Z",
        "repo_link": "https://github.com/some-du6e/HCTGplus",
        "submitted_at": "2026-04-21T01:06:59.007Z",
        "title": "HCTG+",
        "ysws": null,
        "created_at": "2026-04-09T17:53:24.874Z",
        "updated_at": "2026-04-21T01:06:59.015Z",
        "user_id": 2130,
        "high_quality": false,
        "ai_declaration": "Copilot/codex for things i could never fix, fully vibe coded ONLY the github release action\r\nmaybe claude for helping me with the calculations",
        "reported_seconds": 109328,
        "total_seconds": 109328,
        "approved_seconds": 70773,
        "real_approved_seconds": 63000,
        "hackatime_projects": [
            15183
        ],
        "tags": [
            6
        ],
        "status": "Under review on 2026-04-21",
        "unread_notification_count": 67,
        "username": "Quandale Dingle",
        "screenshot": "/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTA4NiwicHVyIjoiYmxvYl9pZCJ9fQ==--640a3a6d6ed80515a739bf4996113d3c4441327c/hctgplusfullkindabad.png?disposition=inline"
    }
    nextupproject.innerHTML = projectCard(nextupfakeproject)

}

window.addEventListener('pageChange', function() {
    setTimeout(larprevewing, 200)
});







larprevewing()
