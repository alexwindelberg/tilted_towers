import React from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap';

const card_header = (props) => (

      <div>
        <Nav tabs>
          <NavItem>
            <NavLink>
              Solo
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={props.gameType}>
          <TabPane tabId={props.gameType}>
          
          </TabPane>
        </TabContent>
      </div>

);

export default card_header;