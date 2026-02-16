
//SLIDERS
document.querySelectorAll('.post-slider').forEach(slider => {

    const slides = slider.querySelector('.slides');
    const images = slider.querySelectorAll('img');
    const next = slider.querySelector('.next');
    const prev = slider.querySelector('.prev');

    let index = 0;

    next.onclick = () => {
        if (index < images.length - 1) index++;
        slides.style.transform = `translateX(-${index * 100}%)`;
    };

    prev.onclick = () => {
        if (index > 0) index--;
        slides.style.transform = `translateX(-${index * 100}%)`;
    };

});

// ================= SIDEBAR =================

// get all sidebar menu items
const menuItems = document.querySelectorAll('.menu-item');

// popup element
const notificationsPopup = document.querySelector('.notifications-popup');

// remove active class from all items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    });
};

// click each menu item
menuItems.forEach(item => {

    item.addEventListener('click', (e) => {
        e.preventDefault();

        // highlight clicked item
        changeActiveItem();
        item.classList.add('active');

        // notifications logic
        if (item.id === 'notifications') {

            notificationsPopup.style.display = 'block';

            // hide notification count
            const count = document.querySelector('#notifications .notification-count');
            if (count) count.style.display = 'none';

        } else {
            notificationsPopup.style.display = 'none';
        }
    });

});


// close popup when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('#notifications')) {
        notificationsPopup.style.display = 'none';
    }
});

// ================= MESSAGES =================

// sidebar messages button
const messageMenu = document.querySelector('#messages-notifications');

// messages panel
const messages = document.querySelector('.messages');

// message search input
const messageSearch = document.querySelector('#message-search');


// CLICKING MESSAGES IN SIDEBAR
messageMenu.addEventListener('click', () => {

    // highlight message panel
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';

    // hide notification badge
    const msgCount = messageMenu.querySelector('.notification-count');
    if (msgCount) msgCount.style.display = 'none';

    // remove highlight after 2 seconds
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
});


// SEARCH MESSAGES
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    const chats = document.querySelectorAll('.message');

    chats.forEach(chat => {
        const name = chat.querySelector('h5').textContent.toLowerCase();

        if (name.includes(val)) {
            chat.style.display = 'flex';
        } else {
            chat.style.display = 'none';
        }
    });
};

// search while typing
messageSearch.addEventListener('keyup', searchMessage);


// ================= OPEN / CLOSE THEME MODAL =================

const themeMenu = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');

// open theme popup
themeMenu.addEventListener('click', () => {
    themeModal.style.display = 'grid';
});

// close when clicking outside
themeModal.addEventListener('click', (e) => {
    if (e.target.classList.contains('customize-theme')) {
        themeModal.style.display = 'none';
    }
});

// ================= THEME CUSTOMIZATION =================

// ----- FONT SIZE -----
const fontSizes = document.querySelectorAll('.choose-size span');

fontSizes.forEach(size => {
    size.addEventListener('click', () => {

        // remove active from all
        fontSizes.forEach(s => s.classList.remove('active'));
        size.classList.add('active');

        // change font size
        if(size.classList.contains('font-size-1')){
            document.documentElement.style.fontSize = "12px";
        } else if(size.classList.contains('font-size-2')){
            document.documentElement.style.fontSize = "14px";
        } else if(size.classList.contains('font-size-3')){
            document.documentElement.style.fontSize = "16px";
        } else if(size.classList.contains('font-size-4')){
            document.documentElement.style.fontSize = "18px";
        } else if(size.classList.contains('font-size-5')){
            document.documentElement.style.fontSize = "20px";
        }
    });
});


// ----- PRIMARY COLOR -----
const colorPalette = document.querySelectorAll('.choose-color span');

colorPalette.forEach(color => {
    color.addEventListener('click', () => {

        colorPalette.forEach(c => c.classList.remove('active'));
        color.classList.add('active');

        let primaryHue;

        if(color.classList.contains('color-1')) primaryHue = 252;
        if(color.classList.contains('color-2')) primaryHue = 52;
        if(color.classList.contains('color-3')) primaryHue = 352;
        if(color.classList.contains('color-4')) primaryHue = 152;
        if(color.classList.contains('color-5')) primaryHue = 202;

        document.documentElement.style.setProperty(
            '--color-primary',
            `hsl(${primaryHue}, 75%, 60%)`
        );
    });
});


const bg1 = document.querySelector('.bg-1'); // light
const bg2 = document.querySelector('.bg-2'); // dim
const bg3 = document.querySelector('.bg-3'); // dark

const changeBg = () => {
    document.querySelectorAll('.choose-bg > div')
        .forEach(bg => bg.classList.remove('active'));
};

// LIGHT
bg1.addEventListener('click', () => {
    changeBg();
    bg1.classList.add('active');

    document.documentElement.style.setProperty('--color-light', 'hsl(252,30%,95%)');
    document.documentElement.style.setProperty('--color-white', 'hsl(252,30%,100%)');
    document.documentElement.style.setProperty('--color-dark', 'hsl(252,30%,17%)');
    document.documentElement.style.setProperty('--color-black', 'hsl(252,30%,10%)');
});

// DIM
bg2.addEventListener('click', () => {
    changeBg();
    bg2.classList.add('active');

    document.documentElement.style.setProperty('--color-light', 'hsl(252,30%,20%)');
    document.documentElement.style.setProperty('--color-white', 'hsl(252,30%,30%)');
    document.documentElement.style.setProperty('--color-dark', 'hsl(252,30%,95%)');
    document.documentElement.style.setProperty('--color-black', 'hsl(252,30%,100%)');
});

// DARK
bg3.addEventListener('click', () => {
    changeBg();
    bg3.classList.add('active');

    document.documentElement.style.setProperty('--color-light', 'hsl(252,30%,10%)');
    document.documentElement.style.setProperty('--color-white', 'hsl(252,30%,15%)');
    document.documentElement.style.setProperty('--color-dark', 'hsl(252,30%,95%)');
    document.documentElement.style.setProperty('--color-black', 'hsl(252,30%,100%)');
});
