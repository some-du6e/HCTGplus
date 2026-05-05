from playwright.sync_api import Page
from components.consoleabstraction import testpage

def testData(page: Page):
    things = [
        "xj8sqv",
        "exnwqi"
    ]

    page, results = testpage(page, "window.HCTG.datapage and friends", things, "https://game.hackclub.com/")
    return page, results

