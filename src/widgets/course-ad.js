import { Link } from "react-router-dom";

export default function CourseAd() {
    return (
        <>
            <div className="col-md-4 mt-3">
                <div className="card h-100 box">
                    <a href="/course/flutter-course">
                        <img height="200" src="./images/course-ad.jpg" className="card-img-top" alt="Flutter Course" />
                    </a>
                    <div className="card-body">
                        <h5 className="text-center"><a href="/course/flutter-course">Flutter Course</a></h5>
                        <div className="pb-3">
                            <div className="m-0">
                                <span className="badge badge-success">Hindi</span>
                                <i className="fa fa-star text-warning" aria-hidden="true"></i>
                                <i className="fa fa-star text-warning" aria-hidden="true"></i>
                                <i className="fa fa-star text-warning" aria-hidden="true"></i>
                                <i className="fa fa-star text-warning" aria-hidden="true"></i>
                                <i className="fa fa-star-half-o text-warning" aria-hidden="true"></i>
                                <small className="text-primary">4.5</small>
                                <span className="text-primary">(49 Reviews)</span>
                            </div>


                        </div>
                        <div className="py-2">
                            <div className="text-justify">
                                If you are beginner in software development and wanted to start mobile application development. then...
                            </div>
                            <div className="text-justify p-3">
                                Duration: 10Hours<br />
                                Price:
                                <strong className="text-danger"><del>₹8000/-</del></strong>
                                <strong className="text-success">₹650/-</strong>
                                <br />
                                Accessible: <strong className="text-success">Premium</strong>
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="btn-group btn-block">
                                <Link to="/course/flutter-course" className="btn btn-primary">Learn More</Link>
                                <a href="https://larnr.com/checkout/1" className="btn btn-warning">Enroll Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}