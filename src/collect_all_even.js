
function collect_same_elements(collection_a, object_b) {
 //在此处写代码
 var arr = [];
 var k=0;
 for(var i=0;i<collection_a.length;i++)
 	for(var j=0;j<object_b.length;j++){
 		if(collection_a.key[i]==object_b[j]){	
 			arr[k++]=object_b[j];
 			arr[k++]=",";
 		}
 	}
}
document.write("[");
for(i=0;i<arr.length-1;i++){
	document.write("\""+arr[i]+"\"");
}
document.write("]");
module.exports = collect_same_elements;
