// Shared site header. Include synchronously right after <body> on every page:
//   <script src="site.js"></script>
// Injects the masthead and marks the current page in the nav.
(() => {
  const PAGES = [
    ['index.html', 'Overview'],
    ['buildings.html', 'Buildings'],
  ];
  const here = location.pathname.split('/').pop() || 'index.html';
  document.body.insertAdjacentHTML('afterbegin', `
<div class="masthead">
  <div class="mastin">
    <a class="brand" href="index.html">
      <span class="mark" aria-hidden="true"><i class="kl"></i><i class="sel"></i></span>
      <span class="bt">KL &amp; Selangor <b>Rents</b></span>
    </a>
    <nav class="topnav" aria-label="site">
      ${PAGES.map(([href, label]) =>
        `<a href="${href}"${href === here ? ' aria-current="page"' : ''}>${label}</a>`).join('\n      ')}
    </nav>
  </div>
</div>`);
})();
