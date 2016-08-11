var React=require("react");
//var GmailLeft=require('./GmailLeft');
var GmailRightBox1=require('./GmailRightBox1');
var globalarray=[];
var GmailRightBox = React.createClass({


getInitialState: function() {
   return {data: []};
 },


AllMessage(){
  var that=this;
  console.log("in allmsg function");
  console.log("id"+this.props.clickedLabelId);
  var accessToken = localStorage.getItem('gToken');
  $.ajax({
   url: 'https://www.googleapis.com/gmail/v1/users/magardenikita%40gmail.com/messages?labelIds='+this.props.clickedLabelId+'&maxResults=10&key={AIzaSyCHD3ofjLBF5zJlXMEww1obibxXWwLMEuY}',
   dataType: 'json',
   type: 'GET',
   beforeSend: function (request)
   {
   request.setRequestHeader("Authorization", "Bearer "+accessToken);
   },
   success: function(data)
   {
       var allmessages = data.messages;
      // console.log(allmessages);
       allmessages.forEach(function(data2) {
        //console.log(data2.id);
      //  var id1=data2.id;
        //console.log(id1);
        $.ajax({

            beforeSend: function (request){
            request.setRequestHeader("Authorization", "Bearer "+accessToken);
          },

         url: 'https://www.googleapis.com/gmail/v1/users/magardenikita@gmail.com/messages/'+data2.id+'?fields=payload%2Fheaders&key={AIzaSyCHD3ofjLBF5zJlXMEww1obibxXWwLMEuY}',
         dataType: 'json',
         type: 'GET',

         success: function(data1)
         {
          // var array1=$.map(data1, function(el) { return el });
          var array1=Object.keys(data1).map(function(k){return data1[k]});
          var mailDataArr=array1[0].headers;
         //console.log(JSON.stringify(mailDataArr));

         var fromArray = mailDataArr.filter(function(item) { return item.name === 'From';});

         var subjectArray = mailDataArr.filter(function(item) { return item.name === 'Subject';});
         var dateArray = mailDataArr.filter(function(item) { return item.name === 'Date';});
        var id= mailDataArr.filter(function(item) { return item.name === 'Message-ID';});
console.log("check");
        //console.log(id);
          //console.log("checking aggregated array");
          console.log(JSON.stringify(dateArray));
         var aggregatedArray=fromArray.concat(subjectArray).concat(dateArray);
         globalarray.push(aggregatedArray);
        // console.log(JSON.stringify(aggregatedArray));
         //console.log("before setState");
         //console.log(this);
           that.setState({data:globalarray});
         }.bind(this),
         error: function(xhr, status, err) {
           //console.error(err.toString());
         }.bind(this)
         });


       });

}.bind(this),
   error: function(xhr, status, err) {
     console.error(err.toString());
   }.bind(this)
   });
},


  componentDidMount: function()
    {
      this.AllMessage();
    },



  render: function() {
 return(
      <div>
<GmailRightBox1 data={this.state.data}/>
      </div>

  );
}
});
module.exports=GmailRightBox;
