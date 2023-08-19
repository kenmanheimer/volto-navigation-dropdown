import React from 'react';
import config from '@plone/volto/registry';
import NavItem from '@plone/volto/components/theme/Navigation/NavItem';
import './dropdownmenu.css';

const NavItems = ({ items, lang, interior=false, depth=1 }) => {
  return (
    <>
      {items.map((item) =>
        item && item.items && item.items.length > 0 ? (
            <div className="ui simple dropdown item" key={item.url} >
              <NavItem
                item={item}
                lang={lang} />
              <i className="dropdown icon"></i>
              <div className="menu">
                { config.settings.dropdownmenu.selfInContents &&
                  <div className="menu-head-item">
                    <NavItem
                      item={item}
                      lang={lang} />
                  </div>
                }
                <NavItems items={item.items}
                          lang={lang}
                          interior={true}
                          depth={depth+1}/>
              </div>
            </div>
        ) : (
          ( depth > 1 ) ? (
            <NavItem item={item} lang={lang} key={item.url} />
          ) : (
            <div className="item" key={item.url}>
              <NavItem item={item} lang={lang} />
            </div>
          )
        )
      )}
    </>
  );
};

export default NavItems;
