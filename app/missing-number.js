module.exports = {
	findMissing: function(array_one, array_two) {
		 var new_array = [];

		  array_one.forEach(function(val){
		   if(array_two.indexOf(val) < 0) new_array.push(val);
		  });

		  array_two.forEach(function(val){
		   if(array_one.indexOf(val) < 0) new_array.push(val);
		  });

		  return new_array;
}
}