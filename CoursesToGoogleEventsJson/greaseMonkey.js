// ==UserScript==
// @name        courseToGoogleEventJson
// @namespace   courseToGoogleEventJson
// @include     http://202.120.108.14/ecustedu/E_SelectCourse/ScInFormation/syllabus.aspx
// @version     1
// @grant       none
// ==/UserScript==
//http://github.com/xsthunder
//coding = utf-8
//add a button
var doc = document;
var btngen = doc.createElement("Button");
btngen.id = 'btngen';
btngen.innerText = 'btngen';

doc.childNodes[0].childNodes[2].appendChild(btngen);
btngen.onclick = function () {/*
var doc = document;
var tb = doc.getElementsByTagName('tbody');
var tb2 = tb[3];
var tbn = tb2.childNodes;
*/
//funcs
function setHM( d, h, m){
	d.setHours(h);
	d.setMinutes(m);
	return d;
}
function getCorNum(s){
	switch(s[0]){
		case '一':return 1;
		case '二':return 2;
		case '三':return 3;
		case '四':return 4;
		case '五':return 5;
		case '六':return 6;
		case '日':return 7;
	}
}
function __endDateTime( i ){
	var d = new Date(0);
	switch(i){
		case 1:d=setHM(d,9,40);break;
		case 3:d=setHM(d,11,35);break;
		case 5:d=setHM(d,15,10);break;
		case 7:d=setHM(d,17,5);break;
		case 9:d=setHM(d,20,35);break;
	}
	return d;
}
var termStatDateOnMonday= new Date('2017-02-20T08:00:00');
termStatDateOnMonday.setDate(termStatDateOnMonday.getDate()-7);
function recur(s){
	//s="周四 5-6节 10-11全周 全周"
	var sc = s.split(' ');
	var sday = sc[0];
	var stime = sc[1];
	var srange = sc[2];
	var recur = srange.substr(length-2);
	console.log(
	sday,
	stime,
	srange,
	recur);
	var dayoffset = new Date(0);
	dayoffset.setDate(getCorNum(sday[1]));//set 0 day offset to co with inerval 
	var sday = new Date(termStatDateOnMonday.getTime()+dayoffset.getTime());
	
	var dayoffset = new Date(0);
	var totaloffset = srange.split('-')[1];
	totaloffset=parseInt(totaloffset.substr(0,totaloffset.length-2));
	dayoffset.setDate(dayoffset.getDate()+7*totaloffset);
	/*
	sday.setDate(sday.getDate()+7*parseInt(srange.split('-')[0]));
	*/
	
	sday.setTime(sday.getTime()+__endDateTime(parseInt(stime.split('-')[0])).getTime()+dayoffset.getTime());
	sday.toLocaleString();
	
	var interval = 	3;
	var switchTar = srange.split('-')[1];
	switch(switchTar[switchTar.length-2]){
		case '全':interval=1;break;
		case '单':
		case '双':interval=2;break;
	}
	var ans = sday.toISOString();
	ans = ans.substr(0,ans.length-14);
	ans="RRULE:FREQ=WEEKLY;UNTIL="+ans.replace(/-/g,"")+";INTERVAL="+interval;


	return ans;
}
/*bug 
recur="周四 5-6节 10-11全周 全周"

// recur("周三 1-4节 1-18全周");
*/

function parseCourse(o){
	var obj={};
	obj["colorId"]='5';
	obj['summary']=o.courseName;
	obj['location']=o.location;
	obj['description']='教师:'+o.teacherName+
	','+'开课系:'+o.department+
	','+'学分:'+o.credit+
	','+'课程性质:'+o.courseCharacter+
	','+'课程号:'+o.courseID;
	obj['start']= {
		'timeZone': 'Etc/Universal'
	};
	obj['start']['dateTime']= startDateTime(o.time)+"+00:00",//'2015-06-05T09:00:00-07:00',
	 obj['end']= {
		'timeZone': 'Etc/Universal'
	};
	obj['end']['dateTime']= endDateTime(o.time)+"+00:00";//'2015-06-05T17:00:00-07:00',
	obj['recurrence']= [
			recur(o.time)
		]
	return obj;
}
function __endDateTime( i ){
	var d = new Date(0);
	switch(i){
		case 1:d=setHM(d,9,40);break;
		case 3:d=setHM(d,11,35);break;
		case 5:d=setHM(d,15,10);break;
		case 7:d=setHM(d,17,5);break;
		case 9:d=setHM(d,20,35);break;
	}
	return d;
}
var termStatDateOnMonday= new Date('2017-02-20T08:00:00');
termStatDateOnMonday.setDate(termStatDateOnMonday.getDate()-7);
function endDateTime(s){
	
	var sc = s.split(' ');
	var sday = sc[0];
	var stime = sc[1];
	var srange = sc[2];
	var recur = srange.substr(length-2);
	console.log(
	sday,
	stime,
	srange,
	recur);
	var dayoffset = new Date(0);
	dayoffset.setDate(getCorNum(sday[1]));
	var sday = new Date(termStatDateOnMonday.getTime()+dayoffset.getTime());
	sday.setDate(sday.getDate()+7*parseInt(srange.split('-')[0]));
	sday.setTime(sday.getTime()+__endDateTime(parseInt(stime.split('-')[0])).getTime());
	sday.toLocaleString();
	var ans = sday.toISOString();
	ans = ans.substr(0,ans.length-5);
	return ans;
}
//endDateTime("周三 1-4节 1-18全周");

function __startDateTime( i ){
    var d = new Date(0);
    switch(i){
        case 1:d=setHM(d,8,0);break;
        case 3:d=setHM(d,9,55);break;
        case 5:d=setHM(d,13,30);break;
        case 7:d=setHM(d,15,25);break;
        case 9:d=setHM(d,18,0);break;
    }
    return d;
}
function getCorNum(s){
    switch(s[0]){
        case '一':return 1;
        case '二':return 2;
        case '三':return 3;
        case '四':return 4;
        case '五':return 5;
        case '六':return 6;
        case '日':return 7;
    }
}
var termStatDateOnMonday= new Date('2017-02-20T08:00:00');
termStatDateOnMonday.setDate(termStatDateOnMonday.getDate()-7);
function startDateTime(s){
	//s = "周三 3-4节 1-18双周"
	var sc = s.split(' ');
	var sday = sc[0];
	var stime = sc[1];
	var srange = sc[2];
	var recur = srange.substr(length-2);
	console.log(
	sday,
	stime,
	srange,
	recur);
	var dayoffset = new Date(0);
	dayoffset.setDate(getCorNum(sday[1]));
	var sday = new Date(termStatDateOnMonday.getTime()+dayoffset.getTime());
	sday.setDate(sday.getDate()+7*parseInt(srange.split('-')[0]));
	var odd=parseInt(srange.split('-')[0])%2;
	var switchTar = srange.split('-')[1];
	switch(switchTar[switchTar.length-2]){
		case '全':break;
		case '单':if(odd);else sday.setDate(sday.getDate()+7);break;
		case '双':if(!odd);else sday.setDate(sday.getDate()+7);break;
	}
	sday.setTime(sday.getTime()+__startDateTime(parseInt(stime.split('-')[0])).getTime());
	sday.toLocaleString();
	var ans = sday.toISOString();
	ans = ans.substr(0,ans.length-5);
	return ans;
}
//startDateTime("周三 3-4节 1-18双周");


//funcs



var doc = document;
var tb = doc.getElementsByTagName('tbody');
var tb2 = tb[3];
var tbn = tb2.childNodes;
function clone (obj){
	return JSON.parse(JSON.stringify(obj));
}
function getCourses(tbn){
	var cs=[];
	for(var i =1;i<tbn.length;++i){
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
				//console.log(i,sa);
			}
			cs.push(obj);
			//console.log("inb2",sa,obj);
		}
	}
	return cs;
}

var cs = getCourses(tbn);
JSON.stringify(cs[0]);
var es=[];
for (var i =0 ;i< cs.length;i++){
	console.log(i,cs[i]);
	es.push(parseCourse(cs[i]));
}
var doc = document;
var inp = doc.createElement('input');
inp.value=(JSON.stringify(es));

doc.childNodes[0].childNodes[2].appendChild(inp);
}
