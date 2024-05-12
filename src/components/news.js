import "./news.css";

const News =  function (){
    return <div>
   <div class="container">
<h3 className="news_heading">News & Updates</h3>

    <div class="row justify-content-center mt-5"> 
      <div class="col-xl-6 col-md-6 col-sm-12 mt-3 news_grid"> 
        <div class="card news_card">
          <div class="card-body" style={{textAlign:"center"}}>
            <div >
            <a href="#" > <img  height="150px" width="150px" src="./images/LYNX-LH25-PRO-HERO-IMAGE-SLIDER-LEFT.png"/> </a>
            </div>
            <h4 class="card-title">Hunts man news & Updates</h4> 
        </div>
      </div>
    </div>

    <div class="col-xl-6 col-md-6 col-sm-12 mt-3 news_grid"> 
        <div class="card news_card">
          <div class="card-body" style={{textAlign:"center"}}>
            <div >
            <a href="#" > <img  height="150px" width="150px" src="./images/LYNX-LH25-PRO-HERO-IMAGE-SLIDER-LEFT.png"/> </a>
            {/* <a href="#" > <img  height="300px" width="350px" src="./images/16001611-sydney-harbour-bridge.jpg"/> </a> */}
            </div>
            <h4 class="card-title">Holidays in Australia</h4> 
        </div>
      </div>
    </div>

   
   
  </div>
    </div>
  </div>
}
 
 export default News;