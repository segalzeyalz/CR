export function updateTimer() {
  const countDownDate = new Date('march 31, 2020 23:59:59').getTime();

  let x = setInterval(function() {
    let now = new Date().getTime();

    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('timer').innerHTML =
      days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';

    if (distance < 0) {
      clearInterval(x);
      document.getElementById('timer').innerHTML = 'EXPIRED';
    }
  }, 1000);
}
