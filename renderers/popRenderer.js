import RasterStretchRenderer from "@arcgis/core/renderers/RasterStretchRenderer";

export const popRenderer = new RasterStretchRenderer({
    stretchType: "standardDeviation", // Stretching with standard deviation
    numberOfStandardDeviations: 2, // 2 standard deviations
    gamma: [1], // Gamma correction

    // Color ramp from white (transparent) to orange
    colorRamp: {
        type: "algorithmic",
        fromColor: [255, 255, 255, 0], // White fully transparent (NoData)
        toColor: [255, 140, 0, 255] // Orange fully visible
    },

    statistics: [
        {
            min: 1,  // Ignore zero values
            max: 10000000, // Adjust max based on your dataset
            mean: 1000, // Example mean
            standardDeviation: 2000 // Example standard deviation
        }
    ]
});
