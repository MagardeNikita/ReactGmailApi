var React=require("react");
//var {render}=require("react-dom");
//var GrandChildComponent=require("./GrandChildComponent.js");
//var GrandChildComponent1=require("./GrandChildComponent1.js");
var Inbox=React.createClass({
  render:function(){
    return(
              <div>
              <div className="inbox-body">
                  <table className="table table-inbox table-hover">
                    <tbody>
                    <tr className="unread">
                        <td className="send-small-cells">
                        </td>
                        <td className="send-small-cells"></td>
                        <td className="view-message  dont-show">From</td>
                        <td className="view-message ">Subject</td>
                        <td className="view-message  send-small-cells"></td>
                        <td className="view-message  text-right">Date</td>
                    </tr>
                      <tr className="unread">
                          <td className="inbox-small-cells">
                              <input type="checkbox" className="mail-checkbox"/>
                          </td>
                            <td><span className="glyphicon glyphicon-star-empty"></span></td>
                          <td className="view-message  dont-show">PHPclassName</td>
                          <td className="view-message ">Added a new className: Login className Fast Site</td>
                          <td className="view-message  inbox-small-cells"><i className="fa fa-paperclip"></i></td>
                          <td className="view-message  text-right">9:27 AM</td>
                      </tr>
                      <tr className="unread">
                          <td className="inbox-small-cells">
                              <input type="checkbox" className="mail-checkbox"/>
                          </td>
                          <td><span className="glyphicon glyphicon-star-empty"></span></td>
                          <td className="view-message dont-show">Google Webmaster </td>
                          <td className="view-message">Improve the search presence of WebSite</td>
                          <td className="view-message inbox-small-cells"></td>
                          <td className="view-message text-right">March 15</td>
                      </tr>
                      <tr className="">
                          <td className="inbox-small-cells">
                              <input type="checkbox" className="mail-checkbox"/>
                          </td>
                          <td><span className="glyphicon glyphicon-star-empty"></span></td>
                          <td className="view-message dont-show">JW Player</td>
                          <td className="view-message">Last Chance: Upgrade to Pro for </td>
                          <td className="view-message inbox-small-cells"></td>
                          <td className="view-message text-right">March 15</td>
                      </tr>
                      <tr className="">
                          <td className="inbox-small-cells">
                              <input type="checkbox" className="mail-checkbox"/>
                          </td>
                        <td><span className="glyphicon glyphicon-star-empty"></span></td>
                          <td className="view-message dont-show">Tim Reid, S P N</td>
                          <td className="view-message">Boost Your Website Traffic</td>
                          <td className="view-message inbox-small-cells"></td>
                          <td className="view-message text-right">April 01</td>
                      </tr>
                      <tr className="">
                          <td className="inbox-small-cells">
                              <input type="checkbox" className="mail-checkbox"/>
                          </td>
                          <td><span className="glyphicon glyphicon-star-empty"></span></td>
                          <td className="view-message dont-show">Freelancer.com <span className="label label-danger pull-right">urgent</span></td>
                          <td className="view-message">Stop wasting your visitors </td>
                          <td className="view-message inbox-small-cells"></td>
                          <td className="view-message text-right">May 23</td>
                      </tr>
                      <tr className="">
                          <td className="inbox-small-cells">
                              <input type="checkbox" className="mail-checkbox"/>
                          </td>
                        <td><span className="glyphicon glyphicon-star-empty"></span></td>
                          <td className="view-message  dont-show">PHPclassName</td>
                          <td className="view-message ">Added a new className: Login className Fast Site</td>
                          <td className="view-message  inbox-small-cells"><i className="fa fa-paperclip"></i></td>
                          <td className="view-message  text-right">9:27 AM</td>
                      </tr>
                      <tr className="">
                          <td className="inbox-small-cells">
                              <input type="checkbox" className="mail-checkbox"/>
                          </td>
                          <td><span className="glyphicon glyphicon-star-empty"></span></td>
                          <td className="view-message dont-show">Google Webmaster </td>
                          <td className="view-message">Improve the search presence of WebSite</td>
                          <td className="view-message inbox-small-cells"></td>
                          <td className="view-message text-right">March 15</td>
                      </tr>
                      <tr className="">
                          <td className="inbox-small-cells">
                              <input type="checkbox" className="mail-checkbox"/>
                          </td>
                          <td><span className="glyphicon glyphicon-star-empty"></span></td>
                          <td className="view-message dont-show">JW Player</td>
                          <td className="view-message">Last Chance: Upgrade to Pro for </td>
                          <td className="view-message inbox-small-cells"></td>
                          <td className="view-message text-right">March 15</td>
                      </tr>
                      <tr className="">
                          <td className="inbox-small-cells">
                              <input type="checkbox" className="mail-checkbox"/>
                          </td>
                        <td><span className="glyphicon glyphicon-star-empty"></span></td>
                          <td className="view-message dont-show">Tim Reid, S P N</td>
                          <td className="view-message">Boost Your Website Traffic</td>
                          <td className="view-message inbox-small-cells"></td>
                          <td className="view-message text-right">April 01</td>
                      </tr>
                      <tr className="">
                          <td className="inbox-small-cells">
                              <input type="checkbox" className="mail-checkbox"/>
                          </td>
                          <td><span className="glyphicon glyphicon-star-empty"></span></td>
                          <td className="view-message dont-show">Freelancer.com <span className="label label-danger pull-right">urgent</span></td>
                          <td className="view-message">Stop wasting your visitors </td>
                          <td className="view-message inbox-small-cells"></td>
                          <td className="view-message text-right">May 23</td>
                      </tr>
                  </tbody>
                  </table>
              </div>
              </div>
            );
            }
            });
          //render(<MainComponent/>,document.getElementById('app'));
          module.exports=Inbox;
