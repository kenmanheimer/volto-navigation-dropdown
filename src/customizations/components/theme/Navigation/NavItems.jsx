import React from 'react';
import NavItem from '@plone/volto/components/theme/Navigation/NavItem';
import { Dropdown } from 'semantic-ui-react';
import './dropdownmenu.css';

const NavItems = ({ items, lang, interior=false }) => {
  return (
    <>
      {items.map((item) =>
        item && item.items && item.items.length > 0 ? (
          <Dropdown simple
                    text={item.title}
                    className="item"
                    key={item.url} >
            <Dropdown.Menu>
               <NavItem
                 item={item}
                 lang={lang}
                 key={item.url}
                 className="header" />
              <Dropdown.Divider />
              <NavItems items={item.items} lang={lang} interior={true} />
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          <NavItem item={item} lang={lang} key={item.url} />
        ),
      )};
    </>
  );
};

export default NavItems;
