from playwright.sync_api import Page
from components.consoleabstraction import testpage

def testlander(page: Page):
    things = [
        "9s8f7g",
        "WDZE8G",
        "EQBH7g"
    ]

    page, results = testpage(page, "Lander", things, "https://game.hackclub.com/")
    return page, results

