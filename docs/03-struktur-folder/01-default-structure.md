---
sidebar_position: 1
---

# Default Structure

Struktur folder default dari cypres adalah :

![plugin](/img/03/01-folder-structure.png)

## Test file

Test spec ditaroh di folder cypress/integration

## Fixture

Fixtures are used as external pieces of static data that can be used by your tests. Fixture files are located in cypress/fixtures by default, but can be configured to another directory.

## Assets File

There are some folders that may be generated after a test run, containing assets that were generated during the test run.

You may consider adding these folders to your `.gitignore` file to ignore
checking these files into source control.

### Downloads

Any files downloaded while testing an application's file download feature will be stored in the downloads Folder which is set to cypress/downloads by default.

### Screenshots

If screenshots were taken via the cy.screenshot() command or automatically when a test fails, the screenshots are stored in the screenshots Folder which is set to cypress/screenshots by default.

### Video

Any videos recorded of the run are stored in the videosFolder which is set to cypress/videos by default.

## Plugins

The plugins file is a special file that executes in Node before the project is loaded, before the browser launches, and during your test execution. While the Cypress tests execute in the browser, the plugins file runs in the background Node process, giving your tests the ability to access the file system and the rest of the operating system by calling the cy.task() command.

## Support

By default Cypress will automatically include the support file cypress/support/index.js. This file runs before every single spec file. We do this purely as a convenience mechanism so you don't have to import this file in every single one of your spec files.
