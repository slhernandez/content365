# [Content Solutions](http://contentsolutions.demandstudios.com)


This is a Wordpress theme for Demand Media's Content Solutions team.  The theme is built from Automattic's `_s`, or `underscores`.

**[underscores](http://underscores.ms)**

**[github underscores](https://github.com/Automattic/_s)**

This Wordpress theme using the following libraries and plugins:

- [Grunt.js](http://gruntjs.com/): Task runner for performing repetitive tasks like minification, compilation, unit testing, linting, etc. 
 
- [SASS](http://sass-lang.com/): Pre-processing stylesheets that allows variables, mixins, inheritance with CSS.

- [underscore.js](http://documentcloud.github.io/underscore/): Utility-belt library for JavaScript.  This is used for it's micro-templating features.

- [jQuery](http://jquery.com/): Abstraction layer and toolkit for working with the DOM.

- [backstretch.js](http://srobbin.com/jquery-plugins/backstretch/) - A simple jQuery plugin that allows you to add a dynamically-resized, slideshow-capable background image to any page or element. 



## How to run Grunt.js

1. download/install [node.js](http://nodejs.org)
1. clone the Content Solutions repository.
1. install dependencies with npm: `npm i` note: The package.json manifest file is read and will install Grunt itself and it's packages for compiling and watching Sass files.
1. install SASS `gem install sass` note: Ruby uses Gems to manage its various packages of code like Sass. 
1. install grunt.js CLI `npm install -g grunt-cli` note: more information can be obtained from [Getting Started Guide](http://gruntjs.com/getting-started)
1. from command line type `grunt` or `grunt watch` to compile all the Sass files.


