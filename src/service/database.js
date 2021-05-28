import { firebaseDB } from "./firebase";

class Database {
  async saveUserData(userId, user) {
    await firebaseDB.ref(`users/${userId}/user`).set(user);
  }
  async saveStockData(userId, stocks) {
    await firebaseDB.ref(`users/${userId}/stocks`).set(stocks);
  }
  async loadData(userId, updateData) {
    const dataRef = await firebaseDB.ref(`users/${userId}`);
    dataRef.on("value", (snapshot) => {
      const data = snapshot.val();
      updateData(data);
    });
  }
}

export default Database;
