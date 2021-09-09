import { Course } from "../course/course";
import { Student } from "../student/student";

export class CourseReview {
    constructor(
        public id?: any,
        public student?: Student,
        public course?: Course,
        public comment?: String
    ) {}
}
/*
@Id
    @GeneratedValue
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "student_id")
    @JsonIgnoreProperties("courseReviews")
    private Student student;

    @ManyToOne
    @JoinColumn(name = "course_id")
    @JsonIgnoreProperties("courseReviews")
    private Course course;

    private Calendar review_date = new GregorianCalendar();
    private String comment;
*/