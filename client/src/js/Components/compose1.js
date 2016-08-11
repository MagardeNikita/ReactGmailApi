var React=require("react");

var Compose= React.createClass({
  getInitialState:function()
  {
    return({To:'',Subject:'',messageBody:''});
  },
  handleToChange:function(e)
  {
    this.setState({To:e.target.value});
    console.log(this.state.To);
  },
  handleSubjectChange:function(e)
  {
    this.setState({Subject:e.target.value});
    console.log(this.state.Subject);
  },
  handleBodyChange:function(e)
  {
    this.setState({messageBody:e.target.value});
    console.log(this.state.messageBody);
  },

sendMessage:function()
{
  //alert("hi");
  //alert(this.refs.toEmailId.value);
  //alert(this.refs.SujectOfMail.value);
  //alert(this.refs.bodyOfMail.value);
          var accessToken=localStorage.getItem('gToken');
          alert("in send message function");
          var emaildata='';
          var To = this.refs.toEmailId.value;
          var Subject = this.refs.SujectOfMail.value;
          var Headers={'To': To,'Subject': Subject};
          for(var header in Headers){
              emaildata  += header+= ": "+Headers[header]+"\r\n";
          }
          var BodyofMail = this.refs.bodyOfMail.value;
          emaildata += "\r\n" + BodyofMail;
          console.log(emaildata);
          //alert(emaildata);
          var encodedMessage= window.btoa(emaildata).replace(/\+/g, '-').replace(/\//g, '-');
          console.log(encodedMessage);
          //alert(encodedMessage);

          //alert(accessToken);

          $.ajax({
                  url:'https://www.googleapis.com/upload/gmail/v1/users/magardenikita%40gmail.com/messages/send?key={AIzaSyCHD3ofjLBF5zJlXMEww1obibxXWwLMEuY}',
                  type:'POST',
                  dataType:'json',
                  contentType:'application/json',
                  async : false,
                  beforeSend:function(request)
                    {
                      request.setRequestHeader("Authorization","Bearer "+accessToken);
                    },
                    data: {'raw':encodedMessage},
                    success: function(data)
                    {
                      alert("success");
                      console.log("success");

                    }.bind(this),
                     error: function(xhr, status,err)
                     {
                     console.log(err);
                     setTimeOut(console.log(status),3000);
                     setTimeOut(console.log(xhr),3000);
                     //alert('I am from error');
                      //alert(err.toString()+"hi");
                    }.bind(this)
                  });
  },

render: function() {
    return (
      <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabIndex="-1" id="myModal" className="modal fade" >
                                 <div className="modal-dialog">
                                     <div className="modal-content">
                                         <div className="modal-header">
                                             <button aria-hidden="true" data-dismiss="modal" className="close" type="button">×</button>
                                             <h4 className="modal-title">Compose</h4>
                                         </div>
                                         <div className="modal-body">
                                             <form role="form" className="form-horizontal">
                                                 <div className="form-group">
                                                     <label className="col-lg-2 control-label">To</label>
                                                     <div className="col-lg-10">
                                                         <input type="text" placeholder="" onChange={this.handleToChange} id="inputEmail1" ref="toEmailId" className="form-control"/>
                                                     </div>
                                                 </div>
                                                 <div className="form-group">
                                                     <label className="col-lg-2 control-label">Cc / Bcc</label>
                                                     <div className="col-lg-10">
                                                         <input type="text" placeholder="" id="cc" className="form-control"/>
                                                     </div>
                                                 </div>
                                                 <div className="form-group">
                                                     <label className="col-lg-2 control-label">Subject</label>
                                                     <div className="col-lg-10">
                                                         <input type="text" placeholder="" onChange={this.handleSubjectChange} id="inputPassword1"  ref="SujectOfMail"className="form-control"/>
                                                     </div>
                                                 </div>
                                                 <div className="form-group">
                                                     <label className="col-lg-2 control-label">Message</label>
                                                     <div className="col-lg-10">
                                                         <textarea rows="10" cols="30" className="form-control" onChange={this.handleBodyChange} id="" name="" ref="bodyOfMail"></textarea>
                                                     </div>
                                                 </div>

                                                 <div className="form-group">
                                                     <div className="col-lg-offset-2 col-lg-10">
                                                         <span className="btn green fileinput-button">
                                                           <i className="fa fa-plus fa fa-white"></i>
                                                           <span>Attachment</span>
                                                           <input type="file" name="files[]" multiple=""/>
                                                         </span>
                                                         <button className="btn btn-send"  onClick={this.sendMessage}>Send</button>
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
module.exports=Compose;
