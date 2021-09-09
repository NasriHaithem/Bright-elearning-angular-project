import { Course } from "../course/course";
import { Lesson } from "../lesson/lesson";

export class Module {
    constructor(
        public id?: Number,
        public moduleName?: String,
        public course?: Course,
        public lessons?: Lesson[]
    ) {}
}
