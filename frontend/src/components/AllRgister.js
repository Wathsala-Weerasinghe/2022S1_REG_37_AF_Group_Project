import { Outlet, Link } from "react-router-dom";
function AllTReg(){
    return(

        <div className = "container">
             <br></br><br></br><br></br>
            <center><h2 style={{color:"#2f4f4f"}}><i>All Order Confirmations.</i></h2></center>
            <br></br><br></br><br></br>    
        <br></br><br></br><br></br><br></br>
            <table className="table">
                <thead>
                    <tr>
                        <th>Customer Name</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Method of payment</th>
                        <th>Confirm Date</th>
                    </tr>
                </thead>
            </table>
            <Link to={"/add/confirm"} className="btn btn-success btn-sm">Add New Order</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <br></br><br></br><br></br>

            <div class="card-group">
  <div class="card">
    <img src='/images/im1.jpeg'  class="card-img-top" alt="#"/>
    <div class="card-body">
      <h5 class="card-title">Organic Food Products</h5>
      <p class="card-text">All our products are organic.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <div class="card">
    <img src='/images/im2.jpeg'  class="card-img-top" alt="#"/>
    <div class="card-body">
      <h5 class="card-title">Other Equipments</h5>
      <p class="card-text">We will deliver all the products to your door step.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <div class="card">
    <img src='/images/im3.jpeg'  class="card-img-top" alt="#"/>
    <div class="card-body">
      <h5 class="card-title">Easy Payment</h5>
      <p class="card-text">We provide our servise to our valued customers by introducing easy payment methods via online.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
                <br></br><br></br><br></br>
                
        </div>
    )
}

export default AllTReg;