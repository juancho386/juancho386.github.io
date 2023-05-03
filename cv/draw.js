/* n deploy($obj,$level=1){
		$level=(integer)$level;
		$h=($level>5?5:$level);
		if (substr($obj->name,0,1)=='@') return true;
		echo '<div class="'.strtolower(str_replace(array(' '),'_',$obj->name)).'">';
		if ($obj->value) {
...
*/
function deploy(parentNode,obj,level) {
	if ("value" in obj) {
		const div=document.createElement("div")
		const spanValue=document.createElement("span")

		if ("name" in obj) {
			const spanKey=document.createElement("span")
			spanKey.appendChild(document.createTextNode(obj.name + ": " ))
			div.appendChild(spanKey)
		}
		if ("link" in obj) {
			const a=document.createElement("a")
			const href=document.createAttribute("href")
			const target=document.createAttribute("target")
			href.value=obj.link
			target.value="_blank"
			a.setAttributeNode(href)
			a.setAttributeNode(target)
			a.appendChild(document.createTextNode(obj.value))
			spanValue.appendChild(a)
		}else{
			spanValue.appendChild(document.createTextNode(obj.value))
		}
		div.appendChild(spanValue)
		parentNode.appendChild(div)
	}
	if ("items" in obj) {
		const title=document.createElement("h"+level)
		title.appendChild(document.createTextNode(obj.name))
		parentNode.appendChild(title)
		var div=document.createElement("div")
		for (var i=0,j=obj.items.length ; i<j ; i++) {
			deploy(div,obj.items[i],(1+level))
		}
		parentNode.appendChild(div)
	}
	if ("list" in obj) {
		const title=document.createElement("span")
		title.appendChild(document.createTextNode(obj.name))
		parentNode.appendChild(title)
		var ul=document.createElement("ul")
		for (var i=0,j=obj.list.length ; i<j ; i++) {
			const li=document.createElement("li")
			li.appendChild(document.createTextNode(obj.list[i]))
			ul.appendChild(li)
		}
		parentNode.appendChild(ul)
	}

	return true
}

