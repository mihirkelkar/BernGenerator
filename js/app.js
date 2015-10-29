var app = angular.module('MyApp', [])

app.controller('BernCtrl', function($scope){
        $scope.subjects = ["Three Wheel Cars", 
			   "Eurpoean Socialism", 
                           "Free Hillary Emails", 
                           "Legal Pot", 
                           "Excessive Government intervention",
	                   "Legally mandated veganism",
                           "Taxpayer funded hipster Tshirts",
                           "Increased Social Taxation",
			   "Subsidies",
			   "Free Abortions",
			   "Renewable Energy",
			   "Tax Payer Funded Flower Power Day",
			   "Income redistribution",
			   "Wall-less unchecked Mexican Immigration",
			   "Anti-corporate Government Backed Mellow out session",
			   "Organic Non GMO FairTrade food",
                           "Progressive taxation",
                           "War against Big Banks",
			   "Affirmative Feminism",
			   "the Right to Unionize",
                      
			   "Tax Payer Funded Socialism Lessons",
			   "a Ban on Good Hairstyles",
			   "to Replace guns with Marshmallow shooters"
			   ];

	$scope.predicates = [

				"Vegans",
                                "Hipsters",
				"Conservatives",
				"Bobby Jindal",
				"High School Dropouts",
				"Inner City schools",
				"Republicans",
				"Troops",
				"Undocumented Immigrants",
				"Elite North East Liberals",
				"Wolf Blitzer",
				"LGBT youth",
				"Middle Class",
				"Our veterans",
				"NRA",
				"Wall Street Banks",
                                "Democrats"
			    ];

	$scope.subject = function(){
		var index = Math.floor(Math.random()*$scope.subjects.length);
                return $scope.subjects[index];
	};

	$scope.predicate = function(){
		var index = Math.floor(Math.random() * $scope.predicates.length);
                return $scope.predicates[index];
	};
});
