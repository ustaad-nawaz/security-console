'use-strict'
securityConsole.controller('baseCTRL', [
	'$scope', '$location', 'H',
	function($scope, $location, $h) {

		$scope.navItems = [];

		var getNavInfo = (url) => {
            var found = false;
			angular.forEach($scope.navItems, (item) => {
				if(item.name==url) 
					$scope.navigate(item);
            });
            
            if(!found)
                $scope.selectedNav = "none";
        }

        $scope.navigate = (item) => {
            $scope.selectedNav = item;
            $location.path(item.name);
            $h.closeSideNav();
        }

		$scope.openSideNav = () => {
			$h.openSideNav();
		}

		getNavInfo($location.$$url.split("/")[1]);
		$h.printInfo("Base", "Controller Loaded!");
	}
]);