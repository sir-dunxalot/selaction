Old versions of IE (I can't pinpoint which, specifically, but it includes 9) don't support slicing host objects using selectedOptions. You'll need to add this [selectedOptions Polyfill](https://gist.github.com/brettz9/4212217), which can be done using the following Modernizr test and scripts:


First, load Modernizr (use a custom build with yepnope support), then:


```js
Modernizr.addTest('selectedoptions', function() {
  var el = document.createElement('select')
  var selectedOptions = el.selectedOptions;
  return selectedOptions ? true : false;
});
```


```js
Modernizr.load([
  {
    test: Modernizr.selectedoptions,
    nope: '/javascripts/polyfills/selected_options.js'
  },
]);
```
