from playwright.sync_api import sync_playwright
from components.login import login as login
import os


with sync_playwright() as p:
    question = input("say y if u wanna test dist \n")
    pathtoext = os.path.join(os.getcwd(), "..")
    if question == 'y':
        pathtoext = os.path.join(pathtoext, "dist")
    
    browser = p.chromium.launch(
        headless=False,
        args=[
            "--disable-extensions-except="+pathtoext,
            "--load-extension="+pathtoext
        ]
        )
    page = browser.new_page()
    page = login(page)
