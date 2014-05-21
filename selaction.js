/* Register namespace */

Selaction = Em.Namespace.create({
  VERSION: '0.1.0',
});

/* Generic Methods */

Selaction.Core = Em.Mixin.create({

  selectComponent: function() {
    var className = Selaction.SelectWrapperComponent;
    return this.nearestOfType(className);
  }.property(),

  _formatClass  : function(modifier) {
    var prefix = this.get('selectComponent.prefix') || this.get('prefix');
    return prefix + '-' + modifier;
  },
});

/* Main component on which options are set in the template */

Selaction.SelectWrapperComponent = Em.Component.extend(
  Selaction.Core,
  Em.ViewTargetActionSupport, {

  classNames: ['ember-select'],
  classNameBindings: ['selectClass'],
  prefix: 'sa', // Overwrite on component in template
  role: 'menu',
  tagName: 'select',

  change: function(event) {
    var selected = event.target.selectedOptions[0];
    var action = $(selected).data('action');
    var target = $(selected).data('target'); /* Optional with action */
    var linkTo = $(selected).data('link-to');
    var view = this.get('parentView');

    if (action) {
      this._action(action, target, view);
    } else if (linkTo) {
      this._linkTo(linkTo, view);
    } else {
      Em.warn('You did not specify an action or link-to for the chosen menu-item component in your template');
    }
  },

  selectClass: function() {
    return this._formatClass('select');
  }.property('selectComponent.prefix'),

  _action: function(action, target, view) {

    if (target === 'view') {
      target = view;
    }

    this.triggerAction({
      action: action,
      target: target,
    });
  },

  _linkTo: function(linkTo, view) {
    view.get('controller').transitionToRoute(linkTo);
  },
});

Em.Handlebars.helper('sa-select', Selaction.SelectWrapperComponent);

/* Individual option component - has an action (with optional target) or a link-to */

Selaction.SelectOptionComponent = Em.Component.extend(
  Selaction.Core, {

  attributeBindings: [
    'action:data-action',
    'target:data-target',
    'link-to:data-link-to',
  ],

  classNames: ['ember-option'],
  classNameBindings: ['optionClass'],
  tagName: 'option',
  role: 'menuitem',

  optionClass: function() {
    return this._formatClass('option');
  }.property('selectComponent.prefix'),
});

Em.Handlebars.helper('sa-option', Selaction.SelectOptionComponent);

/* Placeholder component (default option for select) */

Selaction.SelectPlaceholderComponent = Selaction.SelectOptionComponent.extend({
  attributeBindings: ['disabled', 'selected',],
  classNameBindings: ['placeholderClass'],
  disabled: true,
  selected: true,

  placeholderClass: function() {
    return this._formatClass('placeholder');
  }.property('selectComponent.prefix'),
});

Em.Handlebars.helper('sa-placeholder', Selaction.SelectPlaceholderComponent);
