---
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=0.9">
    <title>Macronutrient Calculator</title>
    <!-- <link rel="stylesheet" href="../style.css"> -->
    <script src="../script.js"></script>
</head>

<table id="main-table">
    <colgroup>
        <col style="width: 50%;">
        <col style="width: 50%;">
    </colgroup>
    <th colspan="2">
        Macronutrient Calculator
    </th>
    <tr>
        <td>
            Unit of Measurement:
        </td>
        <td>
            <input type="radio" name="unit" id="imperial" checked>
            <label for="imperial">Imperial</label>
            <input type="radio" name="unit" id="metric">
            <label for="metric">Metric</label>
        </td>
    </tr>
    <tr>
        <td>
            Gender:
        </td>
        <td>
            <input type="radio" name="gender" id="male" checked>
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female">
            <label for="female">Female</label>
        </td>
    </tr>
    <tr>
        <td>
            Weight:
        </td>
        <td style="width: 50%;">
            <input type="number" name="weight" id="weight">
            <label id="weight-label" for="weight">lbs</label>
        </td>
    </tr>
    <tr>
        <td>
            Height:
        </td>
        <td style="width: 50%;">
            <input type="number" name="height" id="height">
            <label id="height-label" for="height">in</label>
        </td>
    </tr>
    <tr>
        <td>
            Age:
        </td>
        <td>
            <input type="number" name="age" id="age">
            <label id="age-label" for="age">years</label>
        </td>
    </tr>
    <tr>
        <td>
            Activity Level:
        </td>
        <td>
            <select name="activity-level" id="activity-level">
                <option value="1.15">Sedentary (Little to no exercise)</option>
                <option value="1.3">Lightly Active (1 - 3 Hours of exercise per week)</option>
                <option value="1.5" selected>Moderately Active (4 - 6 Hours of exercise per week)</option>
                <option value="1.7">Very Active (7 - 9 Hours of exercise per week)</option>
                <option value="1.9">Extremely Active (10+ Hours of exercise per week)</option>
            </select>
        </td>
    </tr>
    <tr>
        <td>
            Goal:
        </td>
        <td>
            <select name="goal" id="goal">
                <option value="-1000">Weight Loss: 2 pounds per week</option>
                <option value="-500">Weight Loss: 1 pounds per week</option>
                <option value="-250">Weight Loss: 1/2 pounds per week</option>
                <option value="0" selected>Maintain Weight</option>
                <option value="250">Weight Gain: 1/2 pounds per week</option>
                <option value="500">Weight Gain: 1 pounds per week</option>
                <option value="1000">Weight Gain: 2 pounds per week</option>
            </select>
        </td>
    </tr>
    <tr style="text-align: center;">
        <td colspan="2">
            <button id="calculate">Calculate</button>
        </td>
    </tr>
    <tr>
        <td colspan="2">
            <table id="macro-table" class="macro-table">
                <colgroup>
                    <col style="width: 50%;">
                    <col style="width: 50%;">
                </colgroup>
                <tr style="text-align: center;">
                    <td colspan="2">
                        Dietary Preferences
                    </td>
                </tr>
                <tr style="text-align: center;">
                    <td colspan="2">
                        <button style="margin: 5px;" id="balanced">Balanced</button>
                        <button style="margin: 5px;" id="low-carb">Low-Carb</button>
                        <button style="margin: 5px;" id="high-carb">High-Carb</button>
                        <button style="margin: 5px;" id="high-protein">High-Protein</button>
                        <button style="margin: 5px;" id="keto">Ketogenic</button>
                        <button style="margin: 5px;" id="custom">Custom</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        Calories
                    </td>
                    <td>
                        <input type="number" name="calories" id="calories" disabled>
                    </td>
                </tr>
                <tr>
                    <td>
                        Protein
                    </td>
                    <td>
                        <input type="number" name="protein" id="protein" disabled>
                        <label for="protein">g/day</label>
                    </td>
                </tr>
                <tr>
                    <td>
                        Carbs
                    </td>
                    <td>
                        <input type="number" name="carbs" id="carbs" disabled>
                        <label for="carbs">g/day</label>
                    </td>
                </tr>
                <tr>
                    <td>
                        Fat
                    </td>
                    <td>
                        <input type="number" name="fat" id="fat" disabled>
                        <label for="fat">g/day</label>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
    <tr>
        <td colspan="2">
            About: 
            <p>
                This calculator will help you determine your macronutrient needs based on your profile and goals. <br>
                It will also provide you with a breakdown of your macronutrient needs based on your dietary preferences. <br>
                Note: <br>
                <ul>
                    <li>1 gram of Protein = 4 calories</li>
                    <li>1 gram of Carbs = 4 calories</li>
                    <li>1 gram of Fat = 9 calories</li>
                </ul>
                <a href="https://www.nal.usda.gov/programs/fnic">[Source]</a>
            </p>
        </td>
    </tr>
</table>
<script>
    disableMacros();
    colorTableGradient('macro-table', '#F7FFF7', '#bde2fc', '#157d5a');

    let weight = 0;
    let targetCalories = 0;
    document.getElementById('calculate').addEventListener('click', function() {
        disableMacros();
        weight = document.getElementById('weight').value;
        let height = document.getElementById('height').value;
        let age = document.getElementById('age').value;
        let bmr = 0;
        if (isImperial) {
            if (document.getElementById('male').checked) {
                bmr = 4.536 * weight + 15.88 * height - 5 * age + 5;
            } else {
                bmr = 4.536 * weight + 15.88 * height - 5 * age - 161;
            }
        } else {
            if (document.getElementById('male').checked) {
                bmr = 10 * weight + 6.25 * height - 5 * age + 5;
            } else {
                bmr = 10 * weight + 6.25 * height - 5 * age - 161;
            }
        }
        let tdee = bmr * parseFloat(document.getElementById('activity-level').value);
        targetCalories = tdee + parseFloat(document.getElementById('goal').value);
        
        document.getElementById('calories').value = targetCalories.toFixed();
        calcBalanced();
    });

    function disableMacros() {
        const proteinInput = document.getElementById('protein');
        proteinInput.disabled = true;

        const carbsInput = document.getElementById('carbs');
        carbsInput.disabled = true;
        
        const fatInput = document.getElementById('fat');
        fatInput.disabled = true;
    }

    document.getElementById('balanced').addEventListener('click', function() {
        document.getElementById('calculate').click();
        disableMacros()
        calcBalanced();
    });

    document.getElementById('low-carb').addEventListener('click', function() {
        document.getElementById('calculate').click();
        disableMacros()
        const protein = Number(weight).toFixed();
        const carbs = (targetCalories * 0.2 / 4).toFixed();
        const fat = ((targetCalories - ((protein * 4) + (carbs * 4))) / 9).toFixed();
        document.getElementById('protein').value  = protein;
        document.getElementById('carbs').value    = carbs;
        document.getElementById('fat').value      = fat;
    });

    document.getElementById('high-carb').addEventListener('click', function() {
        document.getElementById('calculate').click();
        disableMacros()
        const protein = (targetCalories * 0.3 / 4).toFixed();
        const carbs = (targetCalories * 0.5 / 4).toFixed();
        const fat = ((targetCalories - ((protein * 4) + (carbs * 4))) / 9).toFixed();
        document.getElementById('protein').value  = protein;
        document.getElementById('carbs').value    = carbs;
        document.getElementById('fat').value      = fat;
    });

    document.getElementById('high-protein').addEventListener('click', function() {
        document.getElementById('calculate').click();
        disableMacros()
        const protein = (targetCalories * 0.5 / 4).toFixed();
        const carbs = (targetCalories * 0.25 / 4).toFixed();
        const fat = ((targetCalories - ((protein * 4) + (carbs * 4))) / 9).toFixed();
        document.getElementById('protein').value  = protein;
        document.getElementById('carbs').value    = carbs;
        document.getElementById('fat').value      = fat;
    });

    document.getElementById('keto').addEventListener('click', function() {
        document.getElementById('calculate').click();
        disableMacros()
        const protein = Number(weight).toFixed();
        const fat = (targetCalories * 0.50 / 9).toFixed();
        const carbs = ((targetCalories - ((protein * 4) + (fat * 9))) / 4).toFixed();
        document.getElementById('protein').value  = protein;
        document.getElementById('carbs').value    = carbs;
        document.getElementById('fat').value      = fat;
    });

    document.getElementById('custom').addEventListener('click', function() {
        const proteinInput = document.getElementById('protein');
        if (proteinInput < 1) {
            document.getElementById('calculate').click();
        }
        proteinInput.disabled = false;

        const carbsInput = document.getElementById('carbs');
        carbsInput.disabled = false;
        
        const fatInput = document.getElementById('fat');
        fatInput.disabled = false;

        prevProteinValue = proteinInput.value;
        proteinInput.addEventListener('change', function(event) {
            let currentValue = event.target.value;
            const diff = prevProteinValue - currentValue;
            carbsInput.value = (parseFloat(carbsInput.value) + (diff / 2)).toFixed(1);
            fatInput.value   = ((targetCalories - ((currentValue * 4) + (carbsInput.value * 4))) / 9).toFixed(1);
            prevProteinValue = currentValue;
        });

        prevCarbValue = carbsInput.value;
        carbsInput.addEventListener('change', function(event) {
            let currentValue = event.target.value;
            fatInput.value   = ((targetCalories - ((currentValue * 4) + (proteinInput.value * 4))) / 9).toFixed(1);
            prevCarbValue = currentValue;
        });

        prevFatValue = fatInput.value;
        fatInput.addEventListener('change', function(event) {
            let currentValue = event.target.value;
            carbsInput.value   = ((targetCalories - ((currentValue * 9) + (proteinInput.value * 4))) / 4).toFixed(1);
            prevCarbValue = currentValue;
        });
    });

    function calcBalanced() {
        const protein = Number(weight).toFixed();
        const carbs = (targetCalories * 0.3 / 4).toFixed();
        const fat = ((targetCalories - ((protein * 4) + (carbs * 4))) / 9).toFixed();
        document.getElementById('protein').value  = protein;
        document.getElementById('carbs').value    = carbs;
        document.getElementById('fat').value      = fat;
    }

    addHomeButton('main-table');
</script>
