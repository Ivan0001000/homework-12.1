let link = "";

document.getElementById("setLink").addEventListener("click", function () {
  link = prompt("Enter a link to go:");

  if (link && !link.startsWith("http://") && !link.startsWith("https://")) {
    link = "https://" + link;
  }
});

document.getElementById("goLink").addEventListener("click", function () {
  if (link) {
    window.location.href = link;
  } else {
    alert("Enter the message now!");
  }
});

// Ссылка для перехода (сборник по псевдоелементам) : https://itwiki.dev/ru/front-end/css-reference/type/pseudoelement
