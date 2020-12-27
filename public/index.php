<?php
  require('./vendor/autoload.php');

  use Rareloop\Router\Route;
  use App\Util\Arr;
  use Laminas\Diactoros\ServerRequest;

  $baseURL = Arr::get($_ENV, 'BASE_URL');

  $env = Dotenv\Dotenv::createImmutable(__DIR__);
  try {
    $env->load();
  } catch(Exception $e) {
    header("Location: {$baseURL}install");
    exit;
  }

  $router = new Rareloop\Router\Router;
  if($baseURL) {
    $router->setBasePath($baseURL);
  }

  require('./src/config/routes.php');

  $request = new ServerRequest([], [], Arr::get($_SERVER, 'REQUEST_URI'));
  $response = $router->match($request);
  echo $response->getBody();

?>