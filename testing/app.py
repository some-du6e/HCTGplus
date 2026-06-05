# // put it up here cuz its fast 
question = input("say y if u wanna test dist \n")

from playwright.sync_api import sync_playwright
from components.login import login as login

# import tests
from tests.testlogin import testLogin
from tests.test_consts import testConsts
from tests.test_data import testDataComponent
from tests.test_gallery import testGalleryComponent
from tests.test_goals import testGoals
from tests.test_lander import testLanderComponent
from tests.test_larp_reviewer import testLarpReviewer
from tests.test_larping import testLarping
from tests.test_larping_reviewing import testLarpingReviewing
from tests.test_notifications import testNotifications
from tests.test_otherpersonprojectviewer import testOtherPersonProjectViewer
from tests.test_projects import testProjects
from tests.test_settings import testSettings
from tests.test_shop import testShop
from tests.test_sidebar import testSidebar
from tests.test_utils import testUtils

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


    component_tests = [
        testConsts,
        testDataComponent,
        testGalleryComponent,
        testGoals,
        testLanderComponent,
        testLarpReviewer,
        testLarping,
        testLarpingReviewing,
        testNotifications,
        testOtherPersonProjectViewer,
        testProjects,
        testSettings,
        testShop,
        testSidebar,
        testUtils,
    ]
    for component_test in component_tests:
        page, component_results = component_test(page)
        results.append(component_results)

    page, login_results = testLogin(page)
    results.append(login_results)
    
    rendertest(results)

    
    page.pause()
