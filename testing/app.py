# // put it up here cuz its fast 
question = input("say y if u wanna test dist \n")

from playwright.sync_api import sync_playwright
from components.login import login as login

# import tests
from tests.testlander import testlander as testlander
from tests.testlogin import testLogin
from tests.testdata import testData

import tests as t # idk if jsut t or manually import all of them

from components.rendertests import rendertest as rendertest
from components.pregame import pregame
import os


with sync_playwright() as p:
    # init le browser
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


    page = pregame(page)


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

    # test gallery
    page, gallery_results = t.testGallery(page) 
    results.append(gallery_results)
    
    rendertest(results)

    
    page.pause()