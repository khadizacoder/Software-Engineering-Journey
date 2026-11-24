import { IncomingMessage, ServerResponse } from 'http';
import { coursesService, createCourse } from '../service/course.service';
import type { ICourse } from '../types/course';
import { bodyParser } from '../utils/parseBody';

const coursesController = async (req: IncomingMessage, res: ServerResponse) => {
    const url = req.url;
    const method = req.method;

    const urlParams = url?.split("/");
    console.log(urlParams)
    const id = urlParams && urlParams[1] === "courses" ? Number(urlParams[2]) : null;

    if (url === "/courses" && method === "GET") {
        const courses = coursesService()

        res.writeHead(200, { "content-type": "application/json" })
        res.end(JSON.stringify({
            massage: "Course resive successfully",
            data: courses
        }))
    }
    else if (method === "GET" && id !== null) {
        const courses = coursesService()
        const course = courses.find((c: ICourse) => c.id === id);

        if (!course) {
            res.writeHead(404, { "content-type": "application/json" })
            res.end(JSON.stringify({
                massage: "Course Not Found",
            }))
        }

        res.writeHead(200, { "content-type": "application/json" })
        res.end(JSON.stringify({
            massage: "Course resive successfully",
            data: course
        }))
    }
    else if (url === "/courses" && method === "POST") {
        const body = await bodyParser(req);
        const newCourses = {
            id: Date.now(),
            ...body
        }
        const courses = coursesService()
        courses.push(newCourses);
        createCourse(courses)


        res.writeHead(200, { "content-type": "application/json" })
        res.end(JSON.stringify({
            massage: "Course resive successfully",
            data: courses
        }))
    }
    else if (method === "PUT" && id !== null) {
        const body = await bodyParser(req);
        const courses = coursesService();

        const index = courses.findIndex((p: ICourse) => p.id === id);
        if (index < 0) {
            res.writeHead(404, { "content-type": "application/json" })
            res.end(JSON.stringify({
                massage: "Course Not Found",
            }))
        }

        courses[index] = { id: courses[index].id, ...body }
        createCourse(courses);

        res.writeHead(200, { "content-type": "application/json" })
        res.end(JSON.stringify({
            massage: "Course Updated successfully",
        }))
    }
    else if (method === "DELETE" && id !== null) {
        const courses = coursesService();
        const index = courses.findIndex((c: ICourse) => c.id === c.id);

        if (index < 0) {
            res.writeHead(404, { "content-type": "application/json" })
            res.end(JSON.stringify({
                massage: "Course Not Found",
            }))
        }

        courses.splice(index, 1);
        createCourse(courses)

        res.writeHead(200, { "content-type": "application/json" })
        res.end(JSON.stringify({
            massage: "Course Updated successfully",
        }))
    }
}

export default coursesController;