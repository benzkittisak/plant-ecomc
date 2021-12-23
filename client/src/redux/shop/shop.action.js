import ShopActionTypes from "./shop.type";

export const fetchCollectionStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionSuccess = (plants) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: plants,
});

export const fetchCollectionFailure = (error) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: error,
});

// เริ่มโหลดข้อมูลจาก firebase โดยใช้ redux thunk
// export const fetchCollectionStartAsync = () => {
//   return (dispatch) => {
//     const collectionRef = firestore.collection("collections");
//     dispatch(fetchCollectionStart());
//     collectionRef
//       .get()
//       .then((snapshot) => {
//         const collectionMap = convertCollectionsFromFirebaseToMap(snapshot);
//         dispatch(fetchCollectionSuccess(collectionMap));
//       })
//       .catch((error) => dispatch(fetchCollectionFailure(error.message)));
//   };
// };
