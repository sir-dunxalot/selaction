Selaction
=========

A &lt;select> component for Ember.js that allows actions and link-to transitions to be attached to &lt;options>

Installation
------

Simply copy and paste selaction.js into the components directory of your ember app

Usage
------

**Template**

```handlebars
{{#sa-select}}
  {{#sa-placeholder}}Choose...{{/sa-placeholder}}
  {{#sa-option action='copy' target='view'}}Copy{{/sa-option}}
  {{#sa-option link-to='campaign.content'}}Compare{{/sa-option}}
{{/sa-select}}
```

**Action on route or controller**

Selaction allows you to attach an action to each option.

```handlebars
{{#sa-option action='copy'}}Copy{{/sa-option}}
```

```javascript
App.YourController = Em.ObjectController.extend({
  actions: {
    copy: function() {
      // Action logic here
    }
  }
});
```

**Action on view**

Selaction allows you to attach an action to each option.

```handlebars
{{#sa-option action='copy' target='view'}}Copy{{/sa-option}}
```

```javascript
App.YourView = Em.View.extend({
  actions: {
    copy: function() {
      // Action logic here
    }
  }
});
```

**Link to Another Route**

Selaction also allows you to attach a route transition to an option (like a ```{{#link-to}}``` helper would).

```handlebars
  {{#sa-option link-to='about'}}Compare{{/sa-option}}
```

```javascript
App.Router.map(function() {
  this.route('about', { path: '/about' });
});
```

General Options
------

**Class Prefix** sets the prefix used for css targeting of each element

```handlebars
{{#sa-select prefix='eg'}}
  {{!-- Option components here...--}}
{{/sa-select}}
```

If you need more advanced customizations you can edit the source.

Contributing & Bugs
------

Issue a PR or give me a holla.
