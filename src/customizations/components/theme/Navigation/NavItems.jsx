import React from 'react';
import NavItem from '@plone/volto/components/theme/Navigation/NavItem';
import { Dropdown } from 'semantic-ui-react';
import './dropdownmenu.css';

const NavItems = ({ items, lang, interior=false }) => {
  return (
    <>
      {items.map((item) =>
        item && item.items && item.items.length > 0 ? (
          <div class="ui compact menu">
            <div class="ui simple dropdown item">
              <NavItem
                item={item}
                lang={lang}
                key={item.url} />
              <i class="dropdown icon"></i>
              <div class="menu">
                <NavItems items={item.items} lang={lang} interior={true} />
              </div>
            </div>
          </div>
        ) : (
          <div class="ui simple dropdown item">
            <NavItem item={item} lang={lang} key={item.url} />
          </div>
        ),
      )}
    </>
  );
};

export default NavItems;
