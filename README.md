# backbone.assign-subviews

A simple view mixin for assigning subviews in your [Backbone.js](http://backbonejs.org/) applications.

This plugin takes the code from Ian Storm Taylor's blog 
post [Assigning Backbone Subviews Made Even Cleaner](http://ianstormtaylor.com/assigning-backbone-subviews-made-even-cleaner/)
and makes it easy to install and use in the shape of a Backbone mixin.  All credit for the API/code/design should go to him.

## Benefits

## Example

In a view template, create placeholders:

	<script type="text/template" id="MyItemViewTemplate">
		<h1> Item View Template </h1>

		<div class="subview1">
		</div>
		<div class="subview2">
		</div>
	</script>

In the view class:

```javascript
MyViewClass = Backbone.View.extend({
	initialize: function() {
		// Add backbone.assign-views functionality for this view
		Backbone.AssignSubviews.add( this )
		this.subview1 = new Subview()
		this.subview2 = new Subview()
	},
	render: function() {
		this.$el.html(this.template())
		this.assign({
			".subview1": this.subview1,
			".subview2": this.subview2
		})
		return this
	},
	...
```

## Usage

To assign a subview call the view's assign function, either passing a dictionary as in the example above, or pass a selector and a view.


