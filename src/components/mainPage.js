import HomePageGrid from "./homePageGrid"
import News from "./news";
import Footer from "./Footer";

const MainPage = function () {
    return(
     <div>
        <HomePageGrid/>
       <News/>
       {/* <BusinessSub/> */}
       {/* <Social/> */}
       <Footer/>
    </div>
)}

export default MainPage;