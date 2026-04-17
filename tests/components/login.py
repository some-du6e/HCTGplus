from playwright.sync_api import Page
from dotenv import load_dotenv
import os

load_dotenv()

def login(page: Page):
    session_token_cookie = os.environ.get("session_token")
    signed_user_token = os.environ.get("signed_user")
    if signed_user_token != None:
        cookies_to_add = [
            {
                "name": "signed_user",
                "value": signed_user_token,
                "url": "https://auth.hackclub.com/"
            },
            {
                "name": "session_token",
                "value": session_token_cookie,
                "url": "https://auth.hackclub.com/"
            }
        ]
        page.context.add_cookies(cookies_to_add) # type: ignore

    page.goto("https://auth.hackclub.com/")
    input("Log in and press enter when your done...")
    return page