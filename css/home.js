window.addEventListener('scroll', () => {
    const footerHeight = document.querySelector('footer').offsetHeight;
    const scrollPosition = window.innerHeight + window.scrollY;
    const pageHeight = document.documentElement.scrollHeight;
  
    if (scrollPosition >= pageHeight - footerHeight) {
      document.body.classList.add('reached-bottom');
    } else {
      document.body.classList.remove('reached-bottom');
    }
  });