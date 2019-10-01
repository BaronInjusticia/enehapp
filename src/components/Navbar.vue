<template>
    <div>
        <div>
<b-nav tabs justified allign="center" class="nav-tabs" >

<b-navbar-brand href="/inicio">
    <img src="https://i.imgur.com/Z6wB076.png" class="d-inline-block align-top" alt="Eneh" style="max-width: 32px;">
        ENEH
    </b-navbar-brand>

    <b-nav-item to="/inicio" exact exact-active-class="active" >
    Inicio</b-nav-item>
    <b-nav-item to="/usuario:id" exact exact-active-class="active">
    Usuario</b-nav-item>
    <b-nav-item to="/horarios" exact exact-active-class="active">
    Horarios </b-nav-item>
    <b-nav-item to="asistencias" exact exact-active-class="active">
    Asistencias </b-nav-item>
    <b-nav-item to="sedes" exact exact-active-class="active">
    Sedes</b-nav-item>

  </b-nav>
</div>
    </div>
</template>
<style>
    .nav-tabs{
        background-color:#161616;
        color:#fff
    }
</style>
