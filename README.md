# volto-navigation-dropdown-oblique

One of three versions of a Volto website navigation dropdown menu
prototype. This and one other version have significant flaws but help
convey some issues we're attempting to resolve. The main branch of [the
source code
repository](https://github.com/kenmanheimer/volto-navigation-dropdown) and
a [corresponding npm module](https://www.npmjs.com/package/@myriadicity/volto-navigation-dropdown) has
the working prototype which capably implements most of the intended
functionality.

At initial release the new Plone 6 Volto frontend comes without
comprehensive site navigation - the navigation menu includes entries for
only the top-level pages. This is a critical lack for some kinds of
websites, particularly the kind that I'm working on. [The repository for
this addon](https://github.com/kenmanheimer/volto-navigation-dropdown)
holds code that provides the missing navigation functionality. The main
branch holds the basically functional version and this branch (oblique) and
another (stubborn) has versions with problematic flaws.

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

The other versions:

* The [main
  branch](https://github.com/kenmanheimer/volto-navigation-dropdown) has
  the working version, available as npm module
  [@myriadicity/volto-navigation-dropdown](https://www.npmjs.com/package/@myriadicity/volto-navigation-dropdown)
* The other flawed version doesn't have the same problems as above, but
  the menus don't close after you select an entry. You can find that
  version on the "stubborn" repository branch of the repository, with
  a corresponding npm module available at
  [@myriadicity/volto-navigation-dropdown-stubborn](https://www.npmjs.com/package/@myriadicity/volto-navigation-dropdown-stubborn). 

