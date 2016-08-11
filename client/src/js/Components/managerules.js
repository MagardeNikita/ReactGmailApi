
var React = require('react');
//var {render}=require('react-dom');


var ManageRules=React.createClass({
 render:function(){
   return(
     <div className="container">
          <div className="inbox-body">

          <div className="modal-dialog">
          <div className="modal-content">
          <div className="modal-header">
           <button aria-hidden="true" data-dismiss="modal" className="close" type="button"></button>
           <h3 className="modal-title my_modal">Manage Rules</h3>
           <button className="btn btn-danger my_button" data-dismiss="modal"type="button">X</button>
          </div>

        <form role="form" className="form-horizontal">
         <div className="container-fluid">
          <div className="form-group">
          <label className="col-lg-4 control-label">Enter Email</label>
          <div className="col-lg-8 control-label">
           <input type="text" className="form-control" placeholder="Type email here.." />
          </div>

          </div>

          <div className="form-group">
              <label className="col-lg-4 control-label">Type Subject</label>
              <div className="col-lg-8">
              <input type="text" className="form-control" placeholder="Enter subject here.." />
              </div>

           </div>

           <hr></hr>
           <div className="container-fluid">
            <div className="form-group">
             <div className="col-lg-4">
               <h4><b>Move To:</b></h4>
             </div>
             <div className="col-lg-12">
              <div className="col-lg-4">
                <button className="btn btn-info" type="button">Draft</button>
              </div>
              <div className="col-lg-4">
                <button className="btn btn-info" type="button">Favorites</button>
              </div>
              <div className="col-lg-4">
                <button className="btn btn-info" type="button">Trash</button>
              </div>

             </div>
          </div>
          </div>



        <div className="form-group">
        <div className="col-lg-12">
        <div className="modal-footer">
          <button className="btn btn-danger" data-dismiss="modal" type="button">Cancel</button>
          <button className="btn btn-success" type="button">Save Changes</button>
        </div>
        </div>
        </div>
</div>
          </form>
          </div>
          </div>
          </div>

          </div>

);

 }
});

//render(<ChildComponent/>,document.getElementById('app'));

module.exports=ManageRules;
