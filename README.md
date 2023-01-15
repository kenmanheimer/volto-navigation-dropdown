# volto-navigation-dropdown-oblique

One of two Volto website navigation dropdown menu prototypes.

At initial release the new Plone 6 Volto frontend comes without
comprehensive site navigation - the navigation menu includes entries for
only the top-level pages. This is a critical lack for some kinds of
websites, particularly the kind that I'm working on.

This repository holds two versions of code that provide the missing navigation functionality, but with different problems. I am hoping that I can get help to fix the problems so we can arrive at fully working code to incorporate in Volto.

This "oblique" version provides a dropdown menu that arises on mouse hover (on the desktop, you have to click on mobile). It has two primary problems:

1. Clicking on the menu entry for a container doesn't visit it. Instead,
   you have to click on a redundant entry for the container that is included
   at the top of the menu for its contents. This is a workable arrangement
   once you're familiar with it, but it is bound to be confusing for many
   visitors, it is awkward in practice, and it will prevent some visitors
   from navigating the site.

2. The highlight that indicates that a container is on the path of the
   currently-visited page doesn't work for the top-level navbar entries
   (except when the menu for that item is open). People typically depend on the
   navbar to provide that cue.

This Plone 6 Volto frontend addon is available as an npm package: [@myriadicity/volto-navigation-dropdown-oblique](https://www.npmjs.com/package/@myriadicity/volto-navigation-dropdown-oblique)

The other version of this package doesn't have either of these problems, but the menus won't close after you select an entry. You can find that version on the `stubborn` branch of this repository, with a corresponding addon available at [@myriadicity/volto-navigation-dropdown-stubborn](https://www.npmjs.com/package/@myriadicity/volto-navigation-dropdown-stubborn).

