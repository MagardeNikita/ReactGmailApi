var React=require("react");
var Reply=require("./Reply.js");
var GmailRightBox2= React.createClass({
  getInitialState:function()
  {
  return({showModal:false});
  }
,
  handleShowModal: function(e)
  {
    this.setState({showModal:true});
  },
  handleHideModal:function()
  {
    this.setState({showModal:false});
  },
  render: function() {
  /*  getInitialState: function() {
       return ({data2: []});
     },*/

      //console.log("In rightb");
 //var array=[];
var from2=this.props.from1;
var subject2=this.props.subject;
var date2=this.props.date;
  //console.log("rightbox ");
  //  console.log("data");
  //console.log(JSON.stringify(from2));
//this.setState({data:array});




    return (
    <tr>
      <td>{this.props.from1}</td>
      <td>
          <a href="#replyModal" onMouseDown={this.handleShowModal} data-toggle="modal">
            {this.props.subject}
          </a>
          {this.state.showModal ? <Reply handleHideModal={this.handleHideModal} from2={from2} subject2={subject2}/> : null}
      </td>
      <td>{this.props.date}
      </td>
    </tr>




    );
  }
});
module.exports=GmailRightBox2;
