var React=require("react");
var {render}=require("react-dom");
//var GrandChildComponent=require("./GrandChildComponent.js");
//var GrandChildComponent1=require("./GrandChildComponent1.js");
//var {Router, Route, browserHistory }=require('react-router');
//var About=require('./About');
//var ContactUs=require('./ContactUs');
//var App=require('./Index');

var ChildComponent2=React.createClass({
  render:function(){

    return(
    <div>
    <nav className="navbar navbar-default navbar-inverse">
    <div className="container-fluid">

    <div className="navbar-header">
    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
    <span className="sr-only">Toggle navigation</span>
    <span className="icon-bar"></span>
    <span className="icon-bar"></span>
    <span className="icon-bar"></span>
    </button>
    <img src="http://www.for3tech.com/wp-content/uploads/2011/11/gmail-logo-icon.png" className="styl6"></img>
    <a href="#" className="Styl7">Gmail</a>
    </div>

    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">


    <form className="navbar-form navbar-left">
    <div className="form-group styl4">
      <input type="text" className="form-control styl5" placeholder="Search" />
    </div>
    <button type="submit" className="btn btn-default">Submit</button>

    </form>
    <ul className="nav navbar-nav navbar-right">
    <li><a href="#">LogOut</a></li>
    <li className="dropdown">
      <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Profile <span className="caret"></span></a>
      <ul className="dropdown-menu">
        <li> <a href="#"><span className="glyphicon glyphicon-wrench"></span> Settings</a></li>
        <li><a href="#"><span className="glyphicon glyphicon-briefcase"></span> My Account</a></li>
        </ul>
  </li>
    </ul>
    </div>
    </div>
    </nav>




	</div>
  );
  }

  });

//render(<MainComponent/>,document.getElementById('app'));
module.exports=ChildComponent2;
