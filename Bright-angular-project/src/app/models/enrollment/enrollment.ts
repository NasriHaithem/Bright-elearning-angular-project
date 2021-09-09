import { Course } from "../course/course";
import { Student } from "../student/student";

export class Enrollment {
    constructor(
        public id?: any,
        public student?: Student,
        public course?: Course,
        public enrollment_date?: Date,
        public progress?: Number
    ) {}
}
/*
@EmbeddedId
    private CourseStudentCompositeKey id;

    @ManyToOne
    @MapsId("studentId")
    @JoinColumn(name = "student_id")
    @JsonIgnoreProperties("enrollments")
    private Student student;

    @ManyToOne
    @MapsId("courseId")
    @JoinColumn(name = "course_id")
    @JsonIgnoreProperties("enrollments")
    private Course course;

    private Calendar enrollment_date = new GregorianCalendar();
    private float progress = 0;
*/