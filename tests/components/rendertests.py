def rendertest(results):
    # see if all passed
    allpassed = True
    for result in results:
        for key in result:
            if key.startswith("passed_") and not result[key]:
                allpassed = False
                break

    status = "![Tests passing](https://img.shields.io/badge/Tests-passing-green)"
    if not allpassed:
        status = "![Tests failing](https://img.shields.io/badge/Tests-failing-red)"

    content = f"""<div align="center">

# 🧪 Test results

{status}

</div>
"""

    with open("testresults.md", "w", encoding="utf-8") as f:
        f.write(content)
