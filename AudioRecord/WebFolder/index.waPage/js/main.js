window.onload = function() {
  var appWidth = 24;
  var appHeight = 24;
  var flashvars = {'event_handler': 'microphone_recorder_events', 'upload_image': 'images/upload.png'};
  var params = {};
  var attributes = {'id': "recorderApp", 'name':  "recorderApp"};
  swfobject.embedSWF("recorder.swf", "flashcontent", appWidth, appHeight, "10.1.0", "", flashvars, params, attributes);
}