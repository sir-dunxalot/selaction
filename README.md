Selaction.js
======

A `<select>` component for **Ember.js** that allows actions or link-to transitions to be attached to each `<option>`.

Installation & Prerequisites
------

Simply copy and paste `selaction.js` into the components directory of your ember app.

**Prerequsites:**
- Ember.js

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

Selaction allows you to attach an action to each `<option>`.

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

Selaction also allows you to attach a route transition to an Selaction allows you to attach an action to each `<option>` (like a `{{#link-to}}` helper would).

```handlebars
{{#sa-option link-to='about'}}About Page{{/sa-option}}
```

```javascript
App.Router.map(function() {
  this.route('about', { path: '/about' });
});
```

**Accessibility**

It's recommended that you use a label with your selaction `select` component. However, everyone seems to have forms set up in different ways. Thus, selaction doesn't come built with a label component. Instead, you can use one of the following methods to easily meet accessibility requirements.

Method 1:

```handlebars
<label for="my_id">Choose a thing</label>
{{#sa-select id='my_id'}}
  {{!-- Option components here...--}}
{{/sa-select}}
```

Method 2:

```handlebars
<label>
  <span>Choose a thing</span>
  {{#sa-select}}
    {{!-- Option components here...--}}
  {{/sa-select}}
</label>
```

Of course, you're welcome to use labels however you please and usage will not affect the functionality of Selaction. The above are just recommendations.

Optional Customization
------

Selaction works out of-the-box, but you can overwrite options easily in your templates. If you need more advanced customizations you can edit the Selaction source.

**Class Prefixing**

Use `prefix` to set the prefix for Selaciton's default element classes in this instance of the Selaction component.

```handlebars
{{#sa-select prefix='eg'}}
  {{!-- Option components here...--}}
{{/sa-select}}
```

**Element ID and Class**

Use `id` or 'class' to set the respective attribute for this instance of the `select` element.

```handlebars
{{#sa-select id='quick_tasks'}}
  {{!-- Option components here...--}}
{{/sa-select}}
```

```handlebars
{{#sa-select class='quick_tasks'}}
  {{!-- Option components here...--}}
{{/sa-select}}
```

Contributing & Bugs
------

Issue a PR or give me a holla.

Todos and Known Issues
------
- Add `<optgroup>` support
- Migrate to brunch or similar for package control
