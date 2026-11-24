import { IncomingMessage, ServerResponse } from 'http';
import { createProduct, productService } from '../service/product.service';
import type { IProduct } from '../types/product';
import { bodyParser } from '../utils/parseBody';
import { sendResponse } from '../utils/sendResponse';

const productController = async (req: IncomingMessage, res: ServerResponse) => {
    const url = req.url;
    const method = req.method;
    // console.log(url) //     -> /products/1 -> ["", "products", "1"]
    const urlParams = url?.split("/");
    const id = urlParams && urlParams[1] === "products" ? Number(urlParams[2]) : null;
    // console.log(id)

    // Get all product
    if (url === "/products" && method === "GET") {
        const products = productService();

        try {
            sendResponse(res, true, 200, "Produces resived successfully", products)
        } catch (error) {
            sendResponse(res, false, 404, "Internal server error")
        }
    }
    else if (method === "GET" && id !== null) {
        const products = productService();
        const product = products.find((p: IProduct) => p.id === id)

        if (!product) {
            sendResponse(res, false, 404, "Internal server error")
            return;
        }

        try {
            sendResponse(res, true, 200, "Product resived successfully", product)
        } catch (error) {
            sendResponse(res, false, 404, "Internal server error")
        }
    }
    else if (method === "POST" && url === "/products") {
        const body = await bodyParser(req);
        // console.log(body)
        const newProduct = {
            id: Date.now(),
            ...body
        }
        const products = productService();
        products.push(newProduct);
        createProduct(products)

        try {
            sendResponse(res, true, 201, "Product created successfully!")
        } catch (error) {
            sendResponse(res, false, 404, "Internal server error")
        }
    }
    else if (method === "PUT" && id !== null) {
        const body = await bodyParser(req);
        const products = productService();

        const index = products.findIndex((p: IProduct) => p.id === id)
        // console.log(index)
        if (index < 0) {
            sendResponse(res, false, 404, "Internal server error")
            return;
        }

        products[index] = { id: products[index].id, ...body };
        createProduct(products);

        try {
            sendResponse(res, true, 201, "Product Updated successfully!")
        } catch (error) {
            sendResponse(res, false, 404, "Internal server error")
        }
    }
    else if (method === "DELETE" && id !== null) {
        const products = productService();

        const index = products.findIndex((p: IProduct) => p.id === id)
        if (index < 0) {
            sendResponse(res, false, 404, "Internal server error")
            return;
        }

        // const arr = ["a", "b"];
        // console.log(arr.splice(0, 1))
        products.splice(index, 1);
        createProduct(products)

        try {
            sendResponse(res, true, 201, "Product Deleted successfully!")
        } catch (error) {
            sendResponse(res, false, 404, "Internal server error")
        }
    }
}

export default productController;