let link = "";

document.getElementById("setLink").addEventListener("click", function () {
  link = prompt("Enter a link to go:");
});

document.getElementById("goLink").addEventListener("click", function () {
  if (link) {
    window.location.href = link;
  } else {
    alert("Enter the message now!");
  }
});

// Ссылка для перехода (сборник по псевдоелементам) : https://itwiki.dev/ru/front-end/css-reference/type/pseudoelement
