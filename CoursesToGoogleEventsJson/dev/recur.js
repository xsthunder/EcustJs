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