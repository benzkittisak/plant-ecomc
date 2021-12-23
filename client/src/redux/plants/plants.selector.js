import { createSelector } from "reselect";

const selectPlant = state => state.plants;

export const selectPlantSection = createSelector(
    [selectPlant],
    plants => plants.sections
)