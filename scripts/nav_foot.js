const footer = Vue.createApp({

})
footer.component("footer-template", {
    template : 
    `
    <div class="container">

      <hr style="margin-top: 90px;">

      <footer class="py-5">
        <div class="row">
          <div class="col-6 col-md-2 mb-3">
            <h5>Company</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2" style="background-color: pink; height: 2px; width: 62%;"></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About Us</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Our Team</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Workplace</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Investors</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Careers</a></li>
            </ul>
          </div>

          <div class="col-6 col-md-2 mb-3">
            <h5>Links</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2" style="background-color: pink; height: 2px; width: 30%;"></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Instagram</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Facebook</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Patreon</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Donate!</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">GitHub</a></li>
            </ul>
          </div>

          <div class="col-6 col-md-2 mb-3">
            <h5>Support</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2" style="background-color: pink; height: 2px; width: 50%;"></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">24/7 Support</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Community</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Events</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Blog</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">API</a></li>
            </ul>
          </div>

          <div class="col-md-5 offset-md-1 mb-3">
            <form>
              <h3>DomesticAID <span style="color: pink;">&hearts;</span></h3>
              <p class="text-muted">
                Designed and built by the DomesticAID team for domestic helpers in Singapore to get help and find resources about assimilating into Singapore
              </p>
              <div>
                <!-- Instagram -->
                <a href="#" class="text-muted" style="margin-right: 10px;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                  </svg>
                </a>

                <!-- Facebook -->
                <a href="#" class="text-muted" style="margin-right: 10px;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                  </svg>
                </a>

                <!-- Twitter -->
                <a href="#" class="text-muted" style="margin-right: 10px;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                  </svg>
                </a>
              </div>
            </form>
          </div>
        </div>

        <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4">
          <p>&copy; 2022 DomesticAID Inc. All rights reserved.</p>
        </div>
        
      </footer>
    </div>
    `
})
footer.mount("#footer");

const mainNav = Vue.createApp({})
mainNav.component("nav-template", {
  props : ["homepage_link", "logo_img", "forum_link", "activity_link", "guides_link", "wellness_link",  ],
  template : 
  `
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
          <a class="navbar-brand" href="#">
              <img src="/img/logo.png" height="80" alt="DomesticAID Logo" />
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">

              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">

                  <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                          data-mdb-toggle="dropdown" aria-expanded="false">
                          Social +
                      </a>
                      <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                          <li>
                              <a class="dropdown-item" href="/Social/Forum/forum.html">Forum</a>
                          </li>
                          <li>
                              <a class="dropdown-item" href="/Social/Activities/activities_landing.html">Activities</a>
                          </li>
                      </ul>
                  </li>

                  <!-- Icon dropdown -->

                  <li class="nav-item mx-3">
                      <a class="nav-link" href="/Guides/guide_navigation.html">Guides</a>
                  </li>

                  <li class="nav-item mx-3">
                      <a class="nav-link" href="/HealthIsWealth/health_is_wealth.html">Wellness</a>
                  </li>

                  <li class="nav-item mx-3">
                    <button class="btn btn-danger btn-rounded btn-lg" id="sos_button">SOS</button>
                  </li>

                  <!-- Icon dropdown -->

                  <li class="nav-item dropdown">
                      <a
                        class="nav-link dropdown-toggle d-flex align-items-center"
                        href="#"
                        id="navbarDropdownMenuLink"
                        role="button"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <img
                          src="/img/jx.jpg"
                          class="rounded-circle"
                          height="22"
                          alt="Portrait of a Woman"
                          loading="lazy"
                        />
                      </a>
                      <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                        <li>
                          <a class="dropdown-item" href="/Registration&Profiling/edit_profiling.html">My profile</a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="/HomeLandingAbout/about.html">Logout</a>
                        </li>
                      </ul>
                    </li>
              </ul>
          </div>
      </div>
  </nav>
  `
})


// Navbar

{/* <nav class="navbar navbar-expand-lg bg-light">
<div class="container-fluid">
    <a class="navbar-brand" href="#">
        <img src="../img/logo.png" height="80" alt="DomesticAID Logo" />
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">

        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">

            <li class="nav-item mx-3">
                <a class="nav-link active" aria-current="page" href="#">About DomesticAID</a>
            </li>

            <li class="nav-item mx-3">
                <a class="nav-link" href="#">Our Team</a>
            </li>

            <li class="nav-item mx-3">
                <a class="nav-link" href="#">Donate</a>
            </li>

            <li class="nav-item mx-3">
                <a class="nav-link" href="#">Join Us</a>
            </li>

            <li class="nav-item mx-3">
                <a href="../Registration&Profiling/login.html" class="btn btn-outline-dark btn-rounded"
                    role="button">
                    Register/ Login
                </a>
            </li>


            <!-- Icon dropdown -->
            <li class="nav-item dropdown mx-3">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                    data-mdb-toggle="dropdown" aria-expanded="false">
                    <i class="flag-singapore flag m-0"></i>
                </a>
                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                    <li>
                        <a class="dropdown-item" href="#"><i class="flag-singapore flag"></i>English
                            <i class="fa fa-check text-success ms-2"></i></a>
                    </li>
                    <li>
                        <hr class="dropdown-divider" />
                    </li>

                    <li>
                        <a class="dropdown-item mx-3" href="#"><i class="flag-philippines flag"></i>Tagalog</a>
                    </li>

                    <li>
                        <a class="dropdown-item mx-3" href="#"><i class="flag-indonesia flag"></i>Bahasa
                            Indonesia</a>
                    </li>

                    <li>
                        <a class="dropdown-item mx-3" href="#"><i class="flag-myanmar flag"></i>Burmese</a>
                    </li>

                </ul>
    </div>
</div>
</nav> */}


{/* <nav class="navbar" aria-label="navbar">
    <div class="container-fluid">

      <a class="navbar-brand" href="../HomeLandingAbout/homepage.html">
        <img src="../img/logo4.png" alt="" id="logo">
      </a>

        
        

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <!-- <button type="button" class="btn btn-outline-danger" id="sos_button">Large button</button> -->

        <div class="collapse navbar-collapse" id="navbar">
            <ul class="navbar-nav me-auto mb-2">
              
              <li class="nav-item">
                <a class="nav-link active text-secondary" href="../HomeLandingAbout/homepage.html"><span>Home</span></a>
              </li>

              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle text-secondary" href="../Guides/guides_categories.html" data-bs-toggle="dropdown" aria-expanded="false"><span>Guides & Resources</span></a>
                    <ul class="dropdown-menu"> 
                        <li><a class="dropdown-item" href="../Guides/guide_care.html">Care</a></li>
                        <li><a class="dropdown-item" href="../Guides/guide_rights.html">Rights</a></li>
                        <li><a class="dropdown-item" href="../Guides/guide_navigation.html">Navigation</a></li>
                    </ul>
              </li>

              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle text-secondary" href="../HealthIsWealth/health_is_wealth.html" data-bs-toggle="dropdown" aria-expanded="false"><span>Health is Wealth</span></a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="../HealthIsWealth/Mental_Health/breathing.html">Breathing Exercise</a></li>
                  <li><a class="dropdown-item" href="../HealthIsWealth/Mental_Health/journalling.html">Journalling</a></li>
                  <li><a class="dropdown-item" href="../HealthIsWealth/Mental_Health/mental_guides.html">Mental Wellness Articles</a></li>
                  <li><a class="dropdown-item" href="../HealthIsWealth/Physical_Health/physical_health_places.html">Physical Healthcare</a></li>
                </ul>
              </li>

              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle text-secondary" href="../Social/social_plus.html" data-bs-toggle="dropdown" aria-expanded="false"><span>Social+</span></a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="../Social/Forum/forum.html">Forum</a></li>
                  <li><a class="dropdown-item" href="../Social/Activities/activities_landing.html">Activity Page</a></li>
                </ul>
              </li>

              <li class="nav-item">
                <a class="nav-link active text-secondary" href="../Registration&Profiling/edit_profiling.html"><span>Profile & Settings</span></a>
              </li>

              <li class="nav-item">
                <a class="nav-link active text-primary fs-underline" href="about.html"><span><u>Log Out</u></span></a>
              </li>

              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                    <button type="button" class="btn w-100 fs-3" id="sos_button">SEND SOS</button>
                </a>
              </li>

            </ul>
          </div>
      
    </div>
</nav> */}