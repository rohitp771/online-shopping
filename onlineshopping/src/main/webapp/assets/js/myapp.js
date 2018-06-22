$(function(){
	switch(menu){

	case "Home" : 
		$('#home').addClass('active');
		break;

	case "About Us" : 
		$('#aboutId').addClass('active');
		break;
	case "Contact Us" : 
		$('#contactId').addClass('active');
		break;
		
	case "All Products" : 
		$('#listProductId').addClass('active');
		break;
		
	default : 
		$('#listProductId').addClass('active');
		$('#a_'+menu).addClass('active');
		break;
	}
});