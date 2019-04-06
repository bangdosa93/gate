$(window).on("load", function() {
  $(".mhn-lock-wrap").css("display", "none");

  const originLat = 37.7829427;
  const originLon = -122.4309525;

  //test out of range location
  // const originLat = 38.7829427;
  // const originLon = -122.4309525;

  function success(position) {
    // const latitude = position.coords.latitude;
    // const longitude = position.coords.longitude;
    let latitude, longitude;

    $.getJSON(
      "https://maps.googleapis.com/maps/api/geocode/json?address=94115&key=AIzaSyB7dgSi_MHkDGN44jJynDa6gvmuXd0Fu1M",
      function(data, status) {
        console.log("Locating...");

        if (status === "success") {
          position.coords.latitude = data.results[0].geometry.location.lat;
          position.coords.longitude = data.results[0].geometry.location.lng;
          latitude = position.coords.latitude;
          longitude = position.coords.longitude;
          console.log(longitude, latitude);
          locationOnSuccess(longitude, latitude);
        } else {
          // locationOnError();
        }
      }
    );

    function locationOnSuccess() {
      let dist = calcDist(originLon, originLat, longitude, latitude);
      $(".mhn-lock-wrap").css("display", "block");
      if (dist > 1) {
        $(".mhn-lock").css("display", "none");
        $(".mhn-lock-title")
          .css("margin-bottom", "200px")
          .css("font-size", "1rem")
          .html(
            "<p>You are currently outside of remote range.<br>Please try again later.</p>"
          );
      }
    }
  }

  function error() {
    status.textContent = "Unable to retrieve your location";
  }

  function calcDist(lon1, lat1, lon2, lat2, unit) {
    // console.log(originLon, originLat, currentLon, currentLat);

    if (lat1 == lat2 && lon1 == lon2) {
      return 0;
    } else {
      var radlat1 = (Math.PI * lat1) / 180;
      var radlat2 = (Math.PI * lat2) / 180;
      var theta = lon1 - lon2;
      var radtheta = (Math.PI * theta) / 180;
      var dist =
        Math.sin(radlat1) * Math.sin(radlat2) +
        Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      if (dist > 1) {
        dist = 1;
      }
      dist = Math.acos(dist);
      dist = (dist * 180) / Math.PI;
      dist = dist * 60 * 1.1515;
      if (unit == "K") {
        dist = dist * 1.609344;
      }
      if (unit == "N") {
        dist = dist * 0.8684;
      }
      return dist;
    }
  }

  if (!navigator.geolocation) {
    alert("Geolocation is not supported by your browser");
  } else {
    navigator.geolocation.getCurrentPosition(success, error);
  }
});
