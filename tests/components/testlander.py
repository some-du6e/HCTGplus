from playwright.sync_api import Page
from dotenv import load_dotenv
import os
import time
load_dotenv()

def testlander(page: Page):
    results = {
        "section": "Lander tests",
        "tests": {
            "passed_9s8f7g": True,
            "passed_WDZE8G": True,
            "passed_EQBH7g": True,
        }
    }
    stuff_to_watchoutfor = [
        "9s8f7g",
        "WDZE8G",
        "EQBH7g"
    ]

    def handle_console(msg):
        print(f"console: {msg.text}")
        for thing in stuff_to_watchoutfor:
            if thing in msg.text:
                print(f"found {thing} in console...")
                results["tests"][f"passed_{thing}"] = False
    
    # Set up listener BEFORE navigating to page
    page.on("console", lambda msg: handle_console(msg))
    
    
    page.goto("https://game.hackclub.com/")
    
    
    time.sleep(2.5)

    return page, results