// ==========================
// SCROLL REVEAL
// ==========================

const reveals =
  document.querySelectorAll('.reveal');

const observer =
  new IntersectionObserver(

    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add('visible');

        }

      });

    },

    {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    }

  );

reveals.forEach(element => {

  observer.observe(element);

});

// ==========================
// FORM SUBMIT
// ==========================

function handleSubmit(event) {

  event.preventDefault();

  const button =
    event.target.querySelector(
      'button[type="submit"]'
    );

  const originalText =
    button.textContent;

  button.textContent =
    '✓ Message sent!';

  button.style.background =
    '#61ffd4';

  button.style.color =
    '#0a0a0e';

  setTimeout(() => {

    button.textContent =
      originalText;

    button.style.background = '';

    button.style.color = '';

  }, 3000);

}

// ==========================
// SMOOTH SCROLL
// ==========================

document
  .querySelectorAll('a[href^="#"]')
  .forEach(link => {

    link.addEventListener('click', event => {

      const target =
        document.querySelector(
          link.getAttribute('href')
        );

      if (target) {

        event.preventDefault();

        target.scrollIntoView({
          behavior: 'smooth'
        });

      }

    });

  });