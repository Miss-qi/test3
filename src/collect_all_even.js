
function collect_same_elements(collection_a, object_b) {
 //在此处写代码
 var arr = new Array();
 var k=0;
 for(var i=0;i<collection_a.length;i++)
 	for(var j=0;j<object_b.length;j++){
 		if(collection_a[i].key==object_b[j]){	
 			arr[k++]="\""+object_b[j]+"\"";
 		}
 	}
 	document.write("[");
	document.write(arr.join());
	document.write("]");
}

module.exports = collect_same_elements;


