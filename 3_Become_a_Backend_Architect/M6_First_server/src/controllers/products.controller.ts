import { REFUSED } from "dns";
import type { ServerResponse } from "http";
import { IncomingMessage } from 'http';
import { createProduct, productService } from "../service/product.service";
import { type IProduct } from '../types/product';
import { bodyParser } from "../utils/parseBody";
import { sendResponse } from "../utils/sendResponse";

const productController = async (req: IncomingMessage, res: ServerResponse) => {

    const url = req.url;
    const method = req.method;
    const urlParams = url?.split("/")
    // console.log(urlParams)
    const id = urlParams && urlParams[1] === "products" ? Number(urlParams[2]) : null;
    console.log(id)

    // get all products
    if (url === "/products" && method == "GET") {
        // const products = [
        //     {id: 0, name: "bottle", price: 1000},
        //     {id: 1, name: "phone", price: 10000},
        //     {id: 2, name: "laptop", price: 120000},
        // ];
        const products = productService();

        try {
            sendResponse(res, true, 200, "Product resive successfull", products)
        } catch (error) {
            sendResponse(res, false, 500, "Internal server error", error)
        }
    }
    else if (method === "GET" && id !== null) {
        const products = productService(); // [{}, {}, {}]
        const product = products.find((p: IProduct) => p.id === id)

        if (!product) {
            sendResponse(res, false, 404, `Product NOT Found`)
            return;
        }

        try {
            sendResponse(res, true, 200, `Product resive successfull`, product)
        } catch (error) {
            sendResponse(res, false, 500, `Internal server error`, error)
        }
    }
    else if (method === "POST" && url === "/products") {

        const body = await bodyParser(req)
        // console.log(body)
        const newProduct = {
            id: Date.now(),
            ...body
        }
        // console.log(newProduct)

        const products = productService(); // [{}, {}]
        products.push(newProduct) // [{}, {}, {new}]

        createProduct(products)

        res.writeHead(201, { "content-type": "application/json" })
        res.end(JSON.stringify({
            massage: `Product created successfull`,
            data: newProduct
        }))
    }
    else if (method === "PUT" && id !== null) {
        const body = await bodyParser(req)
        const products = productService(); // [{}, {}]

        const index = products.findIndex((p: IProduct) => p.id === id);

        // console.log(index)
        if (index < 0) {
            res.writeHead(404, { "content-type": "application/json" })
            res.end(JSON.stringify({
                massage: `Product NOT Found`,
            }))
            return;
        }

        // console.log(products[index])

        products[index] = { id: products[index].id, ...body }
        createProduct(products)

        res.writeHead(200, { "content-type": "application/json" })
        res.end(JSON.stringify({
            massage: `Product Update successfull`,
            data: products[index]
        }))
    }
    else if (method === "DELETE" && id !== null) {
        const products = productService(); // [{}, {}]

        const index = products.findIndex((p: IProduct) => p.id === id);
        if (index < 0) {
            res.writeHead(404, { "content-type": "application/json" });
            res.end(JSON.stringify({ massage: "Product not found" }))
        }

        // const arr = ["a", "b", "c"]
        // console.log(arr.splice(2, 1))
        // arr.splice(2, 1);
        // console.log(arr)

        products.splice(index, 1);
        createProduct(products);

        res.writeHead(200, { "content-type": "application/json" })
        res.end(JSON.stringify({
            massage: `Product Deleted successfull`,
        }))
    }
}

export default productController;