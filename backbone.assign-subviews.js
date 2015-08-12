(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		define(["jquery", "underscore", "backbone" ], factory);
	} else {
		factory((root.jQuery || root.Zepto || root.$), root._, root.Backbone, null);
	}
}(this, 
	function($, _, Backbone) 
	{

		Backbone.AssignSubviews = {};

		function assignSubview(selector, view) {
			    var selectors;
			    if (_.isObject(selector)) {
				selectors = selector;
			    } else {
				selectors = {};
				selectors[selector] = view;
			    }
			    if (!selectors) return;
			    _.each(selectors, function (view, selector) {
				view.setElement(this.$(selector)).render();
			    }, this);
		};

		/**
		 *  Call this function to add this behaviour to your view.
		 */
		Backbone.AssignSubviews.add = function(view) {
			view.assign = assignSubview;
		}

		/**
		 *  AssignSubviews can be used as a base for views
		 *  containing (named) sub views.  It offers a function
		 *  "assign" that assigns each subview to a selector in
		 *  the parent view.
		 *  This code is taken from:
		 *  http://ianstormtaylor.com/assigning-backbone-subviews-made-even-cleaner/
		 */
/*
		var BaseParentView = Backbone.View.extend( {
			assign : assignViewAsParent;
		});
		return BaseParentView;
*/
		return Backbone.AssignSubviews
	}
));
