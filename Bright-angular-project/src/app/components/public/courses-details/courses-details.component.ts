import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Course } from 'src/app/models/course/course';
import { CourseRate } from 'src/app/models/courseRate/course-rate';
import { CourseReview } from 'src/app/models/courseReview/course-review';
import { Enrollment } from 'src/app/models/enrollment/enrollment';
import { Student } from 'src/app/models/student/student';
import { CourseService } from 'src/app/service/course/course.service';
import { EnrollmentService } from 'src/app/service/enrollment/enrollment.service';
import { RatingService } from 'src/app/service/rating/rating.service';
import { ReviewService } from 'src/app/service/review/review.service';
import { StudentService } from 'src/app/service/student/student.service';

@Component({
    selector: 'app-courses-details',
    templateUrl: './courses-details.component.html',
    styleUrls: ['./courses-details.component.css']
})
export class CoursesDetailsComponent implements OnInit {
    @HostListener('click', ['$event']) onClick(event) {
        const ignoreClickOnMeElement = document.getElementById('my-video');
        const isClickInsideElement = ignoreClickOnMeElement.contains(event.target);
        if (!isClickInsideElement) {
            this.pauseVideo()
        }
    }
    reviewTxt: string = '';
    isEnrolled: boolean;
    fiveStarsPercent: number = 0;
    fourStarsPercent: number = 0;
    threeStarsPercent: number = 0;
    twoStarsPercent: number = 0;
    oneStarsPercent: number = 0;
    score: number = 0;
    courseDetails: Course;
    constructor(
        private courseService: CourseService,
        private studentService: StudentService,
        private ratingService: RatingService,
        private reviewService: ReviewService,
        private enrollmentService: EnrollmentService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.getCourseDetails();
    }
    pauseVideo() {
        const targetVideo = <HTMLVideoElement>document.getElementById('my-video');

        if (!targetVideo.paused) {
            targetVideo.pause();
            console.log("paused");
        }
    }
    playVideo() {
        const targetVideo = <HTMLVideoElement>document.getElementById('my-video');
        targetVideo.play()
    }

    getCourseDetails() {        
        const courseId = Number.parseInt(this.route.snapshot.paramMap.get('id'));
        this.courseService.getCourseById(courseId).subscribe(
            (resp) => {
                this.courseDetails = resp.result;
                this.assignCourseRates(this.courseDetails.ratings);
                this.score = this.getCourseScore(this.courseDetails);
                this.adjustProgressBars();

            },
            (err) => console.log(err)
        )
    }
    assignCourseRates(ratings: CourseRate[]) {
        const ratesTotal: number = ratings.length;

        for (const rate of ratings) {
            switch (rate.rating) {
                case 5:
                    this.fiveStarsPercent += (1 / ratesTotal) * 100;
                    break;
                case 4:
                    this.fourStarsPercent += (1 / ratesTotal) * 100;
                    break;
                case 3:
                    this.threeStarsPercent += (1 / ratesTotal) * 100;
                    break;
                case 2:
                    this.twoStarsPercent += (1 / ratesTotal) * 100;
                    break;
                case 1:
                    this.oneStarsPercent += (1 / ratesTotal) * 100;
                    break;
                default:
                    break;
            }
        }
    }
    adjustProgressBars() {
        let five = document.getElementById('bar-rate-5');
        let four = document.getElementById('bar-rate-4');
        let three = document.getElementById('bar-rate-3');
        let two = document.getElementById('bar-rate-2');
        let one = document.getElementById('bar-rate-1');

        five.style.width = `${this.fiveStarsPercent}%`
        four.style.width = `${this.fourStarsPercent}%`
        three.style.width = `${this.threeStarsPercent}%`
        two.style.width = `${this.twoStarsPercent}%`
        one.style.width = `${this.oneStarsPercent}%`

    }
    getCourseScore(course: Course) {
        let score: number = 0;
        const ratingsArrayLength = course.ratings.length;
        
        score = 
        this.fiveStarsPercent * 0.05 +
        this.fourStarsPercent * 0.04 +
        this.threeStarsPercent * 0.03 +
        this.twoStarsPercent * 0.02 +
        this.oneStarsPercent * 0.01

        return score
    }
    getStudentRating(review: CourseReview, course: Course) {

        for (const rating of course.ratings) {
            if (review.student.id == rating.student.id) {
                return rating.rating;
            }
        }
        return 0;
    }

    isLoggedInStudent() {
        return this.studentService.isLoggedInStudent()
    }


    rateThisCourse(event: Event, course: Course) {
        let token = localStorage.getItem("myToken");
        const helper = new JwtHelperService();
        const decodedToken = helper.decodeToken(token);

        let iconId: string = (event.target as Element).id;
        let iconClasses = (event.target as Element).classList;

        iconClasses.toggle('far');
        iconClasses.toggle('fas');


        const student: Student = decodedToken.data;
        const rating: number = Number.parseInt(iconId.slice(-1));
        const rateCompositeId = {
            studentId: student.id,
            courseId: course.id
        }
        const newRating = new CourseRate(rateCompositeId, student, course, rating);
        this.ratingService.addRate(newRating).subscribe(
            (result) => {
                this.courseDetails.ratings.push(newRating);
            }
        )
    }

    submitReview(course: Course) {
        if (this.reviewTxt.length >= 3) {
            let token = localStorage.getItem("myToken");
            const helper = new JwtHelperService();
            const decodedToken = helper.decodeToken(token);

            const student: Student = decodedToken.data;
            const newReview = new CourseReview(undefined, student, course, this.reviewTxt);

            this.reviewService.addReview(newReview).subscribe(
                (result) => {
                    this.reviewTxt = '';
                    this.courseDetails.courseReviews.push(newReview);
                },
                (err) => console.log(err)
            )
        }
    }

    sortReviewsByDate(reviews: CourseReview[]) {
        reviews.sort((r2, r1) => new Date(r1.review_date).getTime() - new Date(r2.review_date).getTime());
    }
    sortReviewsByRate(reviews: CourseReview[]) {
        reviews.sort((r2, r1) => this.getStudentRating(r1, this.courseDetails).valueOf() - this.getStudentRating(r2, this.courseDetails).valueOf());
    }


    enroll() {
        let token = localStorage.getItem("myToken");
        if (token) {
            const helper = new JwtHelperService();
            const decodedToken = helper.decodeToken(token);

            const studentEnrollments: Enrollment[] = decodedToken.data.enrollments;
            const studentId: Number = decodedToken.data.id;
            const courseId: Number = this.courseDetails.id;

            const newEnrolledStudent: Student = new Student(studentId);
            const courseToEnroll: Course = new Student(courseId);
            const enrollCompositeKey: any = {
                id: {
                    studentId: studentId,
                    courseId: courseId
                }
            }
            this.enrollmentService.addEnrollment(new Enrollment(enrollCompositeKey, newEnrolledStudent, courseToEnroll)).subscribe(
                (res) => {
                    console.log("enrollment added successfully")
                    this.goToCourse();
                },
                (err) => {
                    this.router.navigate(['/student/courses/content', courseId])
                }        
            )
        }
    }

    goToCourse() {
        this.router.navigate(['/student/courses/content', this.courseDetails.id])
    }
}
