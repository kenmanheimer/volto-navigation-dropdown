# volto-navigation-dropdown

Plone 6 Volto website navigation menubar with dropdown menus for nested folders.

Site navigation with automatically populated nested menus that open on
hover.  Entries on the currently visited path are highlighted, updating as
you select new locations.

Available:

* As an npm package: [@myriadicity/volto-navigation-dropdown](https://www.npmjs.com/package/@myriadicity/volto-navigation-dropdown)
* On github: [kenmanheimer/volto-navigation-dropdown](https://github.com/kenmanheimer/volto-navigation-dropdown)

I posted some discussion about my reasons for developing this to the Plone
community: [Work On Plone 6 Navigation Menus - Development / Plone 6 UI
(Volto)](https://community.plone.org/t/work-on-plone-6-navigation-menus/16169).

Further work needed:

* Screen boundaries are not handled well, so that entries in hierarchies
  that stretch to the edge of the screen could be unreachable and
  unselectable. This is a problem in the underlying React libraries but
  could be handled with edge detection and menu-opening changes. I haven't
  hit up against the limits in practical applications.
* The styling is irregular and needs rationalizing.
  * In general the layout provisions are just expedient. They need to be
    thoroughly thought through and implemented by someone with ui design
    and styling expertise.
  * There's unintended and ragged indentation of entries for containers.
  * Excessive right justification for folder icons in entries whose titles
    are wrapped.
* General parameterization is needed for layout parameters like menu
  minimum and maximum width.

Version 0.3 introduces a configurable menu layout change, governed by a
setting variable:

* `config.settings.dropdownmenu.selfInContents` true (the default) causes the first
  entry in the container's submenu to be for the container itself.
  Setting it to false inhibits that, so visitors would have to know that
  they can click on the container entry outside of the submenu to visit its
  page.

  The redundant inclusion of the container entry is default because some
  visitors might not realize that they can click on the superior entry. The
  redundant entry won't prevent anything, and anyone who is surprised by it
  will be able to easily figure it out and get used to it.

  To inhibit the redundant entry include:

      if (config.settings.dropdownmenu) {
        config.settings.dropdownmenu.selfInContents = false;
      }

  in your instance configuration.

### Try volto-navigation-dropdown with Docker

      git clone https://github.com/kenmanheimer/volto-navigation-dropdown.git
      cd volto-navigation-dropdown
      make
      make start

Go to http://localhost:3000

### Add volto-navigation-dropdown to your Volto project

1. Make sure you have a [Plone backend](https://plone.org/download) up-and-running at http://localhost:8080/Plone

   ```Bash
   docker compose up backend
   ```

1. Start Volto frontend

* If you already have a volto project, just update `package.json`:

  ```JSON
  "addons": [
      "@kenmanheimer/volto-navigation-dropdown"
  ],

  "dependencies": {
      "@kenmanheimer/volto-navigation-dropdown": "*"
  }
  ```

* If not, create one:

  ```
  npm install -g yo @plone/generator-volto
  yo @plone/volto my-volto-project --canary --addon @kenmanheimer/volto-navigation-dropdown
  cd my-volto-project
  ```

1. Install new add-ons and restart Volto:

   ```
   yarn
   yarn start
   ```

1. Go to http://localhost:3000

1. Happy editing!

## How to contribute

See [DEVELOP.md](https://github.com/kenmanheimer/volto-navigation-dropdown/blob/master/DEVELOP.md).

## Copyright and license

See [LICENSE](https://github.com/kenmanheimer/volto-navigation-dropdown/blob/master/LICENSE) for details.
