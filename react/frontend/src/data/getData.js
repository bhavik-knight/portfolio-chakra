import { app } from "./firebase";
import { getFirestore, getDocs, collection } from "firebase/firestore";

async function getData(pageName) {
    try {
        const db = getFirestore(app);
        const pageRef = collection(db, pageName);
        const querySnapshot = await getDocs(pageRef);
        let newData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        newData.sort((a, b) => a.id - b.id);
        return newData.reverse();
    } catch (error) {
        throw `Sorry! Unable to fetch the data for ${page}. ${error.message}`;
    }
}

export { getData };
