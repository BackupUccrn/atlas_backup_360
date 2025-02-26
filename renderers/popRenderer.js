import RasterStretchRenderer from "@arcgis/core/renderers/RasterStretchRenderer";

export const popRenderer = new RasterStretchRenderer({
    stretchType: "standard-deviation",
    numberOfStandardDeviations: 2,
    gamma: [1],
    colorRamp: {
        type: "algorithmic",
        fromColor: [255, 255, 255, 0],  // Transparent for NoData
        toColor: [255, 140, 0, 255]     // Orange ramp
    }
});
