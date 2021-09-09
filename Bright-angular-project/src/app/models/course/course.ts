import { CourseCategory } from "../courseCategory/course-category";
import { CourseRate } from "../courseRate/course-rate";
import { CourseReview } from "../courseReview/course-review";
import { Enrollment } from "../enrollment/enrollment";
import { Instructor } from "../instructor/instructor";
import { Module } from "../module/module";

export class Course {
    constructor(
        public id?: Number,
        public title?: String,
        public price?: Number,
        public overview?: String,
        public course_image?: String,
        public difficulty?: String,
        public estimated_duration?: String,
        public introduction_video?: String,
        public instructor?: Instructor,
        public courseCategory?: CourseCategory,
        public date_of_creation?: Date,
        public modules?: Module[],
        public ratings?: CourseRate[],
        public enrollments?: Enrollment[],
        public courseReviews?: CourseReview[],
    ) {}
}
/*
   
*/