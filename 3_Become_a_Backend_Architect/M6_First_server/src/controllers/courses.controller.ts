import type { IncomingMessage, ServerResponse } from "http";

const coursesController = (req : IncomingMessage, res : ServerResponse) => {
    res.writeHead(200, {"content-type" : "application/json"});
    res.end(JSON.stringify({massage : "this is courses route"}))
}

export default coursesController;