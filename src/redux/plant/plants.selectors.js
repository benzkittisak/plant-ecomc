import { createSelector } from "reselect";

const selectPlant = (state) => state.plants;

export const selectCollections = createSelector(
  [selectPlant],
  (plants) => plants.plants
);

export const selectPlantsForPreview = createSelector(
  [selectCollections],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

export const selectRandomPlantForOurProduct = createSelector(
  [selectCollections],
  (collections) => {
    const data = [];
    Object.entries(collections).map((plant) =>
      plant[1].items.map((value) => data.push(value))
    );
    return data.sort(() =>Math.random(data.length) - Math.random(data.length)).slice(0,4);
  }
);

export const selectCollection = (collectionUrlParam) =>
  createSelector(
    [selectCollections],
    (collections) => collections[collectionUrlParam]
  );
