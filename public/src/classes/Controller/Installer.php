<?php

  namespace App\Controller;
  use App\Util\View;
  use Laminas\Diactoros\Response\HtmlResponse;

  class Installer {

    public function index() {
      $view = View::factory('installer')->render();
      return new HtmlResponse($view);
    }

  }

?>