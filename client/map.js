var stage;
var mapLayer;
var routeLayer;
var mapX;
var mapY;

Template.map.onRendered(function () {
    var zoom = new ZoomView('#zoom', '#zoom :first');
});

Template.map.helpers({
    //counter: function () {
    //    return Session.get('counter');
    //}
});
var blueLine;


Template.map.events({
    'click #showMapRoute': function() {
        $('#route').addClass('active');
        return false;
    }
    //'click button': function () {
    //    // increment the counter when button is clicked
    //    Session.set('counter', Session.get('counter') + 1);
    //}
});