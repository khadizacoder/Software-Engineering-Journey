import { createServer, IncomingMessage, ServerResponse } from "http";
import routeHandler from "./routes/route";
import config from "./config";

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
    // console.log("request -> ",req)
    // console.log("Response -> ", res)

    // console.log(req.url)
    // console.log(req.method)

    /*********************
    const url = req.url; // "/", "/products", "/courses"
    const method = req.method; // "GET", "POST"

    if(url === "/" && method === "GET"){
        // console.log("This is Home page or root route")

        // res.writeHead(200, {"content-type": "text/plain"});
        res.writeHead(200, {"content-type": "application/json"});
        res.end(JSON.stringify({massage: "This is root route"}))
    }
    else if(url?.startsWith("/products")){
        res.writeHead(200, {"content-type": "application/json"});
        res.end(JSON.stringify({massage : "This is Products route"}))
    }
    else if(url?.startsWith("/courses")){
        res.writeHead(200, {"content-type" : "application/json"})
        res.end(JSON.stringify({massage : "This is Courses route"}))
    }
    else {
        // console.log("This route is not defiend")

        // res.writeHead(200, {"content-type": "text/plain"});
        res.writeHead(404, {"content-type": "application/json"});
        res.end(JSON.stringify({massage: "This route is not defiend"}))
    }
    *********************/

    routeHandler(req, res);
})

server.listen(config.port, () => {
    console.log("Server is running on the port", config.port)
})