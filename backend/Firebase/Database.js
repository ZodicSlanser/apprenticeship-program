import admin from "firebase-admin";
import firestore from "firebase-admin";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const serviceAccount = require("../secrets/privateKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const db = firestore.firestore();
db.settings({ ignoreUndefinedProperties: true });

export default admin.firestore;
