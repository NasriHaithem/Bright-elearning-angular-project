import { Module } from "../module/module";


export class Lesson {
    constructor(
        public id?: Number,
        public lessonName?: String,
        public description?: String,
        public lessonVideo?: String,
        public seen?: Boolean,
        public module?: Module
    ) {}
}
