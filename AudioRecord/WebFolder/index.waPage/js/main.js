﻿$(function() {
  var gain = $('#gain')[0];
  var silenceLevel = $('#silenceLevel')[0];
  for(var i=0; i<=100; i++) {
    gain.options[gain.options.length] = new Option(100-i);
    silenceLevel.options[silenceLevel.options.length] = new Option(i);
  }

  var appWidth = 24;
  var appHeight = 24;
  var flashvars = {'event_handler': 'microphone_recorder_events', 'upload_image': 'images/upload.png'};
  var params = {};
  var attributes = {'id': "recorderApp", 'name':  "recorderApp"};
  swfobject.embedSWF("recorder.swf", "flashcontent", appWidth, appHeight, "10.1.0", "", flashvars, params, attributes);
});

function configureMicrophone() {
  if(! Recorder.isReady) {
    return;
  }

  //Recorder.configure($('#rate').val(), $('#gain').val(), $('#silenceLevel').val(), $('#silenceTimeout').val());
  //Recorder.setUseEchoSuppression($('#useEchoSuppression').is(":checked"));
  //Recorder.setLoopBack($('#loopBack').is(":checked"));
  Recorder.configure(22, 100, 0, 2000);
  Recorder.setUseEchoSuppression(true);
  Recorder.setLoopBack(false);
  
}
