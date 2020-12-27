<?php

  namespace App\Controller;
  use App\Util\View;
  use Laminas\Diactoros\Response\HtmlResponse;

  class Home {

    public function index() {
      $view = View::factory('index')->render();
      return new HtmlResponse($view);
    }

  }

?>