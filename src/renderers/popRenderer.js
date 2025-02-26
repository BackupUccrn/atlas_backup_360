import RasterStretchRenderer from "@arcgis/core/renderers/RasterStretchRenderer";
import RasterStretchRenderer from "@arcgis/core/renderers/RasterStretchRenderer.js";
export const popRenderer = new RasterStretchRenderer({
    stretchType: "standard-deviation", // Stretching with standard deviation
    numberOfStandardDeviations: 2, // 2 standard deviations
    gamma: [1], // Gamma correction

    // Color ramp from white (transparent) to orange
        colorRamp: {
        type: "algorithmic",
        fromColor: [255, 255, 255, 0],  // White transparent (NoData)
        toColor: [255, 140, 0, 255]  // Orange
    }
});
