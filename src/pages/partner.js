import CopyRight from "../copyright";
import Footer from "../footer";
import Header from "../header";
import AdCard from "../widgets/AdCard";
import Message from "../widgets/message";

export default function Partner() {
    return (
        <div>
            <Header />
            <div style={{ marginTop: "50px" }}>
                <div style={{ background: "url(/images/backcode.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "0% 30%" }}>
                    <div class="jumbotron jumbotron-fluid" style={{ background: "url(/images/partner.png)", backgroundRepeat: "no-repeat", backgroundSize: "fit", backgroundPosition: "0% 30%" }}>
                        <AdCard class="offset-md-4 col-md-8 p-3">
                            <h4 class="display-6 text-white">Are you teacher or educator?</h4>
                            <h1 class="display-4 text-white">Join as Education Partner</h1>
                            <p class="lead text-white">You can earn every month 30K+ Rupees every month.</p>
                        </AdCard>

                    </div>
                </div>
                <div class="container">
                    <div class="row justify-content-center py-md-3 my-md-3">
                        <div class="col-md-6 pt-md-4">
                            <h1 class="mt-md-5">Benifits with us.</h1>
                            <h4>Share Your Articles</h4>
                            <p>You can get earning from tutorial articles.
                                Join Our Parnership Programm.</p>

                            <h4>Sell Your Courses</h4>
                            <p>You can sell from your courses. Also You can get earnings from your courses.
                                You don't need to pay any platform fees.
                            </p>

                            <h4>Boosting your content</h4>
                            <p>We are booting your articles without any charges and also get earning from partnership programs.
                                Also We are charges only 30% of your course sales amount.</p>
                        </div>
                        <Message action="https://larnr.com/partner">
                        <div class="mb-3">
                                    <label for="subject" class="form-label">Expertise Topics (Require)</label>
                                    <input type="text" name="subject" class="form-control" id="subject" placeholder="Your Expertise on Topics" required />
                                </div>
                        </Message>
                    </div>
                </div>
            </div>
            {/* <!-- Footer --> */}
            <Footer />
            {/* <!-- Footer --> */}
            {/* <!-- Copyright --> */}
            <CopyRight />
        </div>
    )
}