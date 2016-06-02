/**
 * Middleware that sends data chunk to the Java Applet
 */

var commandResultMap = new Array();
var callbackMap = new Array();

function Command(p)
{
  var result = null;

  if(document.CoreApplet == undefined)
    {
      if(document.CoreAppletPlugin)
        result = document.CoreAppletPlugin.doCommand(p);
    }
    else
      {
        result = document.CoreApplet.doCommand(p);
      }

      return result;
}

function CommandAsync(command, callback)
{
  var cmdUid;

  cmdUid = sendChunks(command, 'onCommandEnd');


  if(cmdUid == null)
    throw "Cannot send command";

  commandResultMap[cmdUid] = "";
  callbackMap[cmdUid] = callback;
}

function sendChunks(command, callback)
{
  var applet = getApplet();

  var uid = applet.beginCommandChunks();
  var len = command.length;
  var startIndex = 0;
  var endIndex = 0;

  while(startIndex < len)
    {
      endIndex = startIndex + 1000000;
      if(endIndex > len)
        endIndex = len;

      applet.sendCommandChunk(uid, command.substring(startIndex, endIndex));

      startIndex = endIndex;
    }

    return applet.doCommandChunksAsync(uid, callback);
}

function onCommandEnd(result, uid, lastChunk)
{
  commandResultMap[uid] = commandResultMap[uid] + result;
  if(lastChunk)
    {
      callbackMap[uid](commandResultMap[uid], uid);
      delete commandResultMap[uid];
      delete callbackMap[uid];
    }
}

function getApplet()
{
  if(document.CoreApplet == undefined)
    return document.CoreAppletPlugin;
  else
    return document.CoreApplet;
}