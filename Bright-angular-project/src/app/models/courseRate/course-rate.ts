import { Course } from "../course/course";
import { Student } from "../student/student";

export class CourseRate {
    constructor(
        public id?: any,
        public student?: Student,
        public course?: Course,
        public rating?: Number
    ) {}
}

/*
@EmbeddedId
    private CourseStudentCompositeKey id;

    @ManyToOne
    @MapsId("studentId")
    @JoinColumn(name = "student_id")
    @JsonIgnoreProperties("ratings")
    private Student student;

    @ManyToOne
    @MapsId("courseId")
    @JoinColumn(name = "course_id")
    @JsonIgnoreProperties("ratings")
    private Course course;

    private int rating;
*/
