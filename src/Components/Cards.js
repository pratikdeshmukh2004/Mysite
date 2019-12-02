import _ from 'underscore';
import {MDBIcon, MDBView, MDBContainer, MDBCardBody, MDBCardImage, MDBFooter, MDBCardText, MDBCol, } from 'mdbreact';
import {CardGroup,Card} from 'react-bootstrap';

import React, { Component } from 'react'

export class Cards extends Component {
    state={
        "Detail":[
        {
            "Name":"Pratik Deshmukh","Link":"https://avatars1.githubusercontent.com/u/44018192?s=460&v=4","Status":"FullStrack Devloper","Other":{
                "F":"https://www.facebook.com/pratik9545","L":"https://www.linkedin.com/in/pratik-deshmukh-b2a135185/","G":"https://github.com/pratiknavgurukul"
            }
        },{
            "Name":"Anand Patel","Link":"https://avatars2.githubusercontent.com/u/44016225?s=460&v=4","Status":"Backend Devloper","Other":{
                "F":"https://www.facebook.com/profile.php?id=100028953893385&fref=profile_friend_list&hc_location=friends_tab","L":"https://www.linkedin.com/in/anand-patel-162134185/","G":"https://github.com/anandpatel504"
            }
        },{
            "Name":"Bhavnesh Chamare","Link":"https://avatars1.githubusercontent.com/u/41062030?s=460&v=4","Status":"Backend Devloper","Other":{
                "F":"https://www.facebook.com/bhavnesh.chamare.77","L":"https://www.linkedin.com/in/bhavnesh-chamare-b74521168/","G":"https://github.com/bhavnesh2211"
            }
        },{
            "Name":"Kapil Chouhan","Link":"https://avatars3.githubusercontent.com/u/45585049?s=460&v=4","Status":"Backend Devloper","Other":{
                "F":"https://www.facebook.com/profile.php?id=100012855614452&ref=br_rs","L":"https://www.linkedin.com/in/pratik-deshmukh-b2a135185/","G":"https://github.com/kapilnavgurukul"
            }
        },{
            "Name":"Satyam Chauhan","Link":"https://avatars0.githubusercontent.com/u/43547396?s=460&v=4","Status":"FullStrack Devloper","Other":{
                "F":"https://www.facebook.com/profile.php?id=100007823800345&ref=br_rs","L":"https://www.linkedin.com/in/satyam-singh-496ba1185/","G":"https://github.com/ssatyamchauhan"
            }
        },{
            "Name":"Jagan Swarnkar","Link":"https://avatars0.githubusercontent.com/u/43448819?s=460&v=4","Status":"FullStrack Devloper","Other":{
                "F":"https://www.facebook.com/jagannath.swornkar?fref=profile_friend_list&hc_location=friends_tab","L":"https://www.linkedin.com/in/jagannath-swarnkar-906664170/","G":"https://github.com/jagannath-swarnkar"
            }
        },{
            "Name":"Yogendra Gautam","Link":"https://avatars0.githubusercontent.com/u/43265032?s=460&v=4","Status":"FullStrack Devloper","Other":{
                "F":"https://www.facebook.com/profile.php?id=100011723793794&ref=br_rs","L":"https://www.linkedin.com/in/yogendra-gautam-468621168/","G":"https://github.com/yogendra3236"
            }
        },{
            "Name":"Sanjay Kumar","Link":"https://avatars3.githubusercontent.com/u/49368389?s=460&v=4","Status":"Backend Devloper","Other":{
                "F":"https://www.facebook.com/profile.php?id=100012156194900&fref=profile_friend_list&hc_location=friends_tab","L":"https://www.linkedin.com/in/kapil-chouhan-497125184/","G":"https://github.com/Sanjay2000"
            }
        }
        
    
    ]
    }
    componentWillMount(){
        
    }
    render() {
        return (
            <div style={{marginTop:"30px"}} >
            <h3 className="font-weight-bold mb-3">Team</h3>
          <CardGroup id="students">
          {_.map(this.state.Detail,(item)=>{
              return(
              <MDBCol>
              <Card className="cards">
              <MDBView hover zoom>
                  <MDBCardImage className="img-fluid" src={item.Link} waves />
                  <MDBCardBody>
              <h4 className="font-weight-bold mb-3">{item.Name}</h4>
              <p className="font-weight-bold blue-text">{item.Status}</p>
                  <hr />
                  <ul className="list-inline py-2">
                      <li className="list-inline-item">
                      <a href={item.Other.F} target="blank" className="p-2 fa-lg fb-ic">
                          <MDBIcon icon="facebook" brand />
                      </a>
                      </li>
                      <li className="list-inline-item">
                      <a href={item.Other.G} target="blank" className="p-2 fa-lg tw-ic">
                          <MDBIcon icon="github" brand />
                      </a>
                      </li>
                      <li className="list-inline-item">
                      <a href={item.Other.L} target="blank" className="p-2 fa-lg li-ic">
                          <MDBIcon icon="linkedin" brand />
                      </a>
                      </li>
                  </ul>
                  
                  </MDBCardBody>
                  </MDBView>
              </Card>
              </MDBCol>
              )
          })}
              </CardGroup>
              <MDBFooter className="primary-color font-small pt-2 mt-4">
              <div className="footer-copyright text-center py-3">
                  <MDBContainer fluid>
                  &copy; {new Date().getFullYear()} Created By: <a href="#pratik"> Pratik Deshmukh  navgurukul.ga</a>
                  </MDBContainer>
              </div>
              </MDBFooter>
          </div>
        )
    }
}

export default Cards;