'use-strict'
securityConsole.factory('H',
    ['$mdToast', '$mdDialog', '$mdSidenav',
    function($T, $D, $SN) {

        function H() {};

        // LOGS
        H.prototype.printInfo = (TAG, text, text2) => {
            console.log(TAG, text, text2);
        };

        // TOASTS
        H.prototype.acknowledge = (text) => {
            $T.show(
                $T.simple()
                .textContent(text)
                .position('top right')
                .hideDelay(1500)
            );
        };

        // DIALOGS
        H.prototype.showCustomDialog = (ev, controller, url, data, callback) => {
            $D.show({
				controller: controller,
				templateUrl: url,
				parent: angular.element(document.body),
				targetEvent: ev,
				locals: { data: data },
				clickOutsideToClose: false
			}).then(callback, (err) => {
                this.printInfo("DIALOG", "Error", err);
                this.acknowledge("Error");
            });
        };

        // Side Nav
        H.prototype.openSideNav = () => {
			$SN('left').open();
		};

		H.prototype.closeSideNav = () => {
			$SN('left').close();
		};

        return new H();
    }
]);