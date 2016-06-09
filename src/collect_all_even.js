
function collect_same_elements(collection_a, object_b) {
 //在此处写代码
 var arr = new Array();
 for(var i=0;i<collection_a.length;i++)
 	for(var j=0;j<object_b.value.length;j++){
 		if(collection_a[i].key==object_b.value[j]){	
 			arr.push(object_b.value[j]);
 		}
 	}

	return arr;
}

module.exports = collect_same_elements;




