(function () {
    "use strict"

    angular.module("instalinkPreviewNgjs", []).directive('instalinkPreviewNgjs', ['$timeout', function ($timeout) {
        return {
            restrict: 'E',
            scope: {
                options: '='
            },
            template: '\
                <div class="instalink-preview">\
                    <div data-il \
                        data-il-api="{{defaultOptions.api}}"\
                        data-il-username="{{defaultOptions.username}}"\
                        data-il-hashtag="{{defaultOptions.hashtag}}"\
                        data-il-lang="{{defaultOptions.lang}}"\
                        data-il-show-heading="{{defaultOptions.showHeading}}"\
                        data-il-scroll="{{defaultOptions.scroll}}"\
                        data-il-width="{{defaultOptions.width}}"\
                        data-il-height="{{defaultOptions.height}}"\
                        data-il-image-size="{{defaultOptions.imageSize}}"\
                        data-il-bg-color="{{defaultOptions.bgColor}}"\
                        data-il-content-bg-color="{{defaultOptions.contentBgColor}}"\
                        data-il-font-color="{{defaultOptions.fontColor}}"\
                        data-il-ban="{{defaultOptions.ban}}"\
                    ></div>\
                </div>\
            ',
            link: function (scope, element, attrs, ctrl) {
                scope.defaultOptions = {
                    hashtag: '',
                    lang: 'en',
                    showHeading: true,
                    scroll: true,
                    width: '100%',
                    height: '350px',
                    imageSize: 'medium',
                    bgColor: '#ffffff',
                    contentBgColor: '#F8F8F8',
                    fontColor: '#333333',
                    ban: ''
                };

                angular.forEach(scope.options, function (v, k) {
                    scope.defaultOptions[k] = v;
                });
                
                $timeout(function() {
                    mainInstalink();
                });

                scope.$watch('options', function(v) {
                    if (v) {
                        angular.forEach(v, function(val, key) {
                            scope.defaultOptions[key] = val;
                        });
                    }
                }, true);
            }
        }
    }]);
}).call(this);