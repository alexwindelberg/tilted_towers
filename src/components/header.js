import React from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap';

const header = (props) => (

      <div>
        <Nav tabs>
          <NavItem>
            <NavLink>
              Tab1
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={props.gameType}>
          <TabPane tabId={props.gameType}>
                
          </TabPane>
        </TabContent>
      </div>

);

export default header;