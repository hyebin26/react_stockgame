import { firebaseDB } from "./firebase";

class Database {
  async saveUserData(userId, user) {
    firebaseDB.ref(`users/${userId}`).set({
      user,
    });
  }
  async saveStockData(userId, stocks) {
    firebaseDB.ref(`users/${userId}`).set({
      stocks,
    });
  }
  loadData() {}
}

export default Database;
