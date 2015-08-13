/**
 * Created by tezrosolutions on 12/08/2015.
 */

(function() {

    var storeApp = angular.module('storeApp', []);



       storeApp.controller('StoreController',function() {

        this.products = gems;
    });

    var gems = [
        {
        name:'Azurite' ,
        price:'22.49' ,
        description:'2,49' ,
        soldOut:false,
        canPurchase:false

        },
        {
            name:'ruby' ,
            price:'5.49' ,
            description:'.....' ,
            soldOut:false,
            canPurchase:true
        },
        {
            name:'zerkon' ,
            price:'35' ,
            description:'....' ,
            soldOut:true,
            canPurchase:false
        }
     ]

})();