from playwright.sync_api import Page
from dotenv import load_dotenv
import os
import time
load_dotenv()

def testpage(page: Page, sectionname: str, stuff_to_watchoutfor: list, url: str):
    results = {
        "section": f"{sectionname} tests",
        "tests": {
            
        }
    }
    
    for thing in stuff_to_watchoutfor:
        results["tests"][f"passed_{thing}"] = True

    
    def handle_console(msg):
        # print(f"console: {msg.text}")
        for thing in stuff_to_watchoutfor:
            if thing in msg.text:
                print(f"found {thing} in console...")
                results["tests"][f"passed_{thing}"] = False
    
    # Set up listener BEFORE navigating to page
    page.on("console", lambda msg: handle_console(msg))
    
    
    if url != "stay" :
        page.goto(url)
    
    
    page.wait_for_load_state("domcontentloaded", timeout=10000)

    return page, results