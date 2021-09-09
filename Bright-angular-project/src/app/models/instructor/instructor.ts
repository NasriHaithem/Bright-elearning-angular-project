import { Course } from "../course/course";

export class Instructor{
    constructor(
        public id?: Number,
        public firstname?: String,
        public lastname?: String,
        public email?: String,
        public password?: String,
        public profession?: String,
        public isEnabled?: Boolean,
        public photo?: String,
        public origin?: String,
        public phone?: String,
        public brief_Introduction?: Boolean,
        public experience?: String,
        public education?: String,
        public facebook?: String,
        public linkedIn?: String,
        public github?: String,
        public courses?: Course[],

    ) {
    }
}
