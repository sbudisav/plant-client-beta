<template>
  <div id="app">
  <header id="header">
    <nav class="navbar navbar-default navbar-static-top" role="banner">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
          <div class="navbar-brand">
            <a href="index.html"><h1>Plant.me</h1></a>
            <img src="icon.png" height="170" width="170" alt=""/>
          </div>
        </div>
        <div class="navbar-collapse collapse">
          <div class="menu">
            <ul class="nav nav-tabs" role="tablist">
              <li role="presentation"><a href="/" class="active">Home</a></li>
              <li role="presentation"> <router-link to="/userschedule">Schedule</router-link></li>
              <li role="presentation"> <router-link to="/userplants">My Plants</router-link></li>
              <li role="presentation"> <router-link to="/plants">All Plants</router-link></li>
              <li role="presentation"> <router-link to="/signup">Signup</router-link></li>
              <li role="presentation"> <router-link to="/login">Login</router-link></li>
              <li role="presentation"> <router-link to="/logout">Log Out</router-link></li>
            </ul>
          </div>
        </div>
      </div>
     <!--  </container> -->
    </nav>
    <!--/nav-->
  </header>

 <router-view/>

  <footer>
    <div class="container">
      <div class="col-md-4 wow fadeInDown" data-wow-duration="600ms" data-wow-delay="200ms">
        <h4>About This App</h4>
        <p>Plant.me is a project to help keep on schedule with watering and care of house plants</p>
        <div class="contact-info">
          <ul>
            <li><i class="fa fa-home fa"></i> Actualize. Chicago, IL </li>
            <li><i class="fa fa-phone fa"></i> 719-242-5869</li>
            <li><i class="fa fa-envelope fa"></i> info@domain.net </li>
          </ul>
        </div>
      </div>

      <div class="col-md-4 wow fadeInDown" data-wow-duration="800ms" data-wow-delay="400ms">
        <div class="text-center">
          <h4>Simon Budisavljevic</h4>
          <ul class="sidebar-gallery">
            <li><a href="#"><img src="https://image.flaticon.com/sprites/new_packs/628264-house-plants.png" height="170" width="170" alt="" /></a></li>
          </ul>
        </div>
      </div>

      <div class="col-md-4 wow fadeInDown" data-wow-duration="800ms" data-wow-delay="700ms">
        <div class="">
          <h4>Plant.me</h4>
          <p></p>
          <div class="btn-gamp">
            <input type="email" class="form-control" id="exampleInputEmail3" placeholder="Enter Email">
          </div>
          <div class="btn-gamp">
            <a type="submit" class="btn btn-default">Subscribe</a>
          </div>

        </div>
      </div>

    </div>
  </footer>
</div>

</template>
<style>
  
</style>