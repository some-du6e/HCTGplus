from playwright.sync_api import Page
from components.consoleabstraction import testpage

def testGallery(page: Page):
    things = [
        "9s8f7g",
        "WDZE8G",
        "EQBH7g"
    ]

    page, results = testpage(page, "Gallery", things, "https://game.hackclub.com/explore")


    results["tests"]["is there projects container?"] = True
    results["tests"]["passed the link test?"] = True


    projectsContainer = page.query_selector("#gallery-projects-container")
    

    if projectsContainer is None:
        results["tests"]["is there projects container?"] = False
        results["tests"]["passed the link test?"] = False
    else:
        projectsContainerProjects = projectsContainer.query_selector_all("a")
        if len(projectsContainerProjects) == 0:
            results["tests"]["passed the link test?"] = False
        
        selectedProject = projectsContainerProjects[0]
        selectedProjectLink = selectedProject.get_attribute('href')

        print(selectedProjectLink)


    return page, results

