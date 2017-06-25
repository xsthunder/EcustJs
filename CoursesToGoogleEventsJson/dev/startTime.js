function setHM( d, h, m){
	d.setHours(h);
	d.setMinutes(m);
	return d;
}
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
startDateTime("周三 3-4节 1-18双周");