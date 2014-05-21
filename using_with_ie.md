Old versions of IE (I can't pinpoint which, specifically, but it includes 9) don't support slicing host objects using selectedOptions. You'll need to add this [selectedOptions Polyfill](https://gist.github.com/brettz9/4212217), which can be done using the following Modernizr test and scripts, to ensure Selaction works in all versions of IE.


First, load Modernizr (use a custom build with yepnope support). Then, add the following test.


```js
Modernizr.addTest('selectedoptions', function() {
  var el = document.createElement('select')
  var selectedOptions = el.selectedOptions;
  return selectedOptions ? true : false;
});
```

Finally, run the test and automatically load the polyfill if the test fails.

```js
Modernizr.load([
  {
    test: Modernizr.selectedoptions,
    nope: '/javascripts/polyfills/selected_options.js' // Change to your assets path
  },
]);
```
