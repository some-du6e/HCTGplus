from playwright.sync_api import sync_playwright
from components.login import login as login

# import tests
from tests.testlander import testlander as testlander
from tests.testlogin import testLogin
from tests.testdata import testData


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

    # test login button
    page, login_results = testLogin(page)
    results.append(login_results)

    # test datapage
    page, data_results = testData(page)
    results.append(data_results)


    rendertest(results)


    page.pause()