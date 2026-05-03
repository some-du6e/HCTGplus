from playwright.sync_api import sync_playwright
from components.login import login as login
from components.testlander import testlander as testlander
from components.rendertests import rendertest as rendertest
import os


with sync_playwright() as p:
    question = input("say y if u wanna test dist \n")
    pathtoext = os.path.join(os.getcwd(), "..")
    if question == 'y':
        pathtoext = os.path.join(pathtoext, "dist")
    else:
        pathtoext = os.path.join(pathtoext, "src")
    datadir = os.path.join(os.getcwd(), "testingdata")

    browser = p.chromium.launch_persistent_context(
        user_data_dir=datadir,
        headless=False,
        args=[
            "--disable-extensions-except="+pathtoext,
            "--load-extension="+pathtoext
        ]
        )
    page = browser.new_page()
    page = login(page)

    results = []


    # test lander
    page, lander_results = testlander(page)
    results.append(lander_results)





    rendertest(results)
