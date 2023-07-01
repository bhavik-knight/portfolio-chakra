import { app } from "./Firebase"
import { getFirestore, getDocs, collection } from "firebase/firestore"


async function getData(pageName) {
    try {
        const db = getFirestore(app)
        const pageRef = collection(db, pageName)
        const querySnapshot = await getDocs(pageRef)
        let newData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        return newData.reverse()
    } catch (error) {
        throw `Sorry! Unable to fetch the data for ${page}. ${error.message}`
    }
}

export { getData }
