var React=require("react");
//var {render}=require("react-dom");

//var GrandRightSide=require("./grandrightside.js");
var GrandRightSide2=require("./grandrightside2.js");
//var Inbox=require("./inbox.js");
//var Sent=require("./sent.js");
//var ManageRules=require("./managerules.js");
//var Drafts=require("./drafts.js");
//var Favourites=require("./favourites.js");
var GmailRightBox=require("./GmailRightBox.js");
var RightSide=React.createClass({
  render:function(){
    return(
                        <div>


                        <div className="container-fluid">
 	<div className="row">
 		<div className="col-md-12">
 			<div className="row">
<div className="col-md-12">

     <GrandRightSide2/>

 				</div>
 			</div>
 			<div className="row">
<div className="col-md-12">
<GmailRightBox clickedLabelId={this.props.clickedLabelId}/>
	</div>
 			</div>
 		</div>
 	</div>
 </div>








                </div>

              );
              }

              });

            //render(<MainComponent/>,document.getElementById('app'));
            module.exports=RightSide;
