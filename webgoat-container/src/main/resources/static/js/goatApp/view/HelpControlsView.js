define(['jquery',
	'underscore',
	'backbone'],
function($,_,Backbone) {
	return Backbone.View.extend({
		el:'#help-controls', //Check this

		initialize: function (options) {
			if (!options) {
				return;
			}
			this.hasPlan = options.hasPlan;
			this.hasSolution = options.hasSolution;
			this.hasSource = options.hasSource;
			this.hasHints = options.hasHints;
		},
		    
		render:function(title) {
			//this.$el.html();
			// if still showing, hide
			$('#show-source-button').hide();
			$('#show-solution-button').hide();
			$('#show-plan-button').hide();
			$('#show-hints-button').hide();

			if (this.hasSource) {
				this.$el.find('#show-source-button').unbind().on('click',_.bind(this.showSource,this)).show();
			}
			if (this.hasHints) {
                this.$el.find('#show-hints-button').unbind().on('click',this.showHints.bind(this)).show();
            }
			if (this.hasSolution) {
				this.$el.find('#show-solution-button').unbind().on('click',_.bind(this.showSolution,this)).show();
			}
			if (true) { //FIXME: change to this.hasAttack
				this.$el.find('#show-attack-button').unbind().on('click',_.bind(this.showAttack,this)).show();
			}

			this.$el.find('#show-lesson-overview-button').unbind().on('click', _.bind(this.showLessonOverview, this)).show();
			this.$el.find('#restart-lesson-button').unbind().on('click',_.bind(this.restartLesson,this)).show();
			//this.$el.append(this.helpButtons.restartLesson);
		},

		showHints: function() {
		    this.trigger('hints:show','hint');
		},

		showSource: function() {
			this.trigger('source:show','source');
		},

		showSolution: function() {
			this.trigger('solution:show','solution');
		},

		showAttack: function() {
			this.trigger('attack:show',{show:true});
		},

		restartLesson: function() {
			this.trigger('lesson:restart');
		},
		showLessonOverview: function() {
		    this.trigger('lessonOverview:show');
		}
	});
});