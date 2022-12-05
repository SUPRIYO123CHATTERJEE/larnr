import CopyRight from "../copyright";
import Footer from "../footer";
import Header from "../header";
import Message from "../widgets/message";

export default function Support() {
    return (
        <div>
            <Header/>
            <div style={{ marginTop: "50px" }}>
                <div>
                    <img width="100%" src="https://larnr.com/images/contactus.png"  alt="images"/>
                </div>
                <div class="container">
                    <div class="row justify-content-center py-5 my-4">
                        <div class="col-md-6">
                            <h1 class="mt-5">Need Help?</h1>
                            <h4>Do you have any Question or Suggestions?</h4>
                            <p class="p-0">If you have any question about Our Courses and Articles realated Queries
                                and any suggestions put your details with your details and message.</p>
                            <h4>Have Any Query About Courses?</h4>
                            <p>If you wanted to purchase about courses.
                                And you have queries then you can submitted your questions or queries.</p>
                        </div>
                        <Message action="https://larnr.com/support" message="Message (Require)"/>
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