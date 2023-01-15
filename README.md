# volto-navigation-dropdown

Volto website navigation dropdown menu prototype.
  
At initial release the new Plone 6 Volto frontend comes without
comprehensive site navigation. The navigation menu includes entries for
only the top-level pages. This is insufficient for most substantial
websites.

While a few addon options are available, none provide simple automated
creation of comprehensive navigation of a nested site structure. This addon
is an effort to rectify that.

The current functionality is nearly complete but rough at best. See [the
repository issue
tracker](https://github.com/kenmanheimer/volto-navigation-dropdown/issues)
for details.

Issues: 

* Using href for topmost links, need to determine how to get proper
  internal traversal. We need to enable for the base Dropdown menu elements functionality
  like what NavItem achieves.
* Menus aren't closing on select.