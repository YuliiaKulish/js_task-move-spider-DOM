'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (!wall || !spider) {
    return;
  }

  if (!wall.contains(e.target)) {
    return;
  }

  const rect = wall.getBoundingClientRect();
  const spiderSize = spider.offsetWidth;

  let x = e.clientX - rect.left - wall.clientLeft - spiderSize / 2;
  let y = e.clientY - rect.top - wall.clientTop - spiderSize / 2;

  x = Math.max(0, Math.min(x, wall.clientWidth - spiderSize));
  y = Math.max(0, Math.min(y, wall.clientHeight - spiderSize));

  spider.style.left = x + 'px';
  spider.style.top = y + 'px';
});
