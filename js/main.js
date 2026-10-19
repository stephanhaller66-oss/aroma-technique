// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function () {
  const burger = document.getElementById('burger');
  const navLinks = document.getElementById('navLinks');

  if (burger && navLinks) {
    burger.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });
  }

  // FAQ accordion
  document.querySelectorAll('.faq-q').forEach(function (question) {
    question.addEventListener('click', function () {
      const item = this.parentElement;
      const wasOpen = item.classList.contains('open');

      // Close all
      document.querySelectorAll('.faq-item').forEach(function (el) {
        el.classList.remove('open');
      });

      // Open clicked if it was closed
      if (!wasOpen) {
        item.classList.add('open');
      }
    });
  });
});
