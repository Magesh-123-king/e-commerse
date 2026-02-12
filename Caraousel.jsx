import c1 from "./assets/background/bg1.avif"
import c2 from "./assets/background/bg2.avif"
import c3 from "./assets/background/bg-3.jpg"
export default function Caraousel() {

    return(


        <>
        
        <div id="car" className="carousel slide" data-bs-ride="carousel">

    <div className="carousel-inner">

       <div className="carousel-item active" data-bs-interval="3000">
  <img className="d-block w-100" id="img" src={c1} alt="" />

  <div className=" carousel-caption text-start text-dark  top-20 top-md-25 ms-3 ms-md-5 translate-middle-y translate-middle-y-md-0">
    <h1 className="fs-2 fs-md-1 fs-sm-4">
     Easy, Fresh & Convenient <br />
Stock Up on Daily Essentials  <br />
Save Big on Your Favorite Brands
    </h1>

    <button className="btn btn-danger mt-2 mt-md-3">
      Shop now
    </button>
  </div>
</div>


        <div className="carousel-item"  data-bs-interval="3000">
            <img className="img d-block w-100 " id="img" src={c2} alt=""/>
            <div className=" carousel-caption text-start text-dark  top-20 top-md-25 ms-3 ms-md-5 translate-middle-y translate-middle-y-md-0">
    <h1 className="fs-2 fs-md-1 fs-sm-4">
     Easy, Fresh & Convenient <br />
Stock Up on Daily Essentials  <br />
Save Big on Your Favorite Brands
    </h1>

    <button className="btn btn-danger mt-2 mt-md-3">
      Shop now
    </button>
  </div>
 </div>

        <div className="carousel-item"  data-bs-interval="3000">
            <img className="img d-block w-100 " id="img" src={c3} alt=""/>
            <div className=" carousel-caption text-start text-dark  top-20 top-md-25 ms-3 ms-md-5 translate-middle-y translate-middle-y-md-0">
    <h1 className="fs-2 fs-md-1 fs-sm-4">
     Easy, Fresh & Convenient <br />
Stock Up on Daily Essentials  <br />
Save Big on Your Favorite Brands
    </h1>

    <button className="btn btn-danger mt-2 mt-md-3">
      Shop now
    </button>
  </div>
        </div>

<button className="carousel-control-prev" data-bs-target="#car" data-bs-slide="prev"><span className="carousel-control-prev-icon"></span></button>
    <button className="carousel-control-next" data-bs-target="#car" data-bs-slide="next"><span className="carousel-control-next-icon"></span></button>

    </div>

</div>
     
        
        </>




    )
    
};
