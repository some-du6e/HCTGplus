from components.componenttest import test_component


def testLarpingReviewing(page):
    return test_component(
        page,
        "larping_reviewing.js",
        "https://game.hackclub.com/me#larp_review",
        error_codes=("9s8f7g", "4jv1mn", "a2q7kp"),
        running_message="HCTG+: larpReview running",
    )
