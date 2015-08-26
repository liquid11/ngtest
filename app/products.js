/**
 * Created by Arslan on 8/26/2015.
 */
storeApp.directive('productTitle',function(){
    return {
        restrict:'E', // type of directive. here we are declaring html element
        templateUrl:'product-title.html' // the url of the template we want to show
    };
});

storeApp.directive('productPanels',function(){
    return {
        restrict:'E',
        templateUrl:'product-panel.html',
        controller:function(){
            /*   set initialization values   */
            this.tab =1;
            /* tab selection function */
            this.selectTab= function(setTab){
                this.tab = setTab;
            };
            this.isSelected = function(chk){
                return this.tab === chk;
            };
        },
        controllerAs:'panel'
    };
});

storeApp.directive('productReviews',function(){
    return {
        restrict:'E',
        templateUrl:'product-review.html',
        controller:function(){
            this.review = [];
            this.addReview = function (product){
                product.reviews.push(this.review);
                this.review = [];
            }
        },
        controllerAs:'review'
    };
});

