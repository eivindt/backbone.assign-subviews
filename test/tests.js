$( document ).ready( function() {

	var MySubviewClass = Backbone.View.extend( {
		initialize: function(options) {
			this.renderText = options["rendertext"]
		},
		render: function() {
			this.$el.html(this.renderText)
		}
	})

	module( "Subview assignment",
		{
			teardown: function() {
				itemViewInstance.remove()
			}
		}
	)

	test( "Subviews are rendered as parent is rendered", function() {
		var MyItemViewClass = Backbone.View.extend( {
			el: "#container",
			initialize: function() {
				Backbone.AssignSubviews.add(this)
				this.subview1 = new MySubviewClass({ rendertext: "rendered subview 1" })
				this.subview2 = new MySubviewClass({ rendertext: "rendered second subview" })
				this.render()
			},
			render: function() {
				this.$el.html("<div id=\"subview1\"></div><div id=\"subview2\"></div>")
				this.assign({ "#subview1" : this.subview1,
					      "#subview2" : this.subview2 })
			}
		})

		itemViewInstance = new MyItemViewClass()

		equal( $("#subview1").html(), "rendered subview 1", "subview is rendered")
		equal( $("#subview2").html(), "rendered second subview", "subview is rendered")

	})

	test( "Subviews are rendered on reassignment", function() {
		var MyItemViewClass = Backbone.View.extend( {
			el: "#container",
			initialize: function() {
				Backbone.AssignSubviews.add(this)
				this.subview1 = new MySubviewClass({ rendertext: "rendered subview 1" })
				this.subview2 = new MySubviewClass({ rendertext: "rendered second subview" })
				this.render()
			},
			render: function() {
				this.$el.html("<div id=\"subview1\"></div><div id=\"subview2\"></div>")
				this.assign({ "#subview1" : this.subview1,
					      "#subview2" : this.subview2 })
			}
		})

		itemViewInstance = new MyItemViewClass()

		itemViewInstance.assign("#subview1", itemViewInstance.subview2)
		itemViewInstance.assign("#subview2", itemViewInstance.subview1)

		equal( $("#subview1").html(), "rendered second subview", "subview is rendered")
		equal( $("#subview2").html(), "rendered subview 1", "subview is rendered")
	})


				
})
