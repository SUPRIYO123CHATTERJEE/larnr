import CopyRight from "../copyright";
import Footer from "../footer";
import Header from "../header";
import AdCard from "../widgets/AdCard";
import VideoCard from "../widgets/videoCard";
import {useContext} from "react";
import Appprovider from "../context";
import { Appcontext } from "../context";

export default function Articles() {
    const name = useContext(Appcontext);
    return (
        <div>
            <Header />
            <div style={{ marginTop: "50px" }}>
                <div className="jumbotron jumbotron-fluid" style={{ background: "url(/images/student-girl-2.jpeg)", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "10% 10%" }}>
                    <AdCard>
                        <div>
                            <h4 className="display-6 text-white">Learn Professional Skills from</h4>
                            <h1 className="display-4 text-white">Articles and Videos</h1>
                            <p className="lead text-white">You can learn skills development tutorials articles and videos from teachers.</p>
                            <div className="lead text-white" >
                                <form action="https://larnr.com/subscribe" method="POST">
                                    <input type="hidden" name="_token" value="ENUsOSIHwJXJvqnbZKemtSVip7e9mQra0VUhxdup" />
                                    <div id="my_name_mWfhHk7FYdNcSsDx_wrap" style={{ display: "none" }}>
                                        <input name="my_name_mWfhHk7FYdNcSsDx" type="text" value="" id="my_name_mWfhHk7FYdNcSsDx" />
                                        <input name="valid_from" type="text" value="eyJpdiI6Ii8rRjBEemFKYUtCUXJ6WjJHUHFTVHc9PSIsInZhbHVlIjoiaElVMFZ4MjY3TUJ3eFJjaWV2dWZFUT09IiwibWFjIjoiYTVjMDlhZTQ2YjlhNzhiMWU4YWRkZGYzOWZmYWI2ODczMmI0NDUzY2Q1NWFlNjMwNGEyZjI0NzliOGZkZDliMCJ9" />
                                    </div>
                                    <div id="_g-recaptcha"></div>
                                    <div className="g-recaptcha" data-sitekey="6LdfNpgaAAAAAFcl7dHnLS0zSvKbSEjdWOyR5kDe" data-size="invisible" data-callback="_submitForm" data-badge="bottomright"></div>
                                    <h5 className="text-white">Subscribe yourself for regular updates</h5>
                                    <div className="row">
                                        <div className="col-md">
                                            <input type="text" name="name" required className="form-control my-1 my-md-0" placeholder="Your Name" />
                                        </div>
                                        <div className="col-md">
                                            <input type="email" name="email" required className="form-control my-1 my-md-0" placeholder="Your Email" />
                                        </div>
                                        <div className="col-md">
                                            <input type="submit" className="btn btn-primary my-1 my-md-0" value="Subscribe Now" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                

                </AdCard>
                </div>
                <h1>my name is {name}</h1>


                <div className="container">
                <div className="row justify-content-start">
                    <VideoCard link1="https://larnr.com/article/reactjs-tutorial-ecommerce-website-design-codes" link2="https://larnr.com/article/reactjs-tutorial-ecommerce-website-design-codes" img="https://larnr.com/storage/thumbnails/hSSW3GQD9Rf2CFvr6XR8YzQ4uOvlWtNYcTkmiUJh.jpg" title="ReactJS Tutorial: E-commerce Website Component Des..." description="In this tutorial you will be learn about ui components design by bootstrap5, scs..." views="Shibaji Debnath | 2318views "/>

                    <VideoCard link1="https://larnr.com/article/reactjs-tutorial-part-1-e-commerce-website-development-for-beginners" link2="https://larnr.com/article/reactjs-tutorial-part-1-e-commerce-website-development-for-beginners" img="https://larnr.com/storage/thumbnails/pgQNiGNTb3SsCT1z9etggJ669sJ4XRQpDCcDeZmy.jpg" title="ReactJS Tutorial: Environment Settings for E Comme..." description="you wanted to start learning about reactjs and you are work in website designing..." views="Shibaji Debnath | 1531views"/>
                    <VideoCard link1="https://larnr.com/article/flutter-tutorial-understanding-app-state-management-practically" link2="https://larnr.com/article/flutter-tutorial-understanding-app-state-management-practically" img="https://larnr.com/storage/thumbnails/HZyekEmRT20ezQeVwZm9Rwcrsw8ISiYUFHmYWqj2.jpg" title="Flutter Tutorial: Understanding App State Manageme..." description="If you want to understand about flutter app state management by practical projec..." views="Shibaji Debnath | 1792views "/>
                    <VideoCard link1="https://larnr.com/article/which-it-jobs-is-best-for-your-career-options" link2="https://larnr.com/article/which-it-jobs-is-best-for-your-career-options" img="https://larnr.com/storage/thumbnails/7EB1J2VzigMUzoKQ6xIgSqpE2sAhLK3phT2aORyF.jpg" title="Which IT Jobs is Best for your career options? kno..." description="In this article you will be understand about IT Jobs. how many Jobs types are av..." views="Shibaji Debnath | 1753views "/>
                    <VideoCard link1="https://larnr.com/article/quick-learn-dart-language" link2="https://larnr.com/article/quick-learn-dart-language" img="https://larnr.com/storage/thumbnails/4kKaVyaZkCPHJncuJbLCl47eE9jQaEAS4fe3S8tZ.jpg" title="Quick Learn Dart Language..." description="If you are new in flutter development then this tutorial will be helping you to ..." views="Shibaji Debnath | 1561views "/>
                    
                </div>
                </div>

            {/* <!-- Footer --> */}
            </div>
            <Footer />
            {/* <!-- Footer --> */}
            {/* <!-- Copyright --> */}
            <CopyRight />
        </div>
            
                )
}