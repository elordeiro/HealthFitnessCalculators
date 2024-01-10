---
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=<device-width>, initial-scale=0.8">
    <title>BMR</title>
    <!-- <link rel="stylesheet" href="../style.css"> -->
    <script src="../script.js"></script>
</head>
<table id="main-table" style="min-width: 500px;">
    <th colspan="2">
        BMR Calculator
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
        <td colspan="2" style="text-align: center;">
            <button id="calculate">Calculate</button>
        </td>
    </tr>
    <tr>
        <td>
            BMR:
        </td>
        <td>
            <input type="number" name="bmr" id="bmr" disabled>
        </td>
    </tr>
    <tr>
        <td colspan="2">
            What is BMR? <br>
            <p>
                BMR stands for Basal Metabolic Rate. It is the amount of energy expended while at rest in a neutral environment. In other words, it is the amount of energy your body needs to function while you are not doing anything. This includes breathing, blood circulation, cell production, nutrient processing, and more. It is the minimum amount of energy your body needs to function. To get a more accurate estimate of your daily caloric needs, you can use the <a href="TDEE.html">TDEE</a> calculator.
            </p>
            <a href="https://integrisok.com/resources/on-your-health/2023/april/what-is-bmr" target="_blank">[Source]</a>
        </td>
    </tr>
</table>
<script>
    document.getElementById('calculate').addEventListener('click', function () {
        let weight = document.getElementById('weight').value;
        let height = document.getElementById('height').value;
        let age = document.getElementById('age').value;
        let bmr = 0;
        if (document.getElementById('imperial').checked) {
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
        document.getElementById('bmr').value = bmr.toFixed();
    });

    addHomeButton('main-table');
</script>