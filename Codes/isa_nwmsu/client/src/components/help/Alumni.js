import React, { Component } from "react";
import Navbar from "../layout/Navbar";
import AdminNavbar from "../layout/AdminNavbar";
import { Card, Icon, Image } from 'semantic-ui-react'

let navbar =undefined;

class Alumni extends Component {
    constructor() {
        super();
        this.state = {
            errors: {}
        };
    }

    componentWillMount(){
        if (localStorage.getItem('jwtToken') != null) {
            this.setState({ loggedIn: true });
          }
          if (localStorage.getItem('role') === null || localStorage.getItem('role') === '50') {
            navbar = <Navbar />
          }
          if (localStorage.getItem('role') === '100') {
            navbar = <AdminNavbar />
          }
    }

    render() {

        return (
            <div>
                {navbar}
                <div class="container">
                    <div class="row text-center">
                        <div class="col">
                        <h2 class="h1-responsive font-weight-bold my-5">Alumni</h2>
                        </div>
                    </div>
                    <div class="row text-center">
                        <div class="col">
                        <h4 class="h1-responsive font-weight-bold my-5">2018-2019</h4>
                        </div>
                    </div>
                    {/* row - 1 */}
                    <div class="row">
                        {/* col - 1,1/3 */}
                        <div class="col-md-4">
                            <Card>
                                <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                                <Card.Content>
                                    <Card.Header>Mukesh Reddy Vundra</Card.Header>
                                    <Card.Meta>
                                        <span className='date'>President</span>
                                    </Card.Meta>
                                    <br/>
                                    <Card.Description>
                                    <ul class="list-unstyled mb-0">
                            <li>
                            <Icon name='phone' /><p style={{ display: "inline-flex" }}>&nbsp;+1 (415) 483-6378</p>
                                </li>
                                <li>
                                <Icon name='mail' /><p style={{ display: "inline-flex" }}>&nbsp;S533631@nwmissouri.edu</p>
                                </li>
                            </ul>
      </Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    
                                        <Icon name='home' />
        MS-IS
      
                                </Card.Content>
                            </Card>
                        </div>
                        {/* col - 1,2/3 */}
                        <div class="col-md-4">
                            <Card>
                                <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                                <Card.Content>
                                    <Card.Header>Srikar Patle</Card.Header>
                                    <Card.Meta>
                                        <span className='date'>Vice President</span>
                                    </Card.Meta>
                                    <br/>
                                    <Card.Description>
                                    <ul class="list-unstyled mb-0">
                            <li>
                            <Icon name='phone' /><p style={{ display: "inline-flex" }}>&nbsp;+1 (660) 528-0897</p>
                                </li>
                                <li>
                                <Icon name='mail' /><p style={{ display: "inline-flex" }}>&nbsp;S533986@nwmissouri.edu</p>
                                </li>
                            </ul>
      </Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    
                                        <Icon name='home' />
        MS-ACS
      
                                </Card.Content>
                            </Card>

                        </div>
                        {/* col - 1,3/3 */}
                        <div class="col-md-4">
                            <Card>
                                <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                                <Card.Content>
                                    <Card.Header style={{fontSize:'1rem'}}>Venkateswara Reddy Singamreddy</Card.Header>
                                    <Card.Meta>
                                        <span className='date'>Secretary</span>
                                    </Card.Meta>
                                    <br/>
                                    <Card.Description>
                                    <ul class="list-unstyled mb-0">
                            <li>
                            <Icon name='phone' /><p style={{ display: "inline-flex" }}>&nbsp;+1 (660) 528-0693</p>
                                </li>
                                <li>
                                <Icon name='mail' /><p style={{ display: "inline-flex" }}>&nbsp;S534050@nwmissouri.edu</p>
                                </li>
                            </ul>
      </Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    
                                        <Icon name='home' />
        MS-Agriculture Science
      
                                </Card.Content>
                            </Card>
                        </div>
                    </div>
                    <br /><br />
                    {/* row - 2 */}
                    <div class="row">
                        {/* col 2,1/3 */}
                        <div class="col-md-4">
                            <Card>
                                <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                                <Card.Content>
                                    <Card.Header>Satyakanth Kolakani</Card.Header>
                                    <Card.Meta>
                                        <span className='date'>Treasurer</span>
                                    </Card.Meta>
                                    <br/>
                                    <Card.Description>
                                    <ul class="list-unstyled mb-0">
                            <li>
                            <Icon name='phone' /><p style={{ display: "inline-flex" }}>&nbsp;+1 (660) 528-0802</p>
                                </li>
                                <li>
                                <Icon name='mail' /><p style={{ display: "inline-flex" }}>&nbsp;S533624@nwmissouri.edu</p>
                                </li>
                            </ul>
      </Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    
                                        <Icon name='home' />
        MS-ACS
      
                                </Card.Content>
                            </Card>
                        </div>

                        {/* col 2,2/3 */}
                        <div class="col-md-4">
                            <Card>
                                <Image src='https://react.semantic-ui.com/images/avatar/large/molly.png' wrapped ui={false} />
                                <Card.Content>
                                    <Card.Header>Durga Sushmitha Kotyada</Card.Header>
                                    <Card.Meta>
                                        <span className='date'>Cultural Organizer</span>
                                    </Card.Meta>
                                    <br/>
                                    <Card.Description>
                                    <ul class="list-unstyled mb-0">
                            <li>
                            <Icon name='phone' /><p style={{ display: "inline-flex" }}>&nbsp;+1 (720) 621-4225</p>
                                </li>
                                <li>
                                <Icon name='mail' /><p style={{ display: "inline-flex" }}>&nbsp;S533710@nwmissouri.edu</p>
                                </li>
                            </ul>
      </Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    
                                        <Icon name='home' />
        MS-ACS
      
                                </Card.Content>
                            </Card>
                        </div>

                        </div>
                </div>
            </div>
            
        );
    }
}

export default Alumni;
