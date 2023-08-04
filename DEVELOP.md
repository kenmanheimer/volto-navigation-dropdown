# volto-navigation-dropdown

## Develop

(If you want to make alterations to this addon then you probably want to fork the repository and use that fork for the following recipes. You can then submit pull requests to propose incorporating the changes in the original.)

1. Make sure you have `docker` and `docker compose` installed and running on your machine:

    ```Bash
    git clone https://github.com/kenmanheimer/volto-navigation-dropdown.git
    cd volto-navigation-dropdown
    git checkout -b bugfix-123456 develop
    make
    make start
    ```

1. Wait for `Volto started at 0.0.0.0:3000` meesage

1. Go to http://localhost:3000

1.  Happy hacking!

    ```Bash
    cd src/addons/volto-navigation-dropdown/
    ```

### Or add @kenmanheimer/volto-navigation-dropdown to your Volto project

Before starting make sure your development environment is properly set. See
[Volto Developer Documentation](https://docs.voltocms.com/getting-started/install/). The
above suggestions about forking the repository apply here as well.

1.  Make sure you have installed `yo`, `@plone/generator-volto` and `mrs-developer`

        npm install -g yo @plone/generator-volto mrs-developer

1.  Create new volto app

        yo @plone/volto my-volto-project --addon @kenmanheimer/volto-navigation-dropdown --skip-install
        cd my-volto-project

1.  Add the following to `mrs.developer.json`:

        {
            "volto-navigation-dropdown": {
                "url": "https://github.com/kenmanheimer/volto-navigation-dropdown.git",
                "package": "@kenmanheimer/volto-navigation-dropdown",
                "branch": "develop",
                "path": "src"
            }
        }

1.  Install

        yarn develop
        yarn

1.  Start backend

        docker pull plone
        docker run -d --name plone -p 8080:8080 -e SITE=Plone -e PROFILES="profile-plone.restapi:blocks" plone

    ...wait for backend to setup and start - `Ready to handle requests`:

        docker logs -f plone

    ...you can also check http://localhost:8080/Plone

1.  Start frontend

        yarn start

    (If you have a Volto instance already running on port 3000, you can
    specify an alternate port for this instance, like port 4000:

        PORT=4000 yarn start

    )

1.  Go to http://localhost:3000

    (Or the alternate port if you specified one in the previous step.)

1.  Happy hacking!

        cd src/addons/volto-navigation-dropdown/

## Cypress

To run cypress locally, first make sure you don't have any Volto/Plone running on ports `8080` and `3000`.

You don't have to be in a `clean-volto-project`, you can be in any Volto Frontend
project where you added `volto-navigation-dropdown` to `mrs.developer.json`

Go to:

  ```BASH
  cd src/addons/volto-navigation-dropdown/
  ```

Start:

  ```Bash
  make
  make start
  ```

This will build and start with Docker a clean `Plone backend` and `Volto Frontend` with `volto-navigation-dropdown` block installed.

Open Cypress Interface:

  ```Bash
  make cypress-open
  ```

Or run it:

  ```Bash
  make cypress-run
  ```
