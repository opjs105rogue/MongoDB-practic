import * as uuid from "uuid";
import * as path from "path";

class fileService {
    saveFile(file) {
        try {
            if (!file) {
                return null; 
            }
            const fileName = uuid.v4() + ".jpg"; 
            const filePath = path.resolve('pictures', fileName);
            file.mv(filePath);
            return fileName;

        } catch(err) {
            console.log(err);
            
        }
    }
}

export default new fileService();