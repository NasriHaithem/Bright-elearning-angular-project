import { CourseRate } from "../courseRate/course-rate";
import { CourseReview } from "../courseReview/course-review";
import { Enrollment } from "../enrollment/enrollment";

export class Student{
    constructor(
        public id?: Number,
        public firstname?: String,
        public lastname?: String,
        public email?: String,
        public password?: String,
        public isEnabled?: Boolean,
        public photo?: String,
        public ratings?: CourseRate[],
        public enrollments?: Enrollment[],
        public courseReviews?: CourseReview[],
    ) {
    }
}
