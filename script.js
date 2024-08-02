// document.addEventListener('DOMContentLoaded', function () {
//     // Sol ve sağ butonları seçin
//     const leftbtn = document.querySelector('.l-btn');  // Bu seçim doğru
//     const rightbtn = document.querySelector('.r-btn'); // Bu seçim doğru

//     // Butonların her ikisi de varsa
//     if (rightbtn) {
//         rightbtn.addEventListener('click', function (event) {
//             console.log('Right button clicked');
//             const content = document.querySelector('.product-slide');
//             if (content) {
//                 content.scrollLeft += 1100;
//             }
//             event.preventDefault();
//         });
//     }

//     if (leftbtn) {
//         leftbtn.addEventListener('click', function (event) {
//             console.log('Left button clicked');
//             const content = document.querySelector('.product-slide');
//             if (content) {
//                 content.scrollLeft -= 1100;
//             }
//             event.preventDefault();
//         });
//     }
// });

/*

document.addEventListener('DOMContentLoaded', function () {
    // Handle left and right button clicks for sliders
    const buttons = [
        { left: '.l-btn', right: '.r-btn', content: '.product-slide' },
        { left: '.btn-1b', right: '.btn-1a', content: '.product-slide1' }
    ];

    buttons.forEach(({ left, right, content }) => {
        const leftbtn = document.querySelector(left);
        const rightbtn = document.querySelector(right);
        const contentElement = document.querySelector(content);

        if (leftbtn && rightbtn && contentElement) {
            rightbtn.addEventListener('click', function (event) {
                console.log('Right button clicked');
                contentElement.scrollLeft += 1100;
                event.preventDefault();
            });

            leftbtn.addEventListener('click', function (event) {
                console.log('Left button clicked');
                contentElement.scrollLeft -= 1100;
                event.preventDefault();
            });
        }
    });

    // Handle back to top button
    const backtop = document.querySelector('.backtop');
    if (backtop) {
        backtop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Handle sidebar toggle
    const sidebar = document.querySelector('.sidebar');
    const close = document.querySelector('.fa-xmark');
    const black = document.querySelector('.black');
    const sidebtn = document.querySelector('.second-1');

    if (sidebtn && close && black) {
        sidebtn.addEventListener('click', () => {
            sidebar.classList.add('active');
            close.classList.add('active');
            black.classList.add('active');
            document.body.classList.add("stop-scroll");
        });

        close.addEventListener('click', () => {
            sidebar.classList.remove('active');
            close.classList.remove('active');
            black.classList.remove('active');
            document.body.classList.remove("stop-scroll");
        });
    }

    // Handle sign-in toggle
    const sign = document.querySelector('.ac');
    const tri = document.querySelector('.triangle');
    const signin = document.querySelector('.hdn-sign');

    if (sign && tri && signin) {
        sign.addEventListener('click', () => {
            signin.classList.toggle("active");
            tri.classList.toggle("active");
            black.classList.toggle("active");
            document.body.classList.toggle("stop-scroll");
        });
    }
});

*/

document.addEventListener('DOMContentLoaded', function () {
    const leftbtn = document.querySelector(".l-btn");
    const rightbtn = document.querySelector(".r-btn");

    rightbtn.addEventListener('click', function (event) {
        console.log('Right button clicked');
        const content = document.querySelector('.product-slide');
        content.scrollLeft += 1100;
        event.preventDefault();
    });

    leftbtn.addEventListener('click', function (event) {
        console.log('Left button clicked');
        const content = document.querySelector('.product-slide');
        content.scrollLeft -= 1100;
        event.preventDefault();
    });


    const leftbtn1 = document.querySelector(".btn-1b");
    const rightbtn1 = document.querySelector(".btn-1a");

    rightbtn1.addEventListener('click', function (event) {
        console.log('Right button clicked');
        const content = document.querySelector('.product-slide1');
        content.scrollLeft += 1100;
        event.preventDefault();
    });

    leftbtn1.addEventListener('click', function (event) {
        console.log('Left button clicked');
        const content = document.querySelector('.product-slide1');
        content.scrollLeft -= 1100;
        event.preventDefault();
    });

});


document.addEventListener('DOMContentLoaded', function () {
    const backtop = document.querySelector('.backtop');
    backtop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    })

    const sidebar = document.querySelector('.sidebar');
    const close = document.querySelector('.fa-xmark');
    const black = document.querySelector('.black');
    const sidebtn = document.querySelector('.second-1');

    sidebtn.addEventListener('click', () => {
        sidebar.classList.add('active');
        close.classList.add('active');
        Black.classList.add('active');
        document.body.classList.add("stop-scroll");
    })

    close.addEventListener('click', () => {
        sidebar.classList.remove('active');
        close.classList.remove('active');
        Black.classList.remove('active');
        document.body.classList.remove("stop-scroll");

    })

});

document.addEventListener('DOMContentLoaded', function () {
    const sign = document.querySelector('.ac');
    const tri = document.querySelector('.triangle');
    const signin = document.querySelector('.hdn-sign');


    sign.addEventListener('click', () => {
        signin.classList.toggle("active");
        tri.classList.toggle("active");
        Black.classList.toggle("active");
        document.body.classList.toggle("stop-scroll");

    })
});



