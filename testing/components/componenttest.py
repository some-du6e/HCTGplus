from playwright.sync_api import Page


def test_component(
    page: Page,
    name: str,
    url: str,
    error_codes=(),
    running_message=None,
    check=None,
):
    results = {
        "section": f"{name} tests",
        "tests": {
            "no known error codes": True,
            "no uncaught JavaScript errors": True,
        },
    }
    console_messages = []
    page_errors = []

    def handle_console(message):
        console_messages.append(message.text)
        if any(code in message.text for code in error_codes):
            results["tests"]["no known error codes"] = False

    def handle_page_error(error):
        page_errors.append(str(error))

    page.on("console", handle_console)
    page.on("pageerror", handle_page_error)

    try:
        page.goto(url)
        page.wait_for_load_state("domcontentloaded", timeout=10000)
        page.wait_for_timeout(500)

        if running_message:
            results["tests"]["component ran"] = any(
                running_message in message for message in console_messages
            )

        if check:
            label, passed = check(page)
            results["tests"][label] = bool(passed)
    except Exception as error:
        page_errors.append(str(error))
    finally:
        page.remove_listener("console", handle_console)
        page.remove_listener("pageerror", handle_page_error)

    results["tests"]["no uncaught JavaScript errors"] = not page_errors
    return page, results
