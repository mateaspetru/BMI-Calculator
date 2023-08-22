# BMI Calculator Documentation

This document provides a simple overview of the code that implements a BMI calculator on a web page. The calculator allows the user to input their weight and height to calculate and display their body mass index.

## File Structure

### 1. index.html

The HTML file contains the structure of the web page and the BMI calculator form

### 2. style.css

The CSS for styling the page

### 3. main.js

The JavaScript file responsible for the BMI calculator functionality

## File index.html

- In the `<head>` section, metadata, charset, viewport, and page title are specified.
- In the `<body>` section, the BMI calculator form is defined. It includes fields for weight and height, as well as a calculation button.
- The calculation result will be displayed in an element with the class result.
- A script `<script type="module" src="/main.js"></script>` is included to connect the calculator functionality from the JavaScript file main.js.

## File main.js

- The script begins by importing the CSS file style.css to apply appropriate styling.
- A listener is defined for the "DOMContentLoaded" event, triggered when the entire page structure has loaded in the browser.
- The query string from the page's URL is extracted to retrieve the weight and height parameters from the URL.
- The BMI index is calculated using the standard formula: BMI = weight / (height \* height).
- If valid values for weight, height, and BMI are present (not null or NaN), the result is displayed within the result element.
- Otherwise, a default result with values "0 kg", "0 m", and "0%" is displayed.

## Styling (style.css)

- This file contains CSS styles to give the page a visually pleasing and easily understandable appearance.

## Website address

app-for-test.surge.sh
