def rendertest(results):
    # see if all passed and get extra stuff
    allpassed = True
    testamount = 0
    testspassed = 0
    for result in results:
        for key in result:
            testamount += 1
            if key.startswith("passed_") and not result[key]:
                allpassed = False
            elif key.startswith("passed_") and result[key]:
                testspassed += 1
    


    testsstatus = f"![Tests passing](https://img.shields.io/badge/{str(testspassed) + "/" + str(testamount)}-green)"
    status = "![Tests passing](https://img.shields.io/badge/Tests-passing-green)"
    if not allpassed:
        status = "![Tests failing](https://img.shields.io/badge/Tests-failing-red)"
        testsstatus = f"![Tests failing](https://img.shields.io/badge/{str(testspassed) + "/" + str(testamount)}-tests_passing-red)"

    content = f"""<div align="center">

# 🧪 Test results

{status}
{testsstatus}
</div>
"""


    for result in results:
        content += f"""
## {result["section"]}
"""     
        tests = result["tests"]
        for test in tests:
            thingy = "❌"
            if tests[test] == True:
                thingy = "✅"
            cleantest = str(test).replace("passed_", "")
            content += f"""- {thingy} {cleantest} \n"""

    with open("testresults.md", "w", encoding="utf-8") as f:
        f.write(content)
