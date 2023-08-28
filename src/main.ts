import 'bulma';

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector<HTMLAnchorElement>('a.navbar-burger');
    const navbar = document.querySelector<HTMLDivElement>('#navbar');
    btn?.addEventListener('click', () => {
        btn.classList.toggle('is-active');
        navbar?.classList.toggle('is-active');
    })
});