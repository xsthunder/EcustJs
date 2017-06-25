function clone (obj){
	return JSON.parse(JSON.stringify(obj));
}
function getCourses(tbn){
	var cs=[];
	for(var i =0;i<tbn.length;++i){
		var sa = tbn[i];
		sa=sa.childNodes;
		var obj={};
		if(sa.length==8){
			obj = {
			'courseName':sa[0].innerText,
			'courseID':sa[1].innerText,
			'teacherName':sa[2].innerText,
			'time':sa[3].innerText,
			'location':sa[4].innerText,
			'department':sa[5].innerText,
			'credit':sa[6].innerText,
			'courseCharacter':sa[7].innerText
			}
			cs.push(obj);
		}
		else {
			var pre = cs[cs.length-1];
			obj=clone(pre);
			obj.time=sa[0].innerText;
			
			try{
				obj.location=sa[1].innerText;
			}
			catch(err){
				console.log(i,sa);
			}
			cs.push(obj);
			console.log("inb2",sa,obj);
		}
	}
	return cs;
}
