import { IncomingMessage, ServerResponse } from 'http';
import productController from '../controllers/products.controller';
import coursesController from '../controllers/courses.controller';
const routeHandler = (req: IncomingMessage, res : ServerResponse) => {
    
    const url = req.url; // "/", "/products", "/courses"
    const method = req.method; // "GET", "POST", "PUT"

    if(url === "/" && method === "GET"){
        // console.log("This is Home page or root route")

        // res.writeHead(200, {"content-type": "text/plain"});
        res.writeHead(200, {"content-type": "application/json"});
        res.end(JSON.stringify({massage: "This is root route"}))
    }
    else if(url?.startsWith("/products")){
        productController(req,res);
    }
    else if(url?.startsWith("/courses")){
        coursesController(req, res)
    }
    else {
        // console.log("This route is not defiend")

        // res.writeHead(200, {"content-type": "text/plain"});
        res.writeHead(404, {"content-type": "application/json"});
        res.end(JSON.stringify({massage: "This route is not defiend"}))
    }
}

export default routeHandler;