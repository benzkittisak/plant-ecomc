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

export const selectPlantsForOurProductPreview = createSelector(
  [selectCollections],
  (plants) => {
    let data = {items:[]};
    Object.entries(plants).map((plant) => {
      plant[1].items.map((value) => data.items.push(value));
    });
    return { items:data.items
      .sort(() => Math.random(data.length) - Math.random(data.length))
      .slice(0, 4)}
  }
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
  createSelector([selectCollections], (plants) =>
    plants ? plants[collectionUrlParam] : null
  );

export const selectCollectionFetching = createSelector(
  [selectPlant],
  (plants) => plants.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
  [selectPlant],
  (plants) => !!plants.plants
);

export const selectPlantForDetailPage = (urlParam) =>
  createSelector([selectCollections], (plants) => {
    const params = urlParam.split("/");
    const categoryName = params[0];
    const productName = params[1];

    return plants
      ? Object.assign(
          ...plants[categoryName].items.filter(
            (item) => item.name === productName
          )
        )
      : null;
  });
