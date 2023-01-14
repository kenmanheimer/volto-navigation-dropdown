import React from 'react';
import NavItem from '@plone/volto/components/theme/Navigation/NavItem';
import { isInternalURL } from '@plone/volto/helpers';
import { Dropdown } from 'semantic-ui-react';
import './dropdownmenu.css';

const NavItems = ({ items, lang }) => {
  return (
    <>
      {items.map((item) =>
        item && item.items && item.items.length > 0 ? (
          <Dropdown simple scrolling
                    text={item.title} className="item" key={item.url}>
            <Dropdown.Menu text={item.title} key={item.url}>
              <NavItem
                item={item}
                lang={lang}
                key={item.url}
              />
              <Dropdown.Divider />
              {item.items.map((dropdownitem) => (
                dropdownitem && dropdownitem.items && dropdownitem.items.length > 0 ? (
                  <Dropdown simple open="{isInternalURL(dropdownitem.url)}" scrolling
                            text={dropdownitem.title} className="item" key={dropdownitem.url}>
                    <Dropdown.Menu key={dropdownitem.url}>
                      <NavItems
                        items={dropdownitem.items}
                        lang={lang}
                      />
                    </Dropdown.Menu>
                  </Dropdown>
                ) : (
                  <NavItem
                    item={dropdownitem}
                    lang={lang}
                    key={dropdownitem.url}
                  />
                )
              ))}
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
