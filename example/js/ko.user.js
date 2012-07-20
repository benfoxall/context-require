define(['ko'], function(ko){

	var viewModel = {
		username: ko.observable('')
	};

	return function(element){
		ko.applyBindings(viewModel,element);
	};

});