/*origin object 
{
  "courseName": "体育(4)",
  "courseID": "1623002501",
  "teacherName": "施家瑜",
  "time": "周三 3-4节 1-18全周",
  "location": "体育场2",
  "department": "体育系",
  "credit": "1.0",
  "courseCharacter": "公共基础课"
}
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
/*sample object
{
  'summary': 'Google I/O 2015',
  'location': '800 Howard St., San Francisco, CA 94103',
  'description': 'A chance to hear more about Google\'s developer products.',
  'start': {
    'dateTime': '2015-06-05T09:00:00-07:00',
    'timeZone': 'China/Beijing'
  },
  'end': {
    'dateTime': '2015-06-05T17:00:00-07:00',
    'timeZone': 'China/Beijing'
  },
  'recurrence': [
    'RRULE:FREQ=DAILY;COUNT=2'
  ],
  'attendees': [
  ],
  'reminders': {
    'useDefault': false,
    'overrides': [
      {'method': 'popup', 'minutes': 10}
    ]
  }
};

*/
