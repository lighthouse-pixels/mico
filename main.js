// Function to calculate shades and tints
function calculateTints(hue, saturation, lightness) {

    let tints = {};


    // Calculate tints
    tints["100"] = `hsl(${hue}, ${saturation}, ${Math.min(lightness + 10, 100).toFixed(2)}%)`;
    tints["200"] = `hsl(${hue}, ${saturation}, ${Math.min(lightness + 20, 100).toFixed(2)}%)`;
    tints["300"] = `hsl(${hue}, ${saturation}, ${Math.min(lightness + 30, 100).toFixed(2)}%)`;
    tints["400"] = `hsl(${hue}, ${saturation}, ${Math.min(lightness + 40, 100).toFixed(2)}%)`;
    tints["500"] = `hsl(${hue}, ${saturation}, ${Math.min(lightness + 50, 100).toFixed(2)}%)`;
    tints["600"] = `hsl(${hue}, ${saturation}, ${Math.min(lightness + 60, 100).toFixed(2)}%)`;
    tints["700"] = `hsl(${hue}, ${saturation}, ${Math.min(lightness + 70, 100).toFixed(2)}%)`;
    tints["800"] = `hsl(${hue}, ${saturation}, ${Math.min(lightness + 80, 100).toFixed(2)}%)`;
    tints["900"] = `hsl(${hue}, ${saturation}, ${Math.min(lightness + 90, 100).toFixed(2)}%)`;

    return { tints };
}

// Base color values
const primaryHue = 236.84;
const primarySaturation = "46.34%";
const primaryLightness = "8.04%";

// Calculate shades and tints
const { tints } = calculateTints(primaryHue, primarySaturation, parseFloat(primaryLightness));

// Generate CSS text for tints
let tintsCSS = "";
Object.keys(tints).forEach((key) => {
    tintsCSS += `--primary-color-tint-${key}: ${tints[key]};\n`;
});

// Get the style element in your external CSS file
const styleElement = document.createElement('style');
styleElement.id = 'mico-css';
styleElement.textContent = `
    :root {
        ${tintsCSS}
    }

    /* Your custom CSS goes here */
    div {
        color: var(--primary-color-100);
        background-color: var(--primary-color-300);
        border: 2px solid var(--primary-color-200);
    }
`;

// Insert the style element before the first stylesheet in the head
const head = document.head || document.getElementsByTagName('head')[0];
if (head) {
    head.insertBefore(styleElement, head.firstChild);
}




    // Function to highlight specific text
    function highlightText(element, targetText) {
        // Get the text content of the element
        const text = element.textContent;

        // Create a regular expression to match the target text
        const regex = new RegExp(targetText, 'gi');

        // Replace the target text with a span element containing the highlighted text
        const highlightedText = text.replace(regex, '<span class="highlight">$&</span>');

        // Update the element's HTML with the highlighted text
        element.innerHTML = highlightedText;
    }

    // Get the element containing the text to highlight
    const element = document.querySelector('.text');

    // Call the highlightText function with the element and target text
    highlightText(element, 'an example');


