<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="/#/">Plant.me</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#/">Home<span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/userplants">My Plants</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link class="dropdown-item" to="/">Home</router-link>
              <router-link class="dropdown-item" to="/plants/new">Add Plant</router-link>
              <div class="dropdown-divider"></div>
              <router-link class="dropdown-item" to="/signup">Signup</router-link>
              <router-link class="dropdown-item" to="/login">Login</router-link>
              <router-link class="dropdown-item" to="/logout">Logout</router-link>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Disabled</a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<style>
  
</style>