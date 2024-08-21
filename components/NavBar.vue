<template>
    <nav class="navbar bg-transparent fixed-top">
        <button class="navbar-toggler menu" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <font-awesome-icon class="icon" icon="fa-solid fa-ellipsis" />
        </button>
        <!-- </nav> -->
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <div class=" card-wrapper">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-6">
                                <NuxtLink class="nav-wrapper" to='/'>
                                    <h2 class="navigation">pushkar</h2>
                                </NuxtLink>
                            </div>
                            <div class="col-6">
                                <button class="navbar-toggler close" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapsibleNavbar">
                                    <font-awesome-icon class="close-icon" icon="fa-solid fa-xmark" />
                                </button>
                            </div>
                        </div>

                        <hr>

                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <NuxtLink class="nav-link" to="/about">
                                    <span data-bs-target="#collapsibleNavbar" data-bs-toggle="collapse">About</span>
                                </NuxtLink>
                            </li>
                            <li class="nav-item">
                                <NuxtLink class="nav-link" to="/scribbles">
                                    <span data-bs-target="#collapsibleNavbar" data-bs-toggle="collapse">Scribbles</span>
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </nav>

</template>

<style>
.navbar {
    height: 10vh;
}

.menu {
    margin-left: auto;
    margin-right: 5%;
    border-radius: 50%;
    height: 60px;
    width: 60px;
    border: 2px solid #041B2d;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
}

.icon {
    color: #041B2d;
    font-size: 2vw;
}

.close {
    margin-top: 3%;
    margin-left: auto;
    margin-right: 5%;
    border-radius: 50%;
    height: 40px;
    width: 40px;
    border: 2px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
}

.close-icon {
    color: white;
    font-size: 1.5vw;
}

.close {
    float: right;
    color: white;
}

.navbar-collapse {
    height: 100vh;
    margin-top: -7vh;
    background: hsla(0, 0%, 100%, 0.15);
    backdrop-filter: blur(30px);
}

.card-wrapper {
    height: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
}

.card {
    width: 50%;
    height: 70vh;
    margin: 5%;
    color: white;
    border-radius: 20px;
    border: none;
    background-image: radial-gradient(farthest-corner at 20% 20%,
            #041B2d 70%,
            #004E9A 100%);
}

.navigation {
    font-size: 1.5vw;
    padding: 5% 15%;
    font-family: "Sarina", cursive;
    font-weight: 400;
    font-style: normal;
}

.navigation:hover {
    background: linear-gradient(to right,
            #EA4492,
            #004E9A);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

.nav-wrapper {
    text-decoration: none;
    color: inherit;
}

.nav-link {
    font-size: 2.5vw;
    font-weight: 500;
    color: white;
    padding: 3% 7%;
}

.nav-link:hover {
    background: linear-gradient(to right,
            #EA4492,
            #004E9A);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>