/**************************************************
Table of contents:
Opens when user clicks on "Works" button
Contains functions that handle openNav and closeNav
Insert this HTML into the table-of-contents id on each page
**************************************************/

// HTML to insert into table-of-contents id
let tableOfContentsHTML = `<h1>Works</h1>
<section class="all-groups">
  <section class="group" id="group2">
    <h2>Game & Interactive Design</h2>
    <a href="hungry-fishies.html">
      <p>Hungry Fishies</p>
    </a>
    <a href="stayhere.html">
      <p>Stayhere</p>
    </a>
    <a href="snails-journey.html">
      <p>A Snail's Journey</p>
    </a>
    <a href="hopping-dustballs.html">
      <p>Hopping Dustballs</p>
    </a>
  </section>

  <section class="group" id="group3">
    <h2>Graphic Design</h2>
    <a href="best-practices.html">
      <p>Best Practices for Reopening During COVID-19</p>
    </a>
    <a href="world-of-type.html">
      <p>The World of Type</p>
    </a>
    <a href="coccco-bag.html">
      <p>The Coccco Bag</p>
    </a>
    <a href="milkweed-delights.html">
      <p>Milkweed Delights</p>
    </a>
  </section>
</section>`;

// Inserting into table-of-contents id
$(`#table-of-contents`).html(tableOfContentsHTML);

// Open navigation when someone clicks on the span element
function openNav() {
  $(`#table-of-contents`).css({
    width: `100%`,
    padding: `100px`,
  });

  // $(`#table-of-contents`).removeClass("hide-table-of-contents");
  // $(`#table-of-contents`).addClass("show-table-of-contents");

  $(`#close-button`).css({
    display: `flex`,
  });
}

// Close navigation when someone clicks on the "x" symbol inside the overlay
function closeNav() {
  $(`#table-of-contents`).css({
    width: `0%`,
    padding: `0%`,
  });

  // $(`#table-of-contents`).removeClass("show-table-of-contents");
  // $(`#table-of-contents`).addClass("hide-table-of-contents");

  $(`#close-button`).css({
    display: `none`,
  });
}

// Previous table of contents
// let tableOfContents = `<h1>Works</h1>
// <section class="all-groups">
//   <section class="group" id="group1">
//     <h2>Game/Interactive Design</h2>
//     <a href="hungry-fishies.html">
//       <p>Hungry Fishies</p>
//     </a>
//     <a href="root-fruit.html">
//       <p>Root Fruit</p>
//     </a>
//     <a href="stayhere.html">
//       <p>Stayhere</p>
//     </a>
//     <a href="snails-journey.html">
//       <p>A Snail's Journey</p>
//     </a>
//     <a href="hopping-dustballs.html">
//       <p>Hopping Dustballs</p>
//     </a>
//   </section>
//
//   <section class="group" id="group2">
//     <h2>Digital media</h2>
//     <a href="portfolio-website.html">
//       <p>Portfolio Website</p>
//     </a>
//     <a href="rs-infographics.html">
//       <p>Reserve & Shop Infographics</p>
//     </a>
//   </section>
//
//   <section class="group" id="group3">
//     <h2>Visual communication</h2>
//     <a href="best-practices.html">
//       <p>Best Practices for Reopening During COVID-19</p>
//     </a>
//     <a href="world-of-type.html">
//       <p>The World of Type</p>
//     </a>
//     <a href="coccco-bag.html">
//       <p>The Coccco Bag</p>
//     </a>
//     <a href="milkweed-delights.html">
//       <p>Milkweed Delights</p>
//     </a>
//   </section>
//
//   <section class="group" id="group4">
//     <h2>Sculptural and 3D Environments</h2>
//     <a href="dragon-sculpture.html">
//       <p>Dragon Sculpture in a Fantasy Gallery</p>
//     </a>
//     <a href="butterfly-automata.html">
//       <p>Butterfly Automata</p>
//     </a>
//   </section>
// </section>`;
