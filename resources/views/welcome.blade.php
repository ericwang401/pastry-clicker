<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

        <!-- Styles -->
        <style>
            body {
                font-family: 'Nunito', sans-serif;
            }
        </style>

        <!-- Scripts and CSS import -->
        @production
            @vite
        @endproduction

        @env('local')
            @verbatim
                <script type="module" src="http://localhost:3000/@vite/client"></script>
            @endverbatim
            <script type="module">
                import RefreshRuntime from "http://localhost:3000/@react-refresh"
                RefreshRuntime.injectIntoGlobalHook(window)
                window.$RefreshReg$ = () => {}
                window.$RefreshSig$ = () => (type) => type
                window.__vite_plugin_react_preamble_installed__ = true
            </script>
        @endenv
    </head>
    <body>
        <div id="root"></div>
    </body>

    @env('local')
        <script type="module" src="http://localhost:3000/resources/scripts/main.tsx"></script>
    @endenv
</html>
