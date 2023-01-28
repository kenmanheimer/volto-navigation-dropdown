# volto-navigation-dropdown-stubborn

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
branch holds the basically functional version and this branch (stubborn) and
another (oblique) have versions with problematic flaws.

This "stubborn" version provides a dropdown menu that arises on mouse hover (on the desktop, you have to click on mobile). The problem is that the menus won't close after you select an entry. They get in the way of other stuff on the page.

This Plone 6 Volto frontend addon is available as an npm package: [@myriadicity/volto-navigation-dropdown-stubborn](https://www.npmjs.com/package/@myriadicity/volto-navigation-dropdown-stubborn)

The other versions:

* The [main
  branch](https://github.com/kenmanheimer/volto-navigation-dropdown) has
  the working version, available as npm module
  [@myriadicity/volto-navigation-dropdown](https://www.npmjs.com/package/@myriadicity/volto-navigation-dropdown)

* The other flawed version of this package doesn't have the menu closing
  problem, but it has a complicated menu arrangement to workaround a
  problem clicking on the container entries. You can find that version on
  the `oblique` branch of this repository, with a corresponding npm module
  available at
  [@myriadicity/volto-navigation-dropdown-oblique](https://www.npmjs.com/package/@myriadicity/volto-navigation-dropdown-oblique).
