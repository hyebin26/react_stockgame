import { firebaseDB } from "./firebase";

class Database {
  saveUserData(userId, user) {
    firebaseDB.ref(`users/${userId}`).set({
      user,
    });
  }
  saveStockData(userId, stocks) {
    firebaseDB.ref(`users/${userId}`).set({
      stocks,
    });
  }
  loadData(userId, updateData) {
    const dataRef = firebaseDB.ref(`users/${userId}`);
    dataRef.on("value", (snapshot) => {
      const data = snapshot.val();
      updateData(data);
    });
  }
}

export default Database;
