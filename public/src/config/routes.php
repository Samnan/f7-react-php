<?php
  
  $router->map(['GET'], '/', '\App\Controller\Home@index');
  $router->map(['GET'], '/install', '\App\Controller\Installer@index');

?>