import fruit from './menu-pic.jpeg';

const navigation = () => {
    const navbar = document.createElement('nav');
    navbar.setAttribute("id", "navbar");

    const name = document.createElement('div');
    name.setAttribute("id", "name");
    name.innerHTML = "Devil-Fruit-Roger";
    navbar.appendChild(name);

    const tabs = document.createElement('div');
    tabs.setAttribute("id", "tabs");
    navbar.appendChild(tabs);

    const home = document.createElement('div');
    home.setAttribute("id", "home");
    home.setAttribute("data-tab-target","#home_tab")
    home.innerHTML = "Home";
    home.classList.add("tab");
    home.classList.add("active");
    tabs.appendChild(home);

    const menu = document.createElement('div');
    menu.setAttribute("id", "menu");
    menu.setAttribute("data-tab-target","#menu_tab");
    menu.innerHTML = "Menu";
    menu.classList.add("tab");
    tabs.appendChild(menu);

    const about = document.createElement('div');
    about.setAttribute("id", "about");
    about.setAttribute("data-tab-target","#about_tab");
    about.innerHTML = "About";
    about.classList.add("tab");
    tabs.appendChild(about);

    return navbar;
}

const home_page = () => {
    const main = document.createElement("main");
    main.setAttribute("id","home_page");
    main.classList.add("tab-content");


    const home_tab = document.createElement("div");
    home_tab.setAttribute("id","home_tab");
    home_tab.setAttribute("data-tab-content","data-tab-content");
    home_tab.classList.add("active");

    const home_container = document.createElement("div");
    home_container.setAttribute("id","home_container");
    home_tab.appendChild(home_container);

    const first = document.createElement("div");
    first.setAttribute("id","first");
    first.innerHTML = "Hop aboard and enjoy the rarest and most powerful devil fruits";
    home_container.appendChild(first);

    const second = document.createElement("div");
    second.setAttribute("id","second");
    second.innerHTML = "So bitter you'll spit it out immediately"
    home_container.appendChild(second);

    const order = document.createElement("div");
    order.setAttribute("id","order");
    const btn = document.createElement("button");
    btn.innerHTML = "Order Now";
    order.appendChild(btn);
    home_container.appendChild(order);
    main.appendChild(home_tab);

    const menu_tab = document.createElement("div");
    menu_tab.setAttribute("id","menu_tab");
    menu_tab.setAttribute("data-tab-content","data-tab-content");
    main.appendChild(menu_tab);

    const menu_content = document.createElement('div');
    menu_content.setAttribute("id","menu_content");
    menu_tab.appendChild(menu_content);

    const menu_pic = new Image();
    menu_pic.src = fruit;
    menu_content.appendChild(menu_pic);

    const about_tab = document.createElement("div");
    about_tab.setAttribute("id","about_tab");
    about_tab.setAttribute("data-tab-content","data-tab-content");
    main.appendChild(about_tab);

    const about_container = document.createElement("div");
    about_container.setAttribute("id","about_container");
    about_tab.appendChild(about_container);

    const question = document.createElement("div");
    question.setAttribute("id","question");
    question.innerHTML = "What are devil fruits?"
    about_container.appendChild(question);

    const answer = document.createElement("div");
    answer.setAttribute("id","answer");
    answer.innerHTML = "Devil Fruits are mysterious, distinctive fruits scattered throughout the world, known for permanently granting their eaters superhuman powers"
    about_container.appendChild(answer);

    return main;
}

const build_tabs = () => {
    const tabs = document.querySelectorAll('[data-tab-target');
    const tabContents = document.querySelectorAll('[data-tab-content]');

    tabs.forEach(tab => { 
        tab.addEventListener('click', () => {
            const target = document.querySelector(tab.dataset.tabTarget);
            tabContents.forEach(tabContent => {
                tabContent.classList.remove('active');
            });
            tabs.forEach(tab => {
                tab.classList.remove('active');
            });
            tab.classList.add('active');
            target.classList.add('active');
        });

    });
};

export {navigation, home_page, build_tabs};