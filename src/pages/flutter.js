import CopyRight from "../copyright";
import Footer from "../footer";
import Header from "../header";

export default function Flutter() {
    return (
        <>
            <Header />
            <div style={{marginTop:"50px"}}>
                <div className="jumbotron jumbotron-fluid" style={{ background: "url(/images/course-display.jpeg)", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "30% 30%"}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 p-3 order-2 order-md-1" style={{ background: "rgba(15, 15, 15, 0.7)" }}>
                                <div className="px-3 pt-4">
                                    <h5 className="text-white">Learn</h5>
                                    <h2 className="text-white mb-0">Flutter Course</h2>
                                    <p className="mb-3"><small className="text-white">Last Update: 2nd November 2022</small></p>
                                    <p className="lead text-white">If you are beginner in software development and wanted to start mobile application development. then...</p>
                                    <div className="pb-1">
                                        <div className="m-0">
                                            <span className="badge badge-success">Hindi</span>
                                            <i className="fa fa-star text-warning" aria-hidden="true"></i>
                                            <i className="fa fa-star text-warning" aria-hidden="true"></i>
                                            <i className="fa fa-star text-warning" aria-hidden="true"></i>
                                            <i className="fa fa-star text-warning" aria-hidden="true"></i>
                                            <i className="fa fa-star-half-o text-warning" aria-hidden="true"></i>
                                            <small className="text-warning">4.5</small>
                                            <span className="text-white">(49 Reviews)</span>
                                            <span className="text-white">987 Students enrolled</span>
                                        </div>


                                    </div>
                                    <div className="pb-4 text-left">
                                        <strong className="text-white">Price: </strong>
                                        <strong className="text-danger"><del>₹8000/-</del></strong>
                                        <strong className="text-success">₹650/-</strong>
                                    </div>
                                    <p className="lead text-white">
                                        <a className="btn btn-primary" href="https://larnr.com/checkout/1">Join Now</a>
                                        For Live classNameroom and Full Access for Lifetime
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-6 py-0 order-1 order-md-none">
                                <div className="py-md-1" style={{ background: "rgba(15, 15, 15, 0.7)" }}>
                                    <div className="p-2">
                                        <div>
                                            <video
                                                id="course-display"
                                                className="video-js vim-css vjs-fluid"
                                                controls
                                                preload="auto"
                                                width="640"
                                                height="420"
                                                poster="https://larnr.com/storage/thumbnails/fp11LB6gjp1im7vOXdcb2JOzbVXmp7lBlWRTOMB6.jpg"
                                                data-setup='{ "playbackRates": [1, 1.25, 1.5, 2], "techOrder": ["youtube"], "youtube": { "customVars": { "wmode": "transparent" ,"ytControls": 2 } } }'
                                            >
                                                <source src="https://youtu.be/wR0lZRkBZS8" type="video/youtube" />
                                                <p className="vjs-no-js">
                                                    To view this video please enable JavaScript, and consider upgrading to a
                                                    web browser that
                                                    <a href="https://larnr.com" target="_blank">supports HTML5 video</a>
                                                </p>
                                            </video>
                                        </div>



                                    </div>


                                    <h4 className="text-white display-6 pb-4 pt-2 text-center">Quick information video</h4>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="container">
                    <div className="row justify-content-center mb-5">
                        <div className="col-md-8">
                            <div className="my-3 text-justify">
                                <h3>Highlights</h3>
                                <p>If you are beginner in software development and wanted to start mobile application development. then you must join this course. In this course you will be learn about step by step programming concepts then you can develop mobile application with flutter. also you can be published your application with Google Play Store. This course prepare for absolute beginners who can start their developer journey after learning this course.</p>
                                <p className="text-center"><a className="btn btn-link btn-sm" href="#details">Read More...</a></p>
                            </div>

                            <h4>Course Index</h4>

                            <ul id="course_list" className="list-group">
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="heading1">
                                            <button className="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                                                <div className="d-flex flex-column ">
                                                    <p className="p-0 m-0">Introduction</p>
                                                    <p className="p-0 m-0"><small>This is the introduction area of the flutter course.</small></p>
                                                </div>
                                            </button>
                                        </div>
                                        <div id="collapse1" className="accordion-collapse collapse hide " aria-labelledby="heading1" data-bs-parent="#accordionExample">
                                            <div className="accordion-body p-0">
                                                <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" data-toggle="modal" data-target="#coursePreview">
                                                    <span><i className="fa fa-play-circle-o"></i> Introduction</span>
                                                    <button className="btn btn-primary btn-sm text-white d-none d-md-block">
                                                        <i className="fa fa-play"></i> Preview
                                                    </button>
                                                </li>
                                                <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" data-toggle="modal" data-target="#coursePreview">
                                                    <span><i className="fa fa-play-circle-o"></i> Teacher Information</span>
                                                    <button className="btn btn-sm btn-warning d-none d-md-block">
                                                        <i className="fa fa-trophy"></i> Premium
                                                    </button>
                                                </li>
                                                <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" data-toggle="modal" data-target="#coursePreview">
                                                    <span><i className="fa fa-play-circle-o"></i> Various Types of Mobile Application Development Technologies</span>
                                                    <button className="btn btn-sm btn-warning d-none d-md-block">
                                                        <i className="fa fa-trophy"></i> Premium
                                                    </button>
                                                </li>
                                                <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" data-toggle="modal" data-target="#coursePreview">
                                                    <span><i className="fa fa-play-circle-o"></i> History of Flutter. Why dart language use in Flutter</span>
                                                    <button className="btn btn-sm btn-warning d-none d-md-block">
                                                        <i className="fa fa-trophy"></i> Premium
                                                    </button>
                                                </li>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="heading3">
                                            <button className="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                                <div className="d-flex flex-column ">
                                                    <p className="p-0 m-0">Environment Setup</p>
                                                    <p className="p-0 m-0"><small>In this section, you will be learning about Environment Setup for flutter Application Development</small></p>
                                                </div>
                                            </button>
                                        </div>
                                        <div id="collapse3" className="accordion-collapse collapse hide " aria-labelledby="heading3" data-bs-parent="#accordionExample">
                                            <div className="accordion-body p-0">
                                                <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" data-toggle="modal" data-target="#coursePreview">
                                                    <span><i className="fa fa-play-circle-o"></i> Dart SDK Setup</span>
                                                    <button className="btn btn-sm btn-warning d-none d-md-block">
                                                        <i className="fa fa-trophy"></i> Premium
                                                    </button>
                                                </li>
                                                <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" data-toggle="modal" data-target="#coursePreview">
                                                    <span><i className="fa fa-play-circle-o"></i> VS Code Editor Setup for Development</span>
                                                    <button className="btn btn-sm btn-warning d-none d-md-block">
                                                        <i className="fa fa-trophy"></i> Premium
                                                    </button>
                                                </li>
                                                <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" data-toggle="modal" data-target="#coursePreview">
                                                    <span><i className="fa fa-play-circle-o"></i> Flutter SDK Setup</span>
                                                    <button className="btn btn-sm btn-warning d-none d-md-block">
                                                        <i className="fa fa-trophy"></i> Premium
                                                    </button>
                                                </li>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="heading2">
                                            <button className="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                                <div className="d-flex flex-column ">
                                                    <p className="p-0 m-0">Dart Programming Language Tutorials</p>
                                                    <p className="p-0 m-0"><small>In This Section, you will be learning about Dart Programmings Step by Step.</small></p>
                                                </div>
                                            </button>
                                        </div>
                                        <div id="collapse2" className="accordion-collapse collapse hide " aria-labelledby="heading2" data-bs-parent="#accordionExample">
                                            <div className="accordion-body p-0">
                                                <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" data-toggle="modal" data-target="#coursePreview">
                                                    <span><i className="fa fa-play-circle-o"></i> What is Dart Language?</span>
                                                    <button className="btn btn-primary btn-sm text-white d-none d-md-block">
                                                        <i className="fa fa-play"></i> Preview
                                                    </button>
                                                </li>
                                                <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" data-toggle="modal" data-target="#coursePreview">
                                                    <span><i className="fa fa-play-circle-o"></i> Basic Software Development Fundamentals</span>
                                                    <button className="btn btn-sm btn-warning d-none d-md-block">
                                                        <i className="fa fa-trophy"></i> Premium
                                                    </button>
                                                </li>
                                                <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" data-toggle="modal" data-target="#coursePreview">
                                                    <span><i className="fa fa-play-circle-o"></i> Dart Language Variables and Variables Types</span>
                                                    <button className="btn btn-sm btn-warning d-none d-md-block">
                                                        <i className="fa fa-trophy"></i> Premium
                                                    </button>
                                                </li>
                                                <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" data-toggle="modal" data-target="#coursePreview">
                                                    <span><i className="fa fa-play-circle-o"></i> Dart Functions Introduction</span>
                                                    <button className="btn btn-primary btn-sm text-white d-none d-md-block">
                                                        <i className="fa fa-play"></i> Preview
                                                    </button>
                                                </li>
                                                <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" data-toggle="modal" data-target="#coursePreview">
                                                    <span><i className="fa fa-play-circle-o"></i> How to Write Optional Parameters and Arguments in the Dart Function</span>
                                                    <button className="btn btn-sm btn-warning d-none d-md-block">
                                                        <i className="fa fa-trophy"></i> Premium
                                                    </button>
                                                </li>
                                                <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" data-toggle="modal" data-target="#coursePreview">
                                                    <span><i className="fa fa-play-circle-o"></i> Create Anonymous Function and Using Callback function in Dart</span>
                                                    <button className="btn btn-sm btn-warning d-none d-md-block">
                                                        <i className="fa fa-trophy"></i> Premium
                                                    </button>
                                                </li>
                                                <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" data-toggle="modal" data-target="#coursePreview">
                                                    <span><i className="fa fa-play-circle-o"></i> Lexical Scope In Dart language</span>
                                                    <button className="btn btn-sm btn-warning d-none d-md-block">
                                                        <i className="fa fa-trophy"></i> Premium
                                                    </button>
                                                </li>
                                                <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" data-toggle="modal" data-target="#coursePreview">
                                                    <span><i className="fa fa-play-circle-o"></i> Dart Operators</span>
                                                    <button className="btn btn-sm btn-warning d-none d-md-block">
                                                        <i className="fa fa-trophy"></i> Premium
                                                    </button>
                                                </li>
                                                <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" data-toggle="modal" data-target="#coursePreview">
                                                    <span><i className="fa fa-play-circle-o"></i> Introduction of Control Flow Statements</span>
                                                    <button className="btn btn-primary btn-sm text-white d-none d-md-block">
                                                        <i className="fa fa-play"></i> Preview
                                                    </button>
                                                </li>
                                                <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" data-toggle="modal" data-target="#coursePreview">
                                                    <span><i className="fa fa-play-circle-o"></i> How to Use For Loop Statements</span>
                                                    <button className="btn btn-sm btn-warning d-none d-md-block">
                                                        <i className="fa fa-trophy"></i> Premium
                                                    </button>
                                                </li>
                                                <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" data-toggle="modal" data-target="#coursePreview">
                                                    <span><i className="fa fa-play-circle-o"></i> How to use If Else Statements</span>
                                                    <button className="btn btn-sm btn-warning d-none d-md-block">
                                                        <i className="fa fa-trophy"></i> Premium
                                                    </button>
                                                </li>
                                                <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" data-toggle="modal" data-target="#coursePreview">
                                                    <span><i className="fa fa-play-circle-o"></i> How to use While and Do While Loops</span>
                                                    <button className="btn btn-sm btn-warning d-none d-md-block">
                                                        <i className="fa fa-trophy"></i> Premium
                                                    </button>
                                                </li>
                                                <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" data-toggle="modal" data-target="#coursePreview">
                                                    <span><i className="fa fa-play-circle-o"></i> How to use Switch and Case</span>
                                                    <button className="btn btn-sm btn-warning d-none d-md-block">
                                                        <i className="fa fa-trophy"></i> Premium
                                                    </button>
                                                </li>
                                                <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" data-toggle="modal" data-target="#coursePreview">
                                                    <span><i className="fa fa-play-circle-o"></i> Introduction of Exception</span>
                                                    <button className="btn btn-primary btn-sm text-white d-none d-md-block">
                                                        <i className="fa fa-play"></i> Preview
                                                    </button>
                                                </li>
                                                <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" data-toggle="modal" data-target="#coursePreview">
                                                    <span><i className="fa fa-play-circle-o"></i> How to use Exception in Dart Language</span>
                                                    <button className="btn btn-sm btn-warning d-none d-md-block">
                                                        <i className="fa fa-trophy"></i> Premium
                                                    </button>
                                                </li>
                                                <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" data-toggle="modal" data-target="#coursePreview">
                                                    <span><i className="fa fa-play-circle-o"></i> Control Flow use Break and Continue</span>
                                                    <button className="btn btn-sm btn-warning d-none d-md-block">
                                                        <i className="fa fa-trophy"></i> Premium
                                                    </button>
                                                </li>
                                                <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" data-toggle="modal" data-target="#coursePreview">
                                                    <span><i className="fa fa-play-circle-o"></i> Object Oriented Programming Introduction</span>
                                                    <button className="btn btn-primary btn-sm text-white d-none d-md-block">
                                                        <i className="fa fa-play"></i> Preview
                                                    </button>
                                                </li>
                                                <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" data-toggle="modal" data-target="#coursePreview">
                                                    <span><i className="fa fa-play-circle-o"></i> Object Oriented Programming Part 1</span>
                                                    <button className="btn btn-sm btn-warning d-none d-md-block">
                                                        <i className="fa fa-trophy"></i> Premium
                                                    </button>
                                                </li>
                                                <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" data-toggle="modal" data-target="#coursePreview">
                                                    <span><i className="fa fa-play-circle-o"></i> Realtime Example of OOP className, Abstraction and Interface and Mixins</span>
                                                    <button className="btn btn-sm btn-warning d-none d-md-block">
                                                        <i className="fa fa-trophy"></i> Premium
                                                    </button>
                                                </li>
                                                <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" data-toggle="modal" data-target="#coursePreview">
                                                    <span><i className="fa fa-play-circle-o"></i> Generics Programming</span>
                                                    <button className="btn btn-sm btn-warning d-none d-md-block">
                                                        <i className="fa fa-trophy"></i> Premium
                                                    </button>
                                                </li>
                                                <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" data-toggle="modal" data-target="#coursePreview">
                                                    <span><i className="fa fa-play-circle-o"></i> Library creation and uses</span>
                                                    <button className="btn btn-sm btn-warning d-none d-md-block">
                                                        <i className="fa fa-trophy"></i> Premium
                                                    </button>
                                                </li>
                                                <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" data-toggle="modal" data-target="#coursePreview">
                                                    <span><i className="fa fa-play-circle-o"></i> Async Programming</span>
                                                    <button className="btn btn-sm btn-warning d-none d-md-block">
                                                        <i className="fa fa-trophy"></i> Premium
                                                    </button>
                                                </li>
                                                <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" data-toggle="modal" data-target="#coursePreview">
                                                    <span><i className="fa fa-play-circle-o"></i> Stream Data Handling</span>
                                                    <button className="btn btn-sm btn-warning d-none d-md-block">
                                                        <i className="fa fa-trophy"></i> Premium
                                                    </button>
                                                </li>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="heading4">
                                            <button className="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                                <div className="d-flex flex-column ">
                                                    <p className="p-0 m-0">Flutter Tutorials</p>
                                                    <p className="p-0 m-0"><small>In this section, you will be learning about Flutter</small></p>
                                                </div>
                                            </button>
                                        </div>
                                        <div id="collapse4" className="accordion-collapse collapse hide " aria-labelledby="heading4" data-bs-parent="#accordionExample">
                                            <div className="accordion-body p-0">
                                                <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" data-toggle="modal" data-target="#coursePreview">
                                                    <span><i className="fa fa-play-circle-o"></i> What is Flutter?</span>
                                                    <button className="btn btn-primary btn-sm text-white d-none d-md-block">
                                                        <i className="fa fa-play"></i> Preview
                                                    </button>
                                                </li>
                                                <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" data-toggle="modal" data-target="#coursePreview">
                                                    <span><i className="fa fa-play-circle-o"></i> Flutter Project Structure</span>
                                                    <button className="btn btn-sm btn-warning d-none d-md-block">
                                                        <i className="fa fa-trophy"></i> Premium
                                                    </button>
                                                </li>
                                                <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" data-toggle="modal" data-target="#coursePreview">
                                                    <span><i className="fa fa-play-circle-o"></i> What is widget?</span>
                                                    <button className="btn btn-sm btn-warning d-none d-md-block">
                                                        <i className="fa fa-trophy"></i> Premium
                                                    </button>
                                                </li>
                                                <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" data-toggle="modal" data-target="#coursePreview">
                                                    <span><i className="fa fa-play-circle-o"></i> Starting basic design</span>
                                                    <button className="btn btn-primary btn-sm text-white d-none d-md-block">
                                                        <i className="fa fa-play"></i> Preview
                                                    </button>
                                                </li>
                                                <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" data-toggle="modal" data-target="#coursePreview">
                                                    <span><i className="fa fa-play-circle-o"></i> Making Navigation Drawer and end drawer</span>
                                                    <button className="btn btn-sm btn-warning d-none d-md-block">
                                                        <i className="fa fa-trophy"></i> Premium
                                                    </button>
                                                </li>
                                                <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" data-toggle="modal" data-target="#coursePreview">
                                                    <span><i className="fa fa-play-circle-o"></i> Bottom Navigation bar Design</span>
                                                    <button className="btn btn-sm btn-warning d-none d-md-block">
                                                        <i className="fa fa-trophy"></i> Premium
                                                    </button>
                                                </li>
                                                <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" data-toggle="modal" data-target="#coursePreview">
                                                    <span><i className="fa fa-play-circle-o"></i> Right Drawer bar design for notifications</span>
                                                    <button className="btn btn-sm btn-warning d-none d-md-block">
                                                        <i className="fa fa-trophy"></i> Premium
                                                    </button>
                                                </li>
                                                <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" data-toggle="modal" data-target="#coursePreview">
                                                    <span><i className="fa fa-play-circle-o"></i> Home Screen Layout Design</span>
                                                    <button className="btn btn-sm btn-warning d-none d-md-block">
                                                        <i className="fa fa-trophy"></i> Premium
                                                    </button>
                                                </li>
                                                <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" data-toggle="modal" data-target="#coursePreview">
                                                    <span><i className="fa fa-play-circle-o"></i> Profile Screen Designing</span>
                                                    <button className="btn btn-sm btn-warning d-none d-md-block">
                                                        <i className="fa fa-trophy"></i> Premium
                                                    </button>
                                                </li>
                                                <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" data-toggle="modal" data-target="#coursePreview">
                                                    <span><i className="fa fa-play-circle-o"></i> PageView and BottomSheet Animation</span>
                                                    <button className="btn btn-sm btn-warning d-none d-md-block">
                                                        <i className="fa fa-trophy"></i> Premium
                                                    </button>
                                                </li>
                                                <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" data-toggle="modal" data-target="#coursePreview">
                                                    <span><i className="fa fa-play-circle-o"></i> Intro of State Managment</span>
                                                    <button className="btn btn-primary btn-sm text-white d-none d-md-block">
                                                        <i className="fa fa-play"></i> Preview
                                                    </button>
                                                </li>
                                                <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" data-toggle="modal" data-target="#coursePreview">
                                                    <span><i className="fa fa-play-circle-o"></i> Ephemeral state and Widget Split</span>
                                                    <button className="btn btn-sm btn-warning d-none d-md-block">
                                                        <i className="fa fa-trophy"></i> Premium
                                                    </button>
                                                </li>
                                                <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" data-toggle="modal" data-target="#coursePreview">
                                                    <span><i className="fa fa-play-circle-o"></i> App State Management e commerce application</span>
                                                    <button className="btn btn-sm btn-warning d-none d-md-block">
                                                        <i className="fa fa-trophy"></i> Premium
                                                    </button>
                                                </li>
                                                <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" data-toggle="modal" data-target="#coursePreview">
                                                    <span><i className="fa fa-play-circle-o"></i> Network Accessing and http package use with Future data</span>
                                                    <button className="btn btn-sm btn-warning d-none d-md-block">
                                                        <i className="fa fa-trophy"></i> Premium
                                                    </button>
                                                </li>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="heading5">
                                            <button className="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                                                <div className="d-flex flex-column ">
                                                    <p className="p-0 m-0">Deployment / Publication</p>
                                                    <p className="p-0 m-0"><small>This section for the app publication process tutorial is available.</small></p>
                                                </div>
                                            </button>
                                        </div>
                                        <div id="collapse5" className="accordion-collapse collapse hide " aria-labelledby="heading5" data-bs-parent="#accordionExample">
                                            <div className="accordion-body p-0">
                                                <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" data-toggle="modal" data-target="#coursePreview">
                                                    <span><i className="fa fa-play-circle-o"></i> Android APK build and Release on playstore</span>
                                                    <button className="btn btn-sm btn-warning d-none d-md-block">
                                                        <i className="fa fa-trophy"></i> Premium
                                                    </button>
                                                </li>
                                            </div>
                                        </div>
                                    </div>

                                    <hr id="details" className="my-3" />
                                    <div className="my-4 text-justify">
                                        <h3><strong>What about The Course? And Know Why it is A&nbsp;Spacial Course?</strong></h3>

                                        <p>If you wanted to make your mobile application and get a good job as a mobile application developer. This course will be helping you. In this course you will be learning about top most <strong>popular technology</strong> for <strong>Multiplatform Software developments</strong>. But Here, You will learning About <strong>Flutter for Mobile Application Development</strong>. This Framework Developed and Maintained By <strong>Google</strong>. <strong>Flatter</strong> is a Software Development Framework. This (Flutter framework) has primary focus on&nbsp;mobile application developments. Which can run in <strong>IOS</strong>, and <strong>Android</strong> Platforms. But After that It give&nbsp;focused on <strong>Website</strong> Application and <strong>Desktop</strong> also. So You can be think about This framework can make a <strong>hybrid apllication</strong> for Multi Platforms application. But It is <strong>not</strong>. Flutter Makes always a device spacific <strong>native software</strong> using flutter frameworks. Because this software framework developed by dart language. <strong>Dart</strong> is Software <strong>Programming</strong> Language and It also developed by <strong>Google</strong>. This language has primary focus to makes&nbsp;<strong>native application</strong> development using one programming language without supporting any <strong>third party languages or supports</strong>. Using This language you can developed any kind of Software for any platforms. You develop Desktop application for <strong>Linux, MacOS </strong>and<strong> Windows</strong>. Using This Language You can makes <strong>Website</strong> Application,&nbsp;<strong>Mobile</strong> and <strong>Embeded Systems</strong> Applications togetther using one programming skills. So Once You may understands the hole concepts. then you can develop any kind of softwares. So you understands,&nbsp;&nbsp;Why i am making this course, Application development by <strong>flutter</strong> for you. Once You will be Learning this course then this Knowledges will be helping you always for <strong>every platforms apllication</strong>.</p>

                                        <h3><strong>What you will be learn from this course?&nbsp;</strong></h3>

                                        <p><strong>1. Learn Dart Programming language step by step. It will be helping for the begginers.</strong></p>

                                        <p><strong>2. Flutter for Application Development for mobiles plattforms. Step By Step learning for A Expert Mobile Application Developer.</strong></p>

                                        <h3><strong>Prerequists:</strong></h3>

                                        <p><strong>No Prior knowledge</strong> is not required for this Software Development Learning. But If you have any previous <strong>software Development Knowledge</strong> then this course will be helping you as a<strong> Expert Mobile Application Developers</strong>. Otherwise As you are beginner then it will be helping you to grow your technical skills like <strong>Software Developers</strong>. Also you can makes some<strong> Simple Applications </strong>after completing this course.</p>

                                        <h3><strong>Takeaway:</strong></h3>

                                        <p>1. If you have no previous knowledges in Software Programming And Development then This course will be helping you to grow <strong>knowledge as a software developer</strong>.</p>

                                        <p>2.&nbsp; If you have previous knowlede on Software Development then it will be helping you as <strong>Expert Mobile Application Developer.</strong></p>
                                    </div>
                                    <h3>Course Tags</h3>
                                    <div className="mb-3">
                                        <span className="badge bg-success text-white">flutter course</span>
                                        <span className="badge bg-success text-white"> flutter course in hindi</span>
                                        <span className="badge bg-success text-white"> best flutter course</span>
                                        <span className="badge bg-success text-white"> flutter course for beginners</span>
                                        <span className="badge bg-success text-white"> mobile application development</span>
                                        <span className="badge bg-success text-white"> flutter apps development</span>
                                        <span className="badge bg-success text-white"> dart language tutorials</span>
                                        <span className="badge bg-success text-white"> mobile application tutorials</span>
                                        <span className="badge bg-success text-white"> dart course</span>
                                        <span className="badge bg-success text-white"> dart programming course</span>
                                        <span className="badge bg-success text-white"> mobile application development in hindi</span>
                                        <span className="badge bg-success text-white"></span>
                                    </div>
                                </div>
                            </ul>

                        </div>


                        <div className="col-md-4 mt-3 mt-md-0">
                            <div className="card sidebar-fixed">

                                <div data-toggle="modal" data-target="#coursePreview" style={{ position: "relative" }}>
                                    <img height="190" src="https://larnr.com/storage/thumbnails/fp11LB6gjp1im7vOXdcb2JOzbVXmp7lBlWRTOMB6.jpg" className="card-img-top" alt="Flutter Course" />
                                    {/* <!-- Button trigger modal --> */}
                                    <div type="button" className="btn btn-default my-btn" style={{ position: "absolute", top: "30%", left: "35%", width: "100px", height: "100px", opacity: 0.8, backgroundColor: "aliceblue", borderRadius: "50%" }}>
                                        <div style={{ marginTop: "30%" }}>
                                            <i className="fa fa-play fa-lg"></i>
                                            Preview
                                        </div>
                                    </div>
                                </div>

                                <div className="card-body">
                                    <div className="text-justify">
                                        If you are beginner in software development and wanted to start mobile application development. then...
                                    </div>
                                    <div className="py-3">
                                        <div>Price:
                                            <strong className="text-danger"><del>₹8000/-</del></strong>
                                            <strong className="text-success">₹650/-</strong>
                                        </div>
                                        <div>Duration: <strong className="text-success">10Hours</strong></div>
                                        <div>Accessible: <strong className="text-success">Premium</strong></div>
                                        <div>Mode: <strong>Online</strong></div>
                                    </div>
                                    <div className=""><a href="https://larnr.com/checkout/1" className="btn btn-warning btn-sm btn-block">Buy Now</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="buy-bottons d-block d-sm-none">
                    <div className="row p-3">
                        <div className="col-8">
                            <div className="bg-white p-1 text-center">
                                <strong>Price: </strong>
                                <strong className="text-danger"><del>₹8000/-</del></strong>
                                <strong className="text-success">₹650/-</strong>
                            </div>
                        </div>
                        <div className="col">
                            <a href="https://larnr.com/checkout/1" className="btn btn-warning btn-sm btn-block">Buy Now</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Footer --> */}
            <Footer/>
            {/* <!-- Footer --> */}
            {/* <!-- Copyright --> */}
            <CopyRight/>
        </>
    )
}