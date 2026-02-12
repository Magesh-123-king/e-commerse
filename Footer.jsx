export default function Footer() {
  return (
    <>
      <div className="container-fluid bg-danger d-flex justify-content-lg-center  mt-2">


           <div className="row gap-1 gap-lg-4 p-3  text-start justify-content-center justify-content-start ">
        <div className="col-5 col-lg-2">
          <a href="#" className="navbar-brand col-2 fw-bold">
            <h1>Clovers.</h1>
          </a>

          <div className="text-light mt-3">Need Help?</div>

          <div className="text-light">
            Visit our customer support for assistance call to us
          </div>

          <div className="text-light">123-456-7890</div>
          <div className="d-flex justify-content-start justify-content-lg-start">

          <ul type="none" className="d-flex p-0">
            <li className="nav-item">
              <i
                className="fa-brands fa-instagram"
                style={{ color: "#f0f2f4" }}
              ></i>
            </li>
            <li className="nav-item">
              <i className="fa-brands fa-facebook" style={{ color: "#fafafa" }}></i>
            </li>
            <li className="nav-item">
              <i className="fa-brands fa-youtube" style={{ color: "#f7f9fd" }}></i>
            </li>
            <li className="nav-item">
              <i className="fa-brands fa-shopify" style={{ color: "#ffffff" }}></i>
            </li>
          </ul>
            </div>
        </div>

        <div className="col-5 col-lg-2">
          <ul type="none" className="  ">
            <h1>Menu</h1>

            <li className="mt-3 text-light">Deals</li>
            <li className=" text-light">Bevarges</li>
            <li className=" text-light">Food</li>
            <li className=" text-light">HouseHold</li>
            <li className=" text-light">Personal Care</li>
            <li className=" text-light">My Orders</li>
          </ul>
        </div>

        <div className="col-5 col-lg-2">

            <ul type="none" className="p-0">

                <h1>Categories</h1>

                <li className="mt-3 text-light">Vegetables</li>
                <li className="text-light">Bakery</li>
                <li className=" text-light">wine</li>
                <li className="text-light">Dairy&eggs</li>
                <li className=" text-light">Meat&Polutary</li>
                <li className=" text-light">Soft Drinks</li>
                <li className=" text-light">Cleaning Supplies</li>
               

            </ul>



        </div>
        <div className="col-5 col-lg-2">

            <ul type="none">

                <h1>Info</h1>

                <li className="mt-3 text-light">FAQ</li>
                <li className="text-light">About us</li>
                <li className=" text-light">Customer Support</li>
                <li className="text-light">Contact us</li>
                

            </ul>



        </div>
        <div className="col-5  col-lg-2">

            <ul type="none">

                <h1>My Chocies</h1>

                <li className="mt-3 text-light">Favourites</li>
                <li className="text-light">My orders</li>
                
                

            </ul>



        </div>

      </div>
     </div> 
   
    </>
  );
}
