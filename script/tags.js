const list = [
  {
    id: 1,
    title: "Технокряк",
    category: "Веб-сайт",
    img: "img/technocrack.jpg",
    desc: `Технокряк це сучасний майданчик поширення інформації. Компанії використовують цю платформу для цифрового шпигунства та атак на захищені сервери конкурентів.`,
  },
  {
    id: 2,
    title: "Постер New Orlean vs Golden Star",
    category: "Дизайн",
    img: "img/Постер.jpg",
    desc: `Технокряк це сучасний майданчик поширення інформації. Компанії використовують цю платформу для цифрового шпигунства та атак на захищені сервери конкурентів.`,
  },
  {
    id: 3,
    title: "Ресторан Seafood",
    category: "Програма",
    img: "img/Ресторан.png",
    desc: `Технокряк це сучасний майданчик поширення інформації. Компанії використовують цю платформу для цифрового шпигунства та атак на захищені сервери конкурентів.`,
  },
  {
    id: 4,
    title: "Проект Prime",
    category: "Маркетинг",
    img: "img/Prime.png",
    desc: `Технокряк це сучасний майданчик поширення інформації. Компанії використовують цю платформу для цифрового шпигунства та атак на захищені сервери конкурентів.`,
  },
  {
    id: 5,
    title: "Проект Boxes",
    category: "Програма",
    img: "img/Boxes.png",
    desc: `Технокряк це сучасний майданчик поширення інформації. Компанії використовують цю платформу для цифрового шпигунства та атак на захищені сервери конкурентів.`,
  },
  {
    id: 6,
    title: "Inspiration has no Borders",
    category: "Веб-сайт",
    img: "img/Inspiration.png",
    desc: `Технокряк це сучасний майданчик поширення інформації. Компанії використовують цю платформу для цифрового шпигунства та атак на захищені сервери конкурентів.`,
  },
  {
    id: 7,
    title: "Видання Limited Edition",
    category: "Дизайн",
    img: "img/limited_edition.png",
    desc: `Технокряк це сучасний майданчик поширення інформації. Компанії використовують цю платформу для цифрового шпигунства та атак на захищені сервери конкурентів.`,
  },
  {
    id: 8,
    title: "Проект LAB",
    category: "Маркетинг",
    img: "img/LAB.png",
    desc: `Технокряк це сучасний майданчик поширення інформації. Компанії використовують цю платформу для цифрового шпигунства та атак на захищені сервери конкурентів.`,
  },
  {
    id: 9,
    title: "Growing Business",
    category: "Програма",
    img: "img/Growing_business.png",
    desc: `Технокряк це сучасний майданчик поширення інформації. Компанії використовують цю платформу для цифрового шпигунства та атак на захищені сервери конкурентів.`,
  },
];

const sectionCenter = document.querySelector(".projects");
const btnContainer = document.querySelector(".tags");

window.addEventListener("DOMContentLoaded", () => {
  displayListItems(list);
  displayListButtons();
});

const displayListItems = (menuItems) => {
  let displayList = menuItems.map((item) => {
    return `
    <li class="projects__item">
    <a href="#" class="project">
      <div class="project__preview">
        <img src="${item.img}" alt="${item.title}" class="project__img" />
        <p class="project__description">${item.desc}</p>
      </div>
      <div class="project__info">
        <h3 class="project__title">${item.title}</h3>
        <p class="project__tag">${item.category}</p>
      </div>
    </a>
  </li>`;
  });
  displayList = displayList.join("");

  sectionCenter.innerHTML = displayList;
};

const displayListButtons = () => {
  const categories = list.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["Усе"]
  );
  const categoryBtns = categories
    .map( (category) => {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })

    .join("");
  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  filterBtns[0].classList.add("tag__active");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.id;
      const listCategory = list.filter((listItem) => {
        if (listItem.category === category) {
          return listItem;
        }
      });
      filterBtns.forEach((btn) => {
        btn.classList.remove("tag__active");
      });
      btn.classList.add("tag__active");
      if (category === "Усе") {
        displayListItems(list);
      } else {
        displayListItems(listCategory);
      }
    });
  });
};
