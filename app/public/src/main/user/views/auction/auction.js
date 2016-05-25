'use strict';

import AuctionCtrl from './auction-controller';
import AuctionService from './auction-services/auction-service';
import AuctionAPIService from './auction-services/auction-api-service';
import CookiesService from '../../../../common/service/cookies-service';

export default angular.module('auctionUser', [])
    .service('auctionService', AuctionService)
    .service('auctionAPIService', AuctionAPIService)
    .service('cookiesService', CookiesService)
    .config($stateProvider => {
        $stateProvider.state('user.auction', {
            url: '/auction',
            controller: AuctionCtrl,
            controllerAs: 'ctrl',
            template: require('./auction-tmpl.jade')
        });
    });