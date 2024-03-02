document.querySelector('.button').addEventListener('mouseenter', function() {
    this.querySelector('.fa-envelope-open').style.display = 'none';
    this.querySelector('.fa-envelope').style.display = 'inline-block';
});

document.querySelector('.button').addEventListener('mouseleave', function() {
    this.querySelector('.fa-envelope-open').style.display = 'inline-block';
    this.querySelector('.fa-envelope').style.display = 'none';
});
document.getElementById('sendButton').addEventListener('click', function() {
    this.classList.add('sent');
    setTimeout(() => {
        this.querySelector('.text').style.display = 'none';
        this.querySelector('.text.sent-text').style.display = 'block';
    }, 300);
});
