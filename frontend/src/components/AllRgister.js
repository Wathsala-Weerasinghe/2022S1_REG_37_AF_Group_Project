import { Outlet, Link } from "react-router-dom";
function AllTReg(){
    return(

        <div className = "container">
             <br></br><br></br><br></br>
            <center><h2 style={{color:"#2f4f4f"}}><i>All Registered Groups.</i></h2></center>
            <br></br><br></br><br></br>    
        <br></br><br></br><br></br><br></br>
            <table className="table">
                <thead>
                    <tr>
                        <th>Group ID</th>
                        <th>Group Name</th>
                        <th>Leader's Name</th>
                        <th>Leader's IT number</th>
                    </tr>
                </thead>
            </table>
            <Link to={"/add/confirm"} className="btn btn-success btn-sm">Add New Order</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <br></br><br></br><br></br>

            <div class="card-group">
</div>
                <br></br><br></br><br></br>
                
        </div>
    )
}

export default AllTReg;