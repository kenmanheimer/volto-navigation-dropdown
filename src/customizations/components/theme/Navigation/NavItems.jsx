import React from 'react';
import NavItem from '@plone/volto/components/theme/Navigation/NavItem';
import config from '@plone/volto/registry';
import { Dropdown } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import './dropdownmenu.css';

const NavItems = ({ items, lang, interior=false }) => {
  const { settings } = config;
  return (
    <>
      {items.map((item) =>
        item && item.items && item.items.length > 0 ? (
          <Dropdown simple
                    text={item.title}
                    className="item"
                    to={item.url === '' ? '/' : item.url}
                    exact={
                      settings.isMultilingual
                          ? item.url === `/${lang}` : item.url === ''
                    }
                    as={NavLink}
                    key={item.url} >
            <Dropdown.Menu>
              <NavItems items={item.items} lang={lang} interior={true} />
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          <NavItem item={item} lang={lang} key={item.url} />
        ),
      )}
    </>
  );
};

export default NavItems;
