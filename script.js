let isImperial = true;

function addHomeButton(tableId) {
    const mainTable = document.getElementById(tableId);
    const newRow = mainTable.insertRow(-1);
    newRow.id = "home";
    const newCell = Object.assign(newRow.insertCell(0), {
        colSpan: 2,
    });
    newCell.innerHTML =
        '<a class="button" href="../index.html">&LeftAngleBracket; Home</a>';
}

function colorTableGradient(tableId, backgroundColor, baseColor, peakColor) {
    const mainTable = document.getElementById(tableId);
    // mainTable.style.backgroundColor = backgroundColor;
    const n = mainTable.rows.length;

    const baseRed = parseInt(baseColor.slice(1, 3), 16);
    const baseGreen = parseInt(baseColor.slice(3, 5), 16);
    const baseBlue = parseInt(baseColor.slice(5, 7), 16);
    const peakRed = parseInt(peakColor.slice(1, 3), 16);
    const peakGreen = parseInt(peakColor.slice(3, 5), 16);
    const peakBlue = parseInt(peakColor.slice(5, 7), 16);

    for (let i = 0; i < n; i++) {
        const newRed = baseRed + (i / n) * (peakRed - baseRed);
        const newGreen = baseGreen + (i / n) * (peakGreen - baseGreen);
        const newBlue = baseBlue + (i / n) * (peakBlue - baseBlue);
        mainTable.rows[
            i
        ].style.backgroundColor = `rgba(${newRed}, ${newGreen}, ${newBlue}, 0.8)`;
    }
}

window.onload = function () {
    colorTableGradient("main-table", "#292F36", "#bde2fc", "#4a5dd9");
    if (document.getElementById("imperial")) {
        const imperial = document.getElementById("imperial");
        imperial.addEventListener("click", function () {
            if (isImperial) {
                return;
            }
            try {
                document.getElementById("weight-label").innerHTML = "lbs";
                if (document.getElementById("weight").value > 0) {
                    document.getElementById("weight").value = (
                        document.getElementById("weight").value * 2.205
                    ).toFixed();
                }
            } catch (e) {
                console.log("weight-label not found");
            }
            try {
                document.getElementById("height-label").innerHTML = "in";
                if (document.getElementById("height").value > 0) {
                    document.getElementById("height").value = (
                        document.getElementById("height").value / 2.54
                    ).toFixed();
                }
            } catch (e) {
                console.log("height-label not found");
            }
            isImperial = true;

            if (needsRecalc) {
                document.getElementById("calculate").click();
            }
        });
    }

    if (document.getElementById("metric")) {
        const metric = document.getElementById("metric");
        metric.addEventListener("click", function () {
            if (!isImperial) {
                return;
            }
            try {
                document.getElementById("weight-label").innerHTML = "kg";
                if (document.getElementById("weight").value > 0) {
                    document.getElementById("weight").value = (
                        document.getElementById("weight").value / 2.205
                    ).toFixed();
                }
            } catch (e) {
                console.log("weight-label not found");
            }
            try {
                document.getElementById("height-label").innerHTML = "cm";
                if (document.getElementById("height").value > 0) {
                    document.getElementById("height").value = (
                        document.getElementById("height").value * 2.54
                    ).toFixed();
                }
            } catch (e) {
                console.log("height-label not found");
            }
            isImperial = false;

            try {
                if (needsRecalc) {
                    document.getElementById("calculate").click();
                }
            } catch {
                // ignore me;
            }
        });
    }

    const imperial = document.getElementById("imperial");
    const metric = document.getElementById("metric");
    const male = document.getElementById("male");
    const female = document.getElementById("female");
    const weight = document.getElementById("weight");
    const height = document.getElementById("height");
    const age = document.getElementById("age");
    if (localStorage.getItem("unit") && imperial) {
        if (localStorage.getItem("unit") == "imperial") {
            imperial.checked = true;
            try {
                document.getElementById("weight-label").innerHTML = "lbs";
            } catch (e) {
                console.log("weight-label not found");
            }
            try {
                document.getElementById("height-label").innerHTML = "in";
            } catch (e) {
                console.log("height-label not found");
            }
        } else {
            metric.checked = true;
            try {
                document.getElementById("weight-label").innerHTML = "kg";
            } catch (e) {
                console.log("weight-label not found");
            }
            try {
                document.getElementById("height-label").innerHTML = "cm";
            } catch (e) {
                console.log("height-label not found");
            }
        }
    }
    if (localStorage.getItem("gender") && male) {
        if (localStorage.getItem("gender") == "male") {
            male.checked = true;
        } else {
            female.checked = true;
        }
    }
    if (localStorage.getItem("weight") && weight) {
        document.getElementById("weight").value =
            localStorage.getItem("weight");
    }
    if (localStorage.getItem("height") && height) {
        document.getElementById("height").value =
            localStorage.getItem("height");
    }
    if (localStorage.getItem("age") && age) {
        document.getElementById("age").value = localStorage.getItem("age");
    }

    if (document.getElementById("metric").checked) {
        isImperial = false;
    }

    if (document.getElementById("info-container")) {
        document
            .getElementById("info-container")
            .addEventListener("click touchstart", function () {
                document.getElementById("info-container").style.display =
                    "block";
            });
    }

    // document.getElementById('calculate').click();
};
