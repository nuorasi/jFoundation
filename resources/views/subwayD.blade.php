<!DOCTYPE html><html lang="en" dir="ltr" id="modernizrcom" class="no-js"><head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

    <title>Home - Subway</title>

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
    * {
  box-sizing: border-box;
}

html, body, #map, #wrap {
  height: 100%;
  width: 100%;
  margin: 0;
  background: #EFEBE6;
  font-family: -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Helvetica,
    Arial,
    sans-serif,
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol";
}

h1 {
  color: white;
  width: 100%;
  text-transform: uppercase;
  font-weight: 200;
  letter-spacing: 0.8em;
  text-align: center;
  font-size: 2em;
  margin: 0;
}

#wrap, #map {
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  padding: 1em;
}

svg {
  position: absolute;
}

.three-D {
  transform-style: preserve-3d;
  transform: translate(0%, 0%)
    rotateX(-60deg)
    rotateY(0deg)
    rotateZ(-10deg)
    scale(2);
}

path, polyline {
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 1;
}

#front path, #front polyline {
  stroke-width: 15;
}

.green path {
  stroke: #4caf50;
}
.lime path {
  stroke: #76ff03;
}
.brown path {
  stroke: #795548;
}
.orange path {
  stroke: #ff5722;
}
.blue path {
  stroke: #2196f3;
}
.navy path {
  stroke: #3f51b5;
}
.yellow path {
  stroke: #ffeb3b;
}
.purple path {
  stroke: #651fff;
}
.red path {
  stroke: #f44336;
}
.gray path {
  stroke: #607d8b;
}

/*
.green path {
  stroke: #333333;
}
.lime path {
  stroke: #333333;
}
.brown path {
  stroke: #333333;
}
.orange path {
  stroke: #333333;
}
.blue path {
  stroke: #333333;
}
.navy path {
  stroke: #333333;
}
.yellow path {
  stroke: #333333;
}
.purple path {
  stroke: #333333;
}
.red path {
  stroke: #333333;
}
.gray path {
  stroke: #333333;
}
*/

.green path {
  stroke: #aaaaaa;
}
.lime path {
  stroke: #aaaaaa;
}
.brown path {
  stroke: #aaaaaa;
}
.orange path {
  stroke: #aaaaaa;
}
.blue path {
  stroke: #aaaaaa;
}
.navy path {
  stroke: #aaaaaa;
}
.yellow path {
  stroke: #aaaaaa;
}
.purple path {
  stroke: #aaaaaa;
}
.red path {
  stroke: #aaaaaa;
}
.gray path {
  stroke: #aaaaaa;
}

#toggle {
  position: fixed;
  right: 5%;
  bottom: 5%;
  color: #777;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  border: 1px solid #111;
}
#toggle:hover {
  border: 1px solid #fff;
  color: #fff;
  user-select: none;
}
    </style>


</head>

<body>
<section id="wrap">


<div id="map">
  <!-- Original SVG Path source: https://en.wikipedia.org/wiki/File:NYC_subway-4D.svg -->
  <svg id="back" class="three-D" height="100%" width="100%" viewBox="0 0 2000 2600">
<g stroke="none" stroke-width="1" fill="none">
  <!-- GREEN -->
  <g class="green">
    <path d="M1260 1969.144 1300.171 1945.954 1340.774 1905.348 1347.837 1898.276 1447.1111 1799"></path>
    <path d="M503 1666.665 503 1245.237 523 1225.237 523 617.676 563.775 576.899 806.877 576.899 806.877 388 1061.877 133"></path>
    <path d="M445.388 82 445.388 379.613 426 399.001 426 464.777 512.899 551.677 512.899 1220.598 492.899 1240.598 492.899 1683.663 484.796 1691.771"></path>
    <path d="M788.877 37 788.877 179.667 788.877 265.321 788.877 372.859 613.52 548.216 523 548.216 523 603.429 513 613.429"></path>
    <path d="M563 577.719 573.75 566.969 796.852 566.969 796.852 383.929 1054.78 126"></path>
    <path d="M788.455 258.097 710 122.211 710 27"></path>
    <path d="M1260.069 1969.118 1123.685 2047.861 1064.735 1988.906 962.573 1886.748 500 1886.748 475 1861.748 475 1846.748 475 1822 465 1812"></path>
    <path d="M1265.069 1977.261 1122.341 2060.142 1052.851 1990.652 958.429 1896.228 495.861 1896.228 465 1865.372 465 1711.289 490.291 1686"></path>
    <path d="M1265 1977.314 1306.312 1953.461 1333.773 1926 1504.645 2096.871"></path>
  </g>
  <!-- LIME -->
  <g class="lime">
    <path d="M751.074 1119.595 701.334 1169.334 701.334 1190.395 701.334 1206.771 814.947 1320.384 794.947 1340.384 1042.426 1587.861 1042.426 1616.857 1149.308 1723.74 934.808 1938.239 742.064 1938.24 742.064 2075.996 966.002 2075.996 966.002 2134.662 995.192 2134.662 1043.192 2182.662 1043.192 2198.662 1080.018 2235.488"></path>
  </g>
  <!-- YELLOW -->
  <g class="yellow">
    <path d="M757.244 751 757.244 1044.38 288 1044.38"></path>
    <path d="M747.656 751 747.656 1034.38 272 1034.38 272 1166.38 431.64626 1326.0271 453.33 1347.711 453.33 1556.523 463.33 1566.523 463.33 1601.88"></path>
    <path d="M686 1856.281 716.873 1855.998 753.873 1819 839.603 1819 881.635 1861.031 881.635 2417.184 956.363 2546.615"></path>
    <path d="M710.367,1855.954 L455.002,1855.954 L415,1815.954 L415,1712.458 L453.504,1673.956 L453.504,1580.145 L453.504,1570.145 C449.9464,1566.5356 446.91045,1562.3925 443.04379,1559.1033 L443.169,1549"></path>
    <path d="M265.159,1044 L262.001,1044 L262,1044 L262,1170.143 L430.13003,1338.273 L443.331,1351.474 L443.331,1474.536 L443.331,1456.286 C443.2192,1487.9903 443.10787,1517.6687 442.99595,1549.373 M476.43396,1601.5 L649.96292,1601.5 L1182.054,2133.591 L1212.667,2186.61 L1431.661,2405.607 L1431.661,2432.944 L1290.993,2573.612"></path>
    <path d="M848 1800 861.334 1800 891.079 1829.745 891.079 2365.073 1135.654 2365.073 1289.282 2518.7 1303.34 2532.761 1276.508 2559.594"></path>
    <path d="M697 1044.046 747.838 1094.883 876.498 966.22 876.498 862 1311 862 1313.426 862 1341.259 889.834 1619.832 889.834"></path>
    <path d="M482.871,1601.755 L464.33,1601.773 L464.33,1566.416 L464.33,1556.416 L464.33,1343.8692 C430.34672,1309.1751 391.82625,1271.1806 358.63271,1237.9451 L283.28729,1162.5382 L283,1056.727 L283.158,991.927 L586.558,992.227 L586.558,778.227"  ></path>
  </g>
  <!-- BLUE -->
  <g class="blue">
    <path d="M361 1722.675 361 1634 351 1624"></path>
    <path d="M1791 945.297 1852.353 1006.652 1919 940"></path>
    <path d="M812 1017.118 937.119 892 1229.545 892 1301.545 892 1328.877 919.33 1766.211 919.33 1791.545 944.668"></path>
    <path d="M1825 1263 1846.732 1263 2265.932 1682.2 2277.732 1682.2 2383.716 1576.216"></path>
    <path d="M169 1127.882 180.803 1116.078 712.656 1116.078 821.73 1007"></path>
    <path d="M2157 1815.877 2278.073 1694.806 2256.263 1673"></path>
    <path d="M43.465 272.822 14.316 301.971 14.316 373.791 148.393 507.865 148.393 668.722 158.393 678.722 158.393 1392.556 340.344 1497.378 340.344 1728.668"></path>
    <path d="M742.064 1928.24 742.064 1792.734 677.998 1728.668 360.344 1728.668 340.344 1728.668 340.344 1721.328"></path>
    <path d="M75.106 420.885 158.393 504.171 158.393 665.026 168.393 675.026 168.393 1386.668 350.344 1491.717 350.344 1648.668 350.344 1728.668"></path>
    <path d="M742 1919.232 742 1928.472 930.602 1928.472 972.843 1886.23 1091.28 1886.23 1209.53 1817.961 1490.01 1537.473 1527.863 1575.329 1763.02 1340.171 1763.02 1323.68 1888.704 1198"></path>
    <path d="M969 1889.993 982.829 1876.166 1010.51 1876.166 1088.51 1876.166 1204.434 1809.236 1490.238 1523.512 1541.99 1575.265 1716.256 1401"></path>

  </g>
  <!-- NAVY -->
  <g class="navy">
    <path d="M3 2654.4829 360.150802 2297.333 271.817802 2209"></path>
    <path d="M235 2422.226 235 2408.083 345.816 2297.265 264.553 2216"></path>
  </g>
  <!-- GRAY -->
  <g class="gray">
    <path d="M174 1377.316 637.441 1377.316 853.775 1377.316 924.091 1307 1037.424 1420.332 1100.502 1357.255 1146.367 1357.255 1412.109 1357.255 1412.109 1499.316 1625.439 1712.645 1625.439 1793.484"></path>
    <path d="M258,1190 L506.12698,1190"></path>
  </g>
  <!-- ORANGE -->
  <g class="orange">
    <path d="M587.406 1516.739 371 1516.739 371 1002.073 747.656 1002.073 812.753 1002.073 812.753 1002.073 932.753 882.071 946.898 882.071 1305.467 882.071 1332.798 909.401 1770.131 909.401 1801.324 940.597 1944.922 797"></path>
    <path d="M1397.973 2452.486 1421.609 2428.852 1421.609 2409.537 1203.218 2191.146 1172.607 2138.125 646.027 1611.546 599.607 1611.546 599.607 1565.125 599.607 1526.668 536.607 1526.668 360.951 1526.668 360.951 1106.666 179 1106.666 169 1106.666 149 1106.666 149.36 682.699 139.36 672.699 139 547.648 180.65 505.996 251.461 435.188 508.607 435.188 508.607 97 549.607 97"></path>
    <path d="M1283.513 2566.595 1354.513 2495.595 1053.442 2194.525 1053.442 2178.525 999.588 2124.666 976.252 2124.666 976.252 2066 958 2066"></path>
    <path d="M577 1517.002 609.25 1517.002 609.25 1550.334 855.75 1550.334 865.75 1550.334 1189.25 1550.334 1362.25 1377.334 1362.25 1308.334 1406.25 1264.334 1406.25 1235"></path>
    <path d="M752,1906.334 L752,1865"  ></path>
    <path d="M169.04 546.668 169 532.239 210.65 490.589 255.386 445.854 518.607 445.854 518.607 131"></path>
    <path d="M178.96 1106.664 179.32 671.024 169.32 661.024 169 547"></path>
    <path d="M900,1829.672 L900,1878.338"  ></path>
    <path d="M823.802 1789.927 865.97 1789.927 900.882 1825.646 900.882 2235 960 2235 1116.366 2505.834 1209.494 2505.834 1262.615 2558.955 1280.619 2540.948"></path>
    <path d="M371 1106.666 721 1106.666 750.518 1106.666 886.486 970.696 886.486 872 1301.324 872 1309.608 872 1337.307 899.698 1620.156 899.698"></path>
    <path d="M968.5,2066 L775,2066"  ></path>
    <path d="M784.186 2066.328 752 2066.328 752 1905"></path>
    <path d="M752.314 1865.666 752.314 1670.564 681.045 1608.182 642.487 1569.625 642.487 1553.66 642.487 1507 621 1507 587 1507 577 1517"></path>
  </g>
  <!-- PURPLE -->
  <g class="purple">
    <path d="M837.327 1080.62 810.693 1054 759.771 1054 719.993 1054 697.659 1054 697.659 1096.954 765.263 1164.558 729.771 1200.05 48 1200.051 48 1273.272"></path>
    <path d="M1523.666 568 1010.332 1081.332 837 1081.332"></path>
    <path d="M1531.271 575 1014.272 1091.261 847.533 1091.261 834 1077.727"></path>
  </g>
  <!-- RED -->
  <g class="red">
      <path d="M362 600.5 382.416 580.084 402.416 580.084 444.666 537.834 609.166 537.834 778.666 368.334 778.666 261 700.211 125.111 700.211 3"></path>
      <path d="M286.758 554 362.194 554 362.194 735.342 74 735.342 74.091 961.903 251.29 1139.546 251.2 1639.409 282.624 1693.106 563.286 1693.106 563.286 1821.508 651.435 1821.508 683.286 1876.678 966.648 1876.678 1125.265 2035.295 1125.265 2035.295 1294.025 1937.861 1317.374 1914.512"></path>
      <path d="M1512.344,2089.938 L1337.406,1915 L1317.26,1915 L1313,1919.26"  ></path>
      <path d="M110.125 102 110.125 210.749 64 256.874 64 294.417 54 304.417 54 725.412 64 735.412 64 966.084 242.202 1144.281 242.202 1614.959 242.202 1642.752 372.894 1869.119 455.339 1869.119"></path>
      <path d="M1689.16 1594 1495.502 1787.665 1443.178 1787.665 1326.427 1904.416 1311 1919.841"></path>
  </g>
  <!-- BROWN -->
  <g class="brown">
    <path d="M1925.739 947 1849.41 1023.33 1803.58 1023.33 1571.172 1255.738 1649.957 1335.488 1424.891 1560.555 869.64 1560.555 859.64 1560.555 716.168 1560.555 626.334 1560.555 556 1560.555 545 1560.555 545 1699.555 529 1715.555 529 1826.055"></path>
    <path d="M881,907 L881,965.66998"></path>
    <path d="M1933.479 954 1854.22 1033.257 1808.391 1033.257 1585.916 1255.732 1664.701 1335.482 1429.701 1570.482 856.166 1570.482 846.166 1560.482 836 1560.482"></path>
  </g>
 </g>

</svg>

</div>
</section>

<!-- <div id="toggle" onclick="toggle3D(this)"> Toggle 3D</div> -->

<script>
// Duplicate the transit lines
const container = document.getElementById('map');
const svgBack = document.getElementById('back');
const svgFront = svgBack.cloneNode(true);
svgFront.setAttribute('id', 'front');
container.appendChild(svgFront);

// Obtain all transit line paths + polylines
let paths = document.querySelectorAll('#front path, #front polyline');
paths = Array.prototype.slice.call(paths);
let style = ``;

const CAR_SIZE = 10;
paths.forEach((path, i) => {
  path.setAttribute('id', 'path-' + i);
  const length = path.getTotalLength();

  const speed = length / 100;

  style += `
    #path-${i} {
      stroke-dasharray: ${CAR_SIZE}, ${length / 1};
      stroke-dashoffset: ${length};
      animation: dash-${i} ${speed}s linear alternate infinite;
    }

    @keyframes dash-${i} {
      from {
        stroke-dashoffset: ${length};
      }
      to {
        stroke-dashoffset: 0;
      }
    }`;
});

const sheet = document.createElement('style');
sheet.innerHTML = style;
document.body.appendChild(sheet);

svgFront.classList.toggle('three-D');
  svgBack.classList.toggle('three-D');
function toggle3D(e) {
console.log("toggle")
  svgFront.classList.toggle('three-D');
  svgBack.classList.toggle('three-D');
}
</script>

</body></html>
