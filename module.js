// JavaScript Document

var time=new Date(),
	tem_date=time.getDate(),
	tem_month=time.getMonth()+1,
	tem_year=time.getFullYear();
var database={};
database.date=tem_date+"/"+tem_month+"/"+tem_year;
database.percent=1.207;
database.amount=842.65;

var moduledata=angular.module('moduleapp',[]);


moduledata.controller('datacontrol',function($scope){
	$scope.message={};
	$scope.message=database;

	$scope.dateChanged= function(calendar){
		if (calendar.dateClicked) {
		  // OK, a date was clicked, redirect to /yyyy/mm/dd/index.php
		  var y = calendar.date.getFullYear();
		  var m = calendar.date.getMonth()+1;     // integer, 0..11
		  var d = calendar.date.getDate();		// integer, 1..31
		  database.date=d+"/"+m+"/"+y;
		  
		  $scope.message.date=database.date;
		  $scope.$apply();
		}	
		
	};


	Calendar.setup(
		{
		  flat         : "calendar-container", // ID of the parent element
		  flatCallback : $scope.dateChanged           // our callback function
		}
	);
});
	

	


