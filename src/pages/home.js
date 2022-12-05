import  Card  from "../widgets/card"
import CopyRight from "../copyright"
import Footer from "../footer"
import Header from "../header"
import AdCard from "../widgets/AdCard"
import VideoCard from "../widgets/videoCard"
import CourseAd from "../widgets/course-ad"


export default function Home() {
  
  return (
    <div>
      <Header />
      <div style={{ marginTop: "50px" }}>
        <div className="jumbotron jumbotron-fluid" style={{ backgroundImage: "url(/images/boy.png)", backgroundRepeat: "noRepeat", backgroundSize: "cover", backgroundPosition: "10% 10%" }}>
          <AdCard>
          <h4 className="display-6 text-white">Learn</h4>
                <h1 className="display-4 text-white">Professional Skills from Industry Expert Teachers</h1>
                <p className="lead text-white">You can learn skills development trainings and courses from best teachers.</p>
                <p className="lead text-white">
                  <a className="btn btn-primary" href="https://app.larnr.com">Register Now</a>&nbsp;
                  For Full Tutorials Access
                </p>
          </AdCard>
        </div>
        <div id="catagory" className="container">
          <div className="row my-5">
            <Card text="Software and Website Development Tutorials" />
            <Card text= "Mobile Apps and Games Development Tutorials" image="/images/service-2.png" class ="cat-5 cat-text"/>
            <Card text= "Online Digital Marketing and SEO Tutorials" image="/images/service-3.jpeg" class="cat-6 cat-text"/>
            <Card text ="Graphics and Motion Graphics Design Tutorials" image="/images/service-4.png" class="cat-1 cat-text"/>
            <Card text = "Business Development Skills Tutorials" image="/images/service-5.jpeg" class="cat-3 cat-text"/>
            <Card text ="Art and Craft, Handmade Products Making Tutorials" image="/images/service-6.jpeg" class="cat-4 cat-text"/>
          </div>
        </div>


        <div className="container">

          <div className="row my-2">
            <VideoCard link1="https://larnr.com/article/reactjs-tutorial-part-1-e-commerce-website-development-for-beginners" link2="https://larnr.com/article/reactjs-tutorial-part-1-e-commerce-website-development-for-beginners" img="https://larnr.com/storage/thumbnails/pgQNiGNTb3SsCT1z9etggJ669sJ4XRQpDCcDeZmy.jpg" title="ReactJS Tutorial: Environment Settings f..." description ="you wanted to start learning about reactjs and you..." views="Shibaji Debnath | 1565views"/>
            <VideoCard link1="https://larnr.com/article/flutter-tutorial-understanding-app-state-management-practically" link2="https://larnr.com/article/flutter-tutorial-understanding-app-state-management-practically" img ="https://larnr.com/storage/thumbnails/HZyekEmRT20ezQeVwZm9Rwcrsw8ISiYUFHmYWqj2.jpg" title="Flutter Tutorial: Understanding App Stat..." description ="Flutter Tutorial: Understanding App Stat..." views="Shibaji Debnath | 1829views"/>
            <VideoCard link1="https://larnr.com/article/quick-learn-dart-language" link2="https://larnr.com/article/quick-learn-dart-language" img="https://larnr.com/storage/thumbnails/4kKaVyaZkCPHJncuJbLCl47eE9jQaEAS4fe3S8tZ.jpg" title="Quick Learn Dart Language..." description="If you are new in flutter development then this tu..." views="Shibaji Debnath | 1601views "/>
            <VideoCard link1="https://larnr.com/article/which-it-jobs-is-best-for-your-career-options" link2="https://larnr.com/article/which-it-jobs-is-best-for-your-career-options" img="https://larnr.com/storage/thumbnails/7EB1J2VzigMUzoKQ6xIgSqpE2sAhLK3phT2aORyF.jpg" title="Which IT Jobs is Best for your career op..." description="In this article you will be understand about IT Jo..." views="Shibaji Debnath | 1781views "/>
          </div>
        </div>


        <div className="container py-4 mb-4">
          <h2 className="text-center"><u>Top Courses</u></h2>
          <div className="row my-2">
            <CourseAd/>
          </div>
        </div>
      </div>
      <Footer>
  
      </Footer>
      <CopyRight/>


    </div>
  )
}