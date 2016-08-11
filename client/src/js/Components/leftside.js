var React=require("react");
//var {render}=require("react-dom");
//var GrandChildComponent=require("./GrandChildComponent.js");
//var GrandChildComponent1=require("./GrandChildComponent1.js");
var Compose=require("./compose.js");
var LeftSide=React.createClass({
  render:function(){
    return(
                        <div>
                        <div className="container-fluid">



  	<div className="row Magarde">
    <div className="col-md-12">
			<div className="row">
				<div className="col-md-12" >
         <Compose/>
				</div>
			</div>
			<div className="row">
				<div className="col-md-12">

					<button type="button" className="btn btn-primary Nikita">
						All
					</button>
				</div>
			</div>
			<div className="row">
				<div className="col-md-12">

					<button type="button" className="btn btn-primary Nikita">
						Inbox
					</button>
				</div>
			</div>
			<div className="row">
				<div className="col-md-12">

					<button type="button" className="btn btn-primary Nikita">
						Sent
					</button>
				</div>
			</div>
			<div className="row">
				<div className="col-md-12">

					<button type="button" className="btn btn-primary Nikita">
						Trash
					</button>
				</div>
			</div>
			<div className="row">
				<div className="col-md-12">

					<button type="button" className="btn btn-primary Nikita">
						Draft
					</button>
				</div>
			</div>
			<div className="row">
				<div className="col-md-12">

					<button type="button" className="btn btn-primary Nikita">
						Favourite
					</button>
				</div>
			</div>
      <div className="row">
        <div className="col-md-12">

          <button type="button" className="btn btn-primary Nikita1">
            ManageRules
          </button>
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
            module.exports=LeftSide;
