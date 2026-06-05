from components.componenttest import test_component


def testLarpReviewer(page):
    return test_component(
        page,
        "larp_reviewer.js",
        "https://game.hackclub.com/me#larp-reviewer",
        error_codes=("9s8f7g", "4jv1mn", "a2q7kp"),
        running_message="HCTG+: larprevewing running",
    )
