import { firebaseDB } from "./firebase";

class Database {
  async saveUserData(userId, data) {
    await firebaseDB.ref(`users/${userId}/user`).set(data);
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
  async deleteData(userId) {
    await firebaseDB.ref(`users/${userId}`).remove();
  }
}

export default Database;
