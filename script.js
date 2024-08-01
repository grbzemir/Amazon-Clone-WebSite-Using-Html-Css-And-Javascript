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