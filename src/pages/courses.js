import CopyRight from "../copyright";
import Footer from "../footer";
import Header from "../header";
import AdCard from "../widgets/AdCard";
import CourseAd from "../widgets/course-ad";

export default function Courses() {
    return (
        <div>
            <Header/>
            <div style={{marginTop:"50px"}}>
                <div className="jumbotron jumbotron-fluid" style={{background: "url(/images/student-boy2-copy.jpg)",backgroundRepeat: "no-repeat",backgroundSize: "cover",backgroundPosition: "30% 30%"}}>
                    <AdCard>
                                <h4 className="display-6 text-white">Learn Professional Skills from</h4>
                                <h1 className="display-4 text-white">Practical Training Courses</h1>
                                <p className="lead text-white">You can improved skills by live classes from professional teachers.</p>
                                <p className="lead text-white">
                                    <a className="btn btn-primary" href="https://app.larnr.com">Join Now</a>
                                    For Live Webiners and Regular Updates
                                </p>
                    </AdCard>
                </div>
                <div className="container pb-5">

                    <div className="row">
                        <CourseAd/>
                    </div>

                </div>
            </div>
            {/* <!-- Footer --> */}
            <Footer/>
            {/* <!-- Footer --> */}
            {/* <!-- Copyright --> */}
            <CopyRight/>
        </div>
    )
}
