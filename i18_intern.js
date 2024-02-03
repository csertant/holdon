"use-strict";

// This file configures the i18next library
// Page text is stored in /locales/{{lang}}/common.json
// Please use top-level reference for page names
i18next
  .use(i18nextXHRBackend)
  .use(i18nextBrowserLanguageDetector)
  .init({
    fallbackLng: 'hu',
    debug: true,
    backend: {
      loadPath: 'locales/{{lng}}/common.json',
      crossDomain: true
    }
  }, function (err, t) {
    // init set content
    updateContent();
  }
  );

  function updateContent() {
      updateElements([
        ['page-title', 'head.page-title'],
      ])
      updateElements([
        ['nav-link-project', 'navigation.nav-link-project'],
        ['nav-link-about', 'navigation.nav-link-about'],
        ['nav-link-donate', 'navigation.nav-link-donate'],
        ['nav-link-insta', 'navigation.nav-link-insta'],
        ['nav-link-press', 'navigation.nav-link-press'],
      ])
      updateElements([
        ['footer-link-project', 'footer.footer-link-project'],
        ['footer-link-about', 'footer.footer-link-about'],
        ['footer-link-donate', 'footer.footer-link-donate'],
        ['footer-link-insta', 'footer.footer-link-insta'],
        ['footer-link-press', 'footer.footer-link-press'],
        ['credits', 'footer.credits'],
        ['legal', 'footer.legal'],
      ])
      updateElements([
        ['project-title', 'content.project.project-title'],
        ['project-p1', 'content.project.project-p1'],
        ['project-p2', 'content.project.project-p2'],
        ['project-p3', 'content.project.project-p3'],
        ['about-title', 'content.about.about-title'],
        ['about-p1', 'content.about.about-p1'],
        ['about-p2', 'content.about.about-p2'],
        ['donate-title', 'content.donate.donate-title'],
        ['donate-p1', 'content.donate.donate-p1'],
        ['donate-p2', 'content.donate.donate-p2'],
        ['donate-p3', 'content.donate.donate-p3'],
        ['press-title', 'content.press.press-title'],
      ])
  }

  function updateElements(updateList) {
    updateList.forEach(([id, newText]) => {
      updateElementById(id, i18next.t(newText));
    });
  }
  
  function updateElementById(id, newText) {
    if (document.getElementById(id) !== null) {
      document.getElementById(id).innerHTML = newText;
    } else {
      // This is only for debugging
      console.log('Could not find element with id: ' + id);
    }
  }
  
  i18next.on('languageChanged', () => {
    updateContent();
  });