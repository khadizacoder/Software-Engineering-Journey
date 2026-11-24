import { createServer, IncomingMessage, Server, ServerResponse } from "http";
import routeHandler from "./Routes/route";
import { config } from "./config";

const server : Server = createServer((req : IncomingMessage, res : ServerResponse) => {
    // console.log("Response -> ",res)
    routeHandler(req, res)
})


server.listen(config.port, () => {
    console.log(`Server running on the port ${config.port}`)
})