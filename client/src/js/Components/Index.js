var React=require("react");
var {Link}=require('react-router');
var Index = React.createClass({
    render: function() {
      return(
      <div>
      I m from Index

    <div className="row">
    <div className="col-lg-4 col-md-4 col-sm-4 navbar">

    <ul>
    <li> <Link to="/About" activeClassName="active">About us</Link></li>
    <li> <Link to="/ContactUs" activeClassName="active">Contact us</Link></li>
    <li></li>
    </ul>

      </div>
      <div className="col-lg-8 col-md-8 col-sm-8">
{this.props.children}
      </div>
    </div>
      </div>
      );
    }

});
module.exports=Index;
