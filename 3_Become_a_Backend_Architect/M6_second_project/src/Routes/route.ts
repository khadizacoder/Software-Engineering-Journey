import type { IncomingMessage, ServerResponse } from "http";
import productController from "../controllers/product.controller";
import coursesController from "../controllers/courses.controller";

const routeHandler = (req : IncomingMessage, res : ServerResponse) => {
    const url = req.url;
    const method = req.method;

    if(url === "/" && method === "GET")
    {
        // res.writeHead(200, {"content-type" : "text/plain"})
        // res.end("This is root route")
        res.writeHead(200, {"content-type" : "application/json"})
        res.end(JSON.stringify({massage : "This is root route"}))
    }
    else if(url?.startsWith("/products")){
        productController(req, res)
    }
    else if(url?.startsWith("/courses")){
        coursesController(req, res)
    }
    else{
        res.writeHead(404, {"content-type" : "application/json"})
        res.end(JSON.stringify({massage : "This route not defiend"}))
    }
}

export default routeHandler;