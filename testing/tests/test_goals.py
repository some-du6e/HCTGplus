from components.componenttest import test_component


def testGoals(page):
    return test_component(
        page,
        "goals.js",
        "https://game.hackclub.com/me#goals",
        error_codes=("9s8f7g",),
        running_message="HCTG+: addGoals running",
        check=lambda page: (
            "goals UI rendered",
            page.get_by_text("Goals", exact=True).count() > 0,
        ),
    )
