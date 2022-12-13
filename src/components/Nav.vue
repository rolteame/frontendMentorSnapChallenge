<template>
  <nav class="navbar navbar-expand-lg p-4">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src="../assets/logo.svg" alt="logo"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <!-- <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5> -->
        <button type="button" class="btn-close ml-auto" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body justify-content-between">
        <ul class="navbar-nav pe-3">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle mx-2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Features
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#"><img class="mx-2" src="../assets/icon-todo.svg" alt=""> Todo List</a></li>
              <li><a class="dropdown-item" href="#"><img class="mx-2" src="../assets/icon-calendar.svg" alt="">Calender</a></li>
              <li><a class="dropdown-item" href="#"><img class="mx-2" src="../assets/icon-reminders.svg" alt="">Reminders</a></li>
              <li><a class="dropdown-item" href="#"><img class="mx-2" src="../assets/icon-planning.svg" alt="">Planning</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle mx-2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Company
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">History</a></li>
              <li><a class="dropdown-item" href="#">Our Team</a></li>
              <li><a class="dropdown-item" href="#">Blog</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link mx-2" href="#">Careers</a>
          </li>
          <li class="nav-item">
            <a class="nav-link mx-2" href="#">About</a>
          </li>

        </ul>
        <ul class="navbar-nav pe-3">
          <li class="nav-item">
            <a class="nav-link mx-2" href="#">Login</a>
          </li>
          <li class="nav-item">
            <button class="btn btn-dark border-1 rounder-pill mx-2" href="#">Register</button>
          </li>

        </ul>
      </div>
    </div>
  </div>
</nav>
</template>

<style scoped>
  nav {
    font-size: 16px;
  }

  .nav-link:focus {
    font-weight: 700;
  }
</style>


