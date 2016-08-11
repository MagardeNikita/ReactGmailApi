var React=require("react");
var GmailRightBox2=require("./GmailRightBox2.js");
var GmailRightBox1 = React.createClass({
  render: function() {
  //  console.log("In righta");
    var rows=[];

//console.log("rightbox ");
  //console.log("data");
//console.log(JSON.stringify((this.props.data[0]).value));
//console.log("data");
    this.props.data.forEach(function(data) {
//console.log("hi");
        //console.log(JSON.stringify(data[2].value));


    var from1 =data[0].value;
    var subject=data[1].value;
    var date=data[2].value;
    //console.log("hey");
    //console.log(date);
       //rows.push(data.value);
       //<GmailRightBox2 data={rows}/>

        //console.log("rows.................");
      //  console.log(rows);

rows.push(<GmailRightBox2 from1={from1}  subject={subject}  date={date}/>);
//console.log(rows+"mmmmmmmm");

      });


return (

  <div className="panel-body">
<table className="table table-bordered table-inverse" >
  <tbody>{rows}</tbody>
</table>
</div>

);
}
});


module.exports=GmailRightBox1;
