Selaction
=========

A ```<select>``` component for Ember.js that allows actions and link-to transitions to be attached to ```<option>```s

Installation
------

Simply copy and paste ```selaction.js``` into the components directory of your ember app

Usage
------

**Basic Usage**

```handlebars
{{#sa-select}}
  {{#sa-placeholder}}Choose...{{/sa-placeholder}}
  {{#sa-option action='copy' target='view'}}Copy Text{{/sa-option}}
  {{#sa-option link-to='about'}}About Page{{/sa-option}}
{{/sa-select}}
```

Selaction current supports the following use cases when an option is chosen:
- Triggering an action on the route or controller
- Triggering an action on the view
- Transitioning to another route

**Action on route or controller**

Selaction allows you to attach an action to each ```<option>```.

```handlebars
{{#sa-option action='copy'}}Copy{{/sa-option}}
```

```javascript
App.YourController = Em.ObjectController.extend({
  actions: {
    copy: function() {
      // Action logic here
    },
  },
});
```

**Action on view**

```handlebars
{{#sa-option action='copy' target='view'}}Copy{{/sa-option}}
```

```javascript
App.YourView = Em.View.extend({
  actions: {
    copy: function() {
      // Action logic here
    },
  },
});
```

**Transition to Another Route**

Selaction also allows you to attach a route transition to an Selaction allows you to attach an action to each ```<option>``` (like a ```{{#link-to}}``` helper would).

```handlebars
{{#sa-option link-to='about'}}About Page{{/sa-option}}
```

```javascript
App.Router.map(function() {
  this.route('about', { path: '/about' });
});
```

Optional Customization
------

Selaction works out of-the-box, but you can overwrite options easily in your templates. If you need more advanced customizations you can edit the Selaction source.


**Class Prefixing**

Use ```prefix``` to set the class prefix used for css targeting of each element in this instance of the Selaction component

```handlebars
{{#sa-select prefix='eg'}}
  {{!-- Option components here...--}}
{{/sa-select}}
```

**Element ID**
Use ```id``` to set the id for the select element

```handlebars
{{#sa-select prefix='eg'}}
  {{!-- Option components here...--}}
{{/sa-select}}
```

Contributing & Bugs
------

Issue a PR or give me a holla.
