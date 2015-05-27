
Template.map.onRendered(function () {
    $("#zoom").panzoom({
        minScale: 0.5,
        maxScale: 3
    });
});

Template.map.helpers({
    //counter: function () {
    //    return Session.get('counter');
    //}
});
var activeRoute='';


Template.map.events({
    'click #directionsButton': function() {
        console.log('Bau hau miau!');
        var oldActiveRoute=activeRoute;
        switch(activeRoute) {
            case '':
                activeRoute = 'route';
                break;
            case 'route':
                activeRoute = 'route2';
                break;
            case 'route2':
                activeRoute = 'route3';
                break;
            case 'route3':
                activeRoute = 'route';
                break;
        }
        console.log(oldActiveRoute, activeRoute);
        if (oldActiveRoute) $('#'+oldActiveRoute).removeClass('active');
        $('#'+activeRoute).addClass('active');
        return false;
    }
    //'click button': function () {
    //    // increment the counter when button is clicked
    //    Session.set('counter', Session.get('counter') + 1);
    //}
});