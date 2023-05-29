// Define a function to handle the URL parameter
function handleUrlParam() {
    // Get the launch parameters
    var launchParams = JSON.parse(PalmSystem.launchParams);
    if (launchParams && launchParams.url) {
        // redirect to the URL
        var delayInMilliseconds = 1000; //1 second

        setTimeout(function() {
            window.location.replace(launchParams.url);
        }, delayInMilliseconds);
    }
}

// Call the handleUrlParam function when the app is launched
document.addEventListener('webOSLaunch', function(event) {
    handleUrlParam();
}, false);