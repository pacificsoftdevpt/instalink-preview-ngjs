(function() {
    "use strict"

    angular.module("instalinkPreviewNgjs", []).directive('instalinkPreviewNgjs', ['$timeout', function($timeout) {
        return {
            restrict: 'E',
            scope: {
                options: '='
            },
            template: '\
                <div data-il \
                    data-il-api="./instalink/api/"\
                    data-il-username="facebook"\
                    data-il-hashtag=""\
                    data-il-lang="en"\
                    data-il-show-heading="true"\
                    data-il-scroll="true"\
                    data-il-width="270px"\
                    data-il-height="350px"\
                    data-il-image-size="medium"\
                    data-il-bg-color="#285989"\
                    data-il-content-bg-color="#F8F8F8"\
                    data-il-font-color="#FFFFFF"\
                    data-il-ban=""\
                ></div>\
            ',
            link: function(scope, element, attrs, ctrl) {
                
            }
        }
    }]);
}).call(this);