(function ( $, lesson ){

lesson.selectors = {

	/*
		Important! The result of each of these functions
		needs to be returned so they can be verified.

		Please return your selection like this:

			return $( "yourselector" );
	*/

	exercise_1: function () {
		// Select the header element from the test page

		return $("head");
	},

	exercise_2: function () {
		// Select the first tweet on the page

		return $("#tweets > li.tweet:first-child");
	},

	exercise_3: function () {
		// Select the last tweet on the page

		return $("#tweets > li.tweet:last-child");;
	},

	exercise_4: function () {
		// Select both the first and last tweet on the page

		return ;
	},

	exercise_5: function() {
		// Select all of the tweets with the data-user-name of dougneiner

		return ;
	},

	exercise_6: function() {
		// Select all of the tweets that data-user-name ends with the letter r

		return ;
	}

};

}( jQuery, window.lesson = window.lesson || {} ));
