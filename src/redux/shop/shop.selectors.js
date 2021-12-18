import { createSelector } from "reselect";

const selectPlant = (state) => state.shop;

export const selectCollections = createSelector(
  [selectPlant],
  (shop) => shop.plants
);

export const selectPlantsForPreview = createSelector(
  [selectCollections],
  (plants) => Object.keys(plants).map((key) => plants[key])
);

export const selectRandomPlantForOurProduct = createSelector(
  [selectCollections],
  (plants) => {
    const data = [];
    Object.entries(plants).map((plant) =>
      plant[1].items.map((value) => data.push(value))
    );
    return data
      .sort(() => Math.random(data.length) - Math.random(data.length))
      .slice(0, 4);
  }
);

export const selectCollection = (collectionUrlParam) =>
  createSelector(
    [selectCollections],
    (plants) =>plants ? plants[collectionUrlParam] : null
  );

export const selectCollectionFetching = createSelector(
  [selectPlant],
  plants => plants.isFetching
)

export const selectIsCollectionsLoaded = createSelector(
  [selectPlant],
  plants => !!plants.plants
)