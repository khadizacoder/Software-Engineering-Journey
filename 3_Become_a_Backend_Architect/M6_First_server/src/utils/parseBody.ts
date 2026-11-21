import { IncomingMessage } from 'http';
import { json } from 'stream/consumers';

export const bodyParser = (req: IncomingMessage): Promise<any> => {
    let body = "";
    return new Promise((resolve, reject) => {
        req.on("data", (chunk) => {
            body += chunk;
        })
        req.on("end", () => {
            const trimmed = body.trim();

            // খালি বডি এলে empty object রিটার্ন করুন
            if (!trimmed) {
                return resolve({});
            }
            
            try {
                resolve(JSON.parse(body))
            } catch (error) {
                reject(error)
            }
        })
    })
}