# Docusaurus Search Local

[![npm version](https://badge.fury.io/js/docusaurus-search-local.svg)](https://badge.fury.io/js/docusaurus-search-local)

Docusaurus Search Local is a plugin for Docusaurus that provides a search functionality for your Docusaurus website that works entirely client-side. This means that the search index and search functionality is available offline after the initial page load.

## Installation



```bash
npm i @anmode/docusaurus-search-local
```

## Usage

Add the plugin to your docusaurus.config.js:

```bash
module.exports = {
  // ...
  plugins: ['docusaurus-search-local'],
};
```
That's it! By default, the plugin will index all pages and use a search bar in the navbar. You can configure this behavior by passing options:

```bash
module.exports = {
  // ...
  plugins: [
    [
      'docusaurus-search-local',
      {
        // Options here
      },
    ],
  ],
};

```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Credits
This project is a fork of docusaurus-lunr-search, which was originally created by lelouch77 and later maintained by datenknoten. Special thanks to them for laying the foundation for this project.

This forked version of the project contains fixes and updates made by [anmode](https://github.com/anmode), who cloned the repository from [cmfcmf/docusaurus-search-local](https://github.com/cmfcmf/docusaurus-search-local).

## License

[MIT](https://choosealicense.com/licenses/mit/)