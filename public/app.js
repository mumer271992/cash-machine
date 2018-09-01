const API_URL = window.location.origin;

$("#withdraw-button").click(function(){
	console.log($('#amount').val());
	let cashBox = $('#cash-box .row');
	cashBox.empty();
	let result = '';

    $.ajax({
    	type: 'POST',
    	url: `${API_URL}/withdraw`,
    	contentType: 'application/json',
    	data: JSON.stringify({ "amount": $('#amount').val() }),
    	success: function(resp){
        	if (resp.success && resp.notes && resp.notes.length)  {
        		resp.notes.forEach(note => {
        			result = result + createNote(note);
        		});
        	}
        	cashBox.append(result);
    	},
    	error: function (resp) {
    		if (!resp.responseJSON.success && resp.responseJSON.error) {
        		result = `<h2 class="text-center error">${resp.responseJSON.error}</h2>`;
        	}
        	cashBox.append(result);
    	} 
	});
});

function createNote(number){
	return `<div class="col-md-3"><div class="card note"><div class="card-body"><h2 class="text-center">$${number}</h2></div></div></div>`;
}