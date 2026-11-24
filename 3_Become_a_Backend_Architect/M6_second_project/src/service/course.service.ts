import path from "path";
import fs from 'fs';

const filePath = path.join(process.cwd(), "./src/database/course_db.json")

export const coursesService = () => {
    const result = fs.readFileSync(filePath, "utf-8")
    return JSON.parse(result)
}

export const createCourse = (payLoad : any) => {
fs.writeFileSync(filePath, JSON.stringify(payLoad))
} 