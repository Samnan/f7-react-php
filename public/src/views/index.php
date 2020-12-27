<?php
  $baseURL = 'http://localhost:8080/';
?>
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <!--
  Customize this policy to fit your own app's needs. For more guidance, see:
      https://github.com/apache/cordova-plugin-whitelist/blob/master/README.md#content-security-policy
  Some notes:
    * https://ssl.gstatic.com is required only on Android and is needed for TalkBack to function properly
    * Disables use of inline scripts in order to mitigate risk of XSS vulnerabilities. To change this:
      * Enable inline JS: add 'unsafe-inline' to default-src
  -->
  <meta http-equiv="Content-Security-Policy" content="default-src * 'self' 'unsafe-inline' 'unsafe-eval' data: gap: content:">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, minimal-ui, viewport-fit=cover">

  <meta name="theme-color" content="#007aff">
  <meta name="format-detection" content="telephone=no">
  <meta name="msapplication-tap-highlight" content="no">
  <title>MyProject</title>
  
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
  <link rel="apple-touch-icon" href="<?php echo $baseURL; ?>static/icons/apple-touch-icon.png">
  <link rel="icon" href="<?php echo $baseURL; ?>static/icons/favicon.png">
  <link rel="manifest" href="<?php echo $baseURL; ?>manifest.json">
  <link href="<?php echo $baseURL; ?>css/app.css" rel="stylesheet"></script>
</head>
<body>
  <div id="app"></div>
  <script src="<?php echo $baseURL; ?>js/app.js"></script>
</body>
</html>