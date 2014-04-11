'use strict';

var debugApp = function($){
    var isCordova = document.URL.substring(0,4) === 'file';
    var loadXML = function(){
        // var url = 'http://papers.softwarelivre.org/papers_ng/public/fast_grid?event_id=4',
        var button = $('#load-ajax-button'),
            url = button.data('url');
        console.log('Getting url ' + url);
        $.ajax(url, {
            dataType: 'text'
        })
        .done(function(data) {
            console.log('Load was performed [1]: ' + (typeof data));
            var textArea = $('#payload'),
                $xml = $(data),
                eventId = $xml.find('event_id').text();
            console.log('Load was performed [2]:' + $xml);
            console.log('Load was performed [3]:' + eventId);
            textArea.val(data);
        }).fail(function() {
            console.log('error');
        }).always(function() {
            console.log('finished');
        });
    };
    var onDeviceReady = function(){
        //bind events
        $('#load-ajax-button').click(loadXML);
    };
    $(document).ready(function() {
        if (isCordova) {
            document.addEventListener('deviceready', onDeviceReady, false);
        } else {
            onDeviceReady();
        }
    });
};
debugApp(jQuery.noConflict());