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
endDateTime("周三 1-4节 1-18全周");