import React, { Component } from "react";
import Navbar from "../layout/Navbar";
import AdminNavbar from "../layout/AdminNavbar";
import { Card, Icon, Image } from 'semantic-ui-react'

let navbar = undefined;

class ContactUs extends Component {
    constructor() {
        super();
        this.state = {
            errors: {}
        };
    }

    componentWillMount() {
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
                <br />
                <div class="container">
                    <div class="row text-center">
                        <div class="col">
                        <h2 class="h1-responsive font-weight-bold my-5">Contact Us</h2>
                        </div>
                    </div>
                    {/* row - 1 */}
                    <div class="row">
                        {/* col - 1,1/3 */}
                        <div class="col-md-4">
                            <Card>
                                <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                                <Card.Content>
                                    <Card.Header>Naga Sai Ram Narne</Card.Header>
                                    <Card.Meta>
                                        <span className='date'>ISA Advisor</span>
                                    </Card.Meta>
                                    <br/>
                                    <Card.Description>
                                    <ul class="list-unstyled mb-0">
                            <li>
                            <Icon name='phone' /><p style={{ display: "inline-flex" }}>&nbsp;+1 (123) 456 7890</p>
                                </li>
                                <li>
                                <Icon name='mail' /><p style={{ display: "inline-flex" }}>&nbsp;S123456@nwmissouri.edu</p>
                                </li>
                            </ul>
      </Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    
                                        <Icon name='home' />
        NWMSU
      
                                </Card.Content>
                            </Card>
                        </div>
                        {/* col - 1,2/3 */}
                        <div class="col-md-4">
                            <Card>
                                <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                                <Card.Content>
                                    <Card.Header>Mahender Reddy Surkanti</Card.Header>
                                    <Card.Meta>
                                        <span className='date'>President</span>
                                    </Card.Meta>
                                    <br/>
                                    <Card.Description>
                                    <ul class="list-unstyled mb-0">
                            <li>
                            <Icon name='phone' /><p style={{ display: "inline-flex" }}>&nbsp;+1 (660) 528-1069</p>
                                </li>
                                <li>
                                <Icon name='mail' /><p style={{ display: "inline-flex" }}>&nbsp;S537240@nwmissouri.edu</p>
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
                                    <Card.Header>SaiPrasad Bobbilla</Card.Header>
                                    <Card.Meta>
                                        <span className='date'>Vice President</span>
                                    </Card.Meta>
                                    <br/>
                                    <Card.Description>
                                    <ul class="list-unstyled mb-0">
                            <li>
                            <Icon name='phone' /><p style={{ display: "inline-flex" }}>&nbsp;+1 (660) 528-1091</p>
                                </li>
                                <li>
                                <Icon name='mail' /><p style={{ display: "inline-flex" }}>&nbsp;S536845@nwmissouri.edu</p>
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
                    <br /><br />
                    {/* row - 2 */}
                    <div class="row">
                        {/* col 2,1/3 */}
                        <div class="col-md-4">
                            <Card>
                                <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                                <Card.Content>
                                    <Card.Header>Abilash Bollam</Card.Header>
                                    <Card.Meta>
                                        <span className='date'>Secretary</span>
                                    </Card.Meta>
                                    <br/>
                                    <Card.Description>
                                    <ul class="list-unstyled mb-0">
                            <li>
                            <Icon name='phone' /><p style={{ display: "inline-flex" }}>&nbsp;+1 (660) 528-0786</p>
                                </li>
                                <li>
                                <Icon name='mail' /><p style={{ display: "inline-flex" }}>&nbsp;S536777@nwmissouri.edu</p>
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

                        {/* col 2,2/3 */}
                        <div class="col-md-4">
                            <Card>
                                <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                                <Card.Content>
                                    <Card.Header>Dheeraj Edupuganti</Card.Header>
                                    <Card.Meta>
                                        <span className='date'>Treasurer</span>
                                    </Card.Meta>
                                    <br/>
                                    <Card.Description>
                                    <ul class="list-unstyled mb-0">
                            <li>
                            <Icon name='phone' /><p style={{ display: "inline-flex" }}>&nbsp;+1 (479) 321-2727</p>
                                </li>
                                <li>
                                <Icon name='mail' /><p style={{ display: "inline-flex" }}>&nbsp;S537151@nwmissouri.edu</p>
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

                        {/* col 2,3/3 */}

                        <div class="col-md-4">
                            <Card>
                                <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                                <Card.Content>
                                    <Card.Header>Sushma Yedugani</Card.Header>
                                    <Card.Meta>
                                        <span className='date'>Publicist</span>
                                    </Card.Meta>
                                    <br/>
                                    <Card.Description>
                                    <ul class="list-unstyled mb-0">
                            <li>
                            <Icon name='phone' /><p style={{ display: "inline-flex" }}>&nbsp;+1 (660) 528-0691</p>
                                </li>
                                <li>
                                <Icon name='mail' /><p style={{ display: "inline-flex" }}>&nbsp;S536846@nwmissouri.edu</p>
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
                    <br /><br />
                    {/* row 3 */}
                    <div class="row">
                        {/* col 3,1/3 */}
                        <div class="col-md-4">
                            <Card>
                                <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                                <Card.Content>
                                    <Card.Header>Aparna Pallavaraja</Card.Header>
                                    <Card.Meta>
                                        <span className='date'>Cultural Organizer</span>
                                    </Card.Meta>
                                    <br/>
                                    <Card.Description>
                                    <ul class="list-unstyled mb-0">
                            <li>
                            <Icon name='phone' /><p style={{ display: "inline-flex" }}>&nbsp;+1 (475) 393-8740</p>
                                </li>
                                <li>
                                <Icon name='mail' /><p style={{ display: "inline-flex" }}>&nbsp;S537490@nwmissouri.edu</p>
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

                        {/* col 3,2/3 */}
                        <div class="col-md-4">
                            <Card>
                                <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                                <Card.Content>
                                    <Card.Header>Jeevan Reddy Mure </Card.Header>
                                    <Card.Meta>
                                        <span className='date'>Sports</span>
                                    </Card.Meta>
                                    <br/>
                                    <Card.Description>
                                    <ul class="list-unstyled mb-0">
                            <li>
                            <Icon name='phone' /><p style={{ display: "inline-flex" }}>&nbsp;+1 (813) 629-3589</p>
                                </li>
                                <li>
                                <Icon name='mail' /><p style={{ display: "inline-flex" }}>&nbsp;S536980@nwmissouri.edu</p>
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

export default ContactUs;
