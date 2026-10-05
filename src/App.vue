<template>
  <nav class="navbar navbar-expand-lg bg-primary-subtle">
  <div class="container">
    <a class="navbar-brand" href="#">HARD ROCK CITY</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/About">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Contact">Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Grade">Grade</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            API
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="Golds">ราคาทองวันนี้</a></li>
            <li><a class="dropdown-item" href="Product_Api">สินค้า</a></li>
            <li><a class="dropdown-item" href="Product_Table">แสดงสินค้าเป็นตาราง</a></li>
            <li><a class="dropdown-item" href="Users">แสดงชื่อผู้ใช้</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
  
   <!--แสดงหน้าเพจที่เลือกเมนู-->
  <router-view/>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
