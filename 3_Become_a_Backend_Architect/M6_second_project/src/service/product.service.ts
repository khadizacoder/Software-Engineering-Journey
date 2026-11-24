import fs from "fs";
import path, { join } from "path";

const filePath = path.join(process.cwd(), "./src/database/db.json")

export const productService = () => {
    const result = fs.readFileSync(filePath, "utf-8")
    // console.log(result.toString())
    return JSON.parse(result)
}

export const createProduct = (payLoad : any) => {
    fs.writeFileSync(filePath, JSON.stringify(payLoad))
}