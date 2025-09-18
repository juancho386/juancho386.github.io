function deploy(parentNode,obj) {
	const map=document.getElementById("map")
	const btn=document.createElement("input")
	const tpe=document.createAttribute("type")
	tpe.value='submit'
	btn.setAttribute(tpe)
	const style=document.createAttribute("style")
	style.value='left:'+obj.x+';top:'+obj.y+';rotate:'+obj.rotate+';'
	btn.setAttributeNode(style)
	const val=document.createAttribute("value")
	val.value=obj.status
	const nme=document.createAttribute("name")
	nme.value=obj.name
	parentNode.appendChild(btn)
}

