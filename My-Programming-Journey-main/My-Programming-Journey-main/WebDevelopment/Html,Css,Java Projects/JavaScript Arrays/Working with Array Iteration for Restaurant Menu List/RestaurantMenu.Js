const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];


function Fbreak_fast_menu (){
 
 
 const breakfastMenuItemsHTML = breakfastMenu.map((item,index) => `<p>Item ${index +1}: ${item}</p>`).join('');
 document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;
} 

function Fmain_course(){

    MainCourseItem = "";
    mainCourseMenu.forEach((item,index) => { MainCourseItem +=
        `<p> Item ${index + 1} : ${item}</p>`;
        
    });
    document.getElementById('maincourseMenuItems').innerHTML = MainCourseItem ;

}

function Fdessert_menu(){
    let dessertItem = '';
  for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;} 
    document.getElementById('dessertMenuItems').innerHTML = dessertItem;
}

function Main(){
    Fbreak_fast_menu();
    Fmain_course();
    Fdessert_menu();
}

Main();