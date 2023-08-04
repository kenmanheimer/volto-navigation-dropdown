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
  that stretch to the edge of the screen can be unselectable. This is a
  problem in the underlying React libraries but could be handled with edge
  detection and menu-opening changes. I haven't hit up against the limits
  in practical applications.
* There are some menu layout irregularities:
  * Unintended indentation of entries for nested containers
  * Excessive right justification for folder icons in entries whose titles
    are wrapped.
* General parameterization of layout parameters like menu minimum and
  maximum width.

## Getting started

### Try volto-addon-template with Docker

      git clone https://github.com/eea/volto-addon-template.git
      cd volto-addon-template
      make
      make start

Go to http://localhost:3000

### Add volto-addon-template to your Volto project

1. Make sure you have a [Plone backend](https://plone.org/download) up-and-running at http://localhost:8080/Plone

   ```Bash
   docker compose up backend
   ```

1. Start Volto frontend

* If you already have a volto project, just update `package.json`:

  ```JSON
  "addons": [
      "@eeacms/volto-addon-template"
  ],

  "dependencies": {
      "@eeacms/volto-addon-template": "*"
  }
  ```

* If not, create one:

  ```
  npm install -g yo @plone/generator-volto
  yo @plone/volto my-volto-project --canary --addon @eeacms/volto-addon-template
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

See [DEVELOP.md](https://github.com/eea/volto-addon-template/blob/master/DEVELOP.md).

## Copyright and license

See [LICENSE](https://github.com/eea/volto-addon-template/blob/master/LICENSE) for details.
