  
import { db } from ".."

const firestoreSvc = {
    async getCategories() {
        return db.collection("category").get()
    }
}


export default firestoreSvc;