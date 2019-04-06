$(window).on("load", function() {
  $(".mhn-lock-wrap").css("display", "none");

  const originLat = 37.7829427;
  const originLon = -122.4309525;

  //test out of range location
  // const originLat = 38.7829427;
  // const originLon = -122.4309525;
  console.log("Origin Location: ", originLat, originLon);

  function locationOnSuccess(latitude, longitude) {
    let dist = calcDist(originLon, originLat, longitude, latitude);
    console.log("Distance: ", dist.toFixed(2), "mi.");
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
  function getIP() {
    console.log("Locating...");
    $.getJSON("http://ip-api.com/json", function(data, status) {
      if (status === "success") {
        console.log("Success!!");

        if (data.lat && data.lon) {
          console.log("User Location: ", data.lat, data.lon);

          locationOnSuccess(data.lat, data.lon);
        }
      }
    });
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
    getIP();
  }
});
