# volto-navigation-dropdown-stubborn

One of two Volto website navigation dropdown menu prototypes.

At initial release the new Plone 6 Volto frontend comes without
comprehensive site navigation - the navigation menu includes entries for
only the top-level pages. This is a critical lack for some kinds of
websites, particularly the kind that I'm working on.

This repository holds two versions of code that provide the missing navigation functionality, but with different problems. I am hoping that I can get help to fix the problems so we can arrive at fully working code to incorporate in Volto.

This "stubborn" version provides a dropdown menu that arises on mouse hover (on the desktop, you have to click on mobile). The problem is that the menus won't close after you select an entry. They can get in the way of other stuff on the page.

This Plone 6 Volto frontend addon is available as an npm package: [@myriadicity/volto-navigation-dropdown-stubborn](https://www.npmjs.com/package/@myriadicity/volto-navigation-dropdown-stubborn)

The other version of this package doesn't have the menu closing problem, but it has a complicated menu arrangement to workaround a problem clicking on the container entries. You can find that version on the `oblique` branch of this repository, with a corresponding addon available at [@myriadicity/volto-navigation-dropdown-oblique](https://www.npmjs.com/package/@myriadicity/volto-navigation-dropdown-oblique).
