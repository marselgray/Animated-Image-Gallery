$(document).ready(function(){

	var items = $('#gallery li');
		itemsByTags = [];

	// loop through tags
	items.each(function(i){
		var elem = $(this);
			tags = elem.data('tags').split(',');
			
		// add data attribute for quicksand
		elem.attr('data-id', i);

		$.each(tags, function(key, value){
			// remove whitespace
			value = $.trim(value);

			if (! (value in itemsByTags) ){
				// add empty value
				itemsByTags[value] = [];
			}

			// add image to array
			itemsByTags[value].push(elem);
		})
	});

	// create all items option
	createList('All Items', items);

	$.each(itemsByTags, function(k, v){
		createList(k, v);
	})
})