var count = 0

function addTag(){
	count++
	let content = document.getElementById('content')
	let tag = createTag()
	content.appendChild(tag)
}

function createTag(){
	var div = document.createElement('div');
	div.classList.add('tag')
	var span = document.createElement('span')
	span.innerHTML= 'tag_'+count
	var img = document.createElement('img')
	img.setAttribute('src','./imgs/close.png')
	img.setAttribute('width','20px')
	img.setAttribute('height','20px')
	div.appendChild(span)
	div.appendChild(img)
	img.addEventListener("click", deleteTag, false)

 	return div
}

function deleteTag(e){
	count--
	let content = document.getElementById('content')
	let tags = document.getElementsByClassName('tag')
	let target = e.target
	let a = target.parentNode
	a.remove()
	return
}

function disableDeleteTag(){
	let nodeLists = document.getElementsByClassName('tag')
	for (var i = nodeLists.length - 1; i >= 0; i--) {
		(function (j){
			let img = nodeLists[j].lastChild
			img.removeEventListener("click",deleteTag);
			img.classList.add('disable')
		})(i)
	}

}