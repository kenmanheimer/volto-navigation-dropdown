# volto-navigation-dropdown

Prototype Volto website navigation dropdown menu functionality.

The new Plone 6 Volto frontend initial release lacks comprehensive site
navigation: the navigation menu includes entries for only the top-level
pages. This is a critical lack for some kinds of websites, particularly
information sharing websites intended for browsing.

This repository holds a few versions of code that provide the missing
navigation functionality, including some preliminary versions with
different problems and this main version which is coming to provide the
full functionality, though currently with at least one problem to be
resolved. Specifically, we need to get submenus appearing in both left and
right sides, alternating with depth, so menu entries for deeply embedded
levels are onscreen.

See the versions of this README.md in the respective branches, `stubborn` and `oblique`, for descriptions of the preliminary versions.

This Plone 6 Volto frontend addon prototype is available as an npm package: [@myriadicity/volto-navigation-dropdown](https://www.npmjs.com/package/@myriadicity/volto-navigation-dropdown)

(The malfunctioning versions are also available in repository branches
"oblique" and "stubborn" and as npm modules
[@myriadicity/volto-navigation-dropdown-oblique](https://www.npmjs.com/package/@myriadicity/volto-navigation-dropdown-oblique)
and
[@myriadicity/volto-navigation-dropdown-stubborn](https://www.npmjs.com/package/@myriadicity/volto-navigation-dropdown-stubborn).)

I posted a description of this situation to the Plone community: [Work On
Plone 6 Navigation Menus - Development / Plone 6 UI (Volto)](https://community.plone.org/t/work-on-plone-6-navigation-menus/16169)

I got valuable clue about oragnizing this code from some other Volto
navmenu addons:

* (CodeSyntax volto-menu-customization)[codesyntax/volto-menu-customization]
* (Collective volto-men-dropdown)[https://github.com/collective/volto-dropdownmenu]

