"use strict";

let articleData = [
  {
    id: 1,
    title: "10 Easy Steps to Reduce Your Carbon Footprint Today🌲",
    content: `
As our understanding of climate change grows, so does the urgency to reduce our carbon footprint. The good news is that making a positive impact doesn't require drastic changes. Here are ten simple steps you can take today to reduce your carbon footprint and contribute to a healthier planet.

Switching to energy-efficient light bulbs is a straightforward and effective way to start. LED and CFL bulbs use significantly less energy and have a longer lifespan compared to traditional incandescent bulbs. This not only reduces your electricity bill but also lowers the amount of carbon dioxide emissions from power plants.

Another simple habit to adopt is unplugging unused electronics. Many devices continue to consume energy even when they are turned off but remain plugged in. By unplugging them, you can save a considerable amount of energy over time, contributing to a reduction in overall energy consumption and carbon emissions.

Opting for public transportation, biking, or walking instead of driving a car can make a significant difference. These alternatives reduce the number of vehicles on the road, which in turn lowers greenhouse gas emissions and decreases traffic congestion. If these options are not feasible, carpooling with friends or colleagues can also help reduce your carbon footprint.

Practicing the three R's – reduce, reuse, and recycle – is another powerful way to minimize your environmental impact. By reducing waste, reusing items whenever possible, and recycling materials, you can help decrease the volume of trash that ends up in landfills, thereby reducing methane emissions and conserving natural resources.

Conserving water is crucial, and it can be achieved through simple actions like taking shorter showers, fixing leaks, and using water-efficient appliances. These measures not only save water but also reduce the energy required to heat and pump it, leading to a lower carbon footprint.

Incorporating more plant-based meals into your diet can significantly impact your carbon footprint. Animal agriculture is a major contributor to greenhouse gas emissions, and by choosing plant-based foods, you can help mitigate this effect. Even small changes, such as participating in "Meatless Mondays," can make a difference.

Supporting renewable energy is another effective strategy. If your utility provider offers a green energy plan, consider switching to it. Alternatively, installing solar panels on your home can reduce your reliance on fossil fuels and lower your carbon emissions.

Sustainable shopping practices also play a vital role in reducing your carbon footprint. By buying locally-produced and sustainably-sourced products, you support local economies and reduce the carbon emissions associated with long-distance transportation of goods. Additionally, choosing products with minimal packaging can help reduce waste.

Using a programmable thermostat is a smart way to optimize your home’s energy use. These thermostats allow you to set heating and cooling schedules that align with your daily routine, ensuring that energy is not wasted when you are not at home. This efficient temperature control can lead to significant energy savings and reduced carbon emissions.

Lastly, spreading awareness about the importance of reducing carbon footprints can amplify your impact. Educating others and encouraging sustainable practices within your community fosters a collective effort towards a greener future. Sharing tips and success stories can inspire others to take action and adopt environmentally friendly habits.

In conclusion, reducing your carbon footprint is not only beneficial for the planet but can also lead to cost savings and a healthier lifestyle. Start with these simple steps today and contribute to a more sustainable future for everyone. Small actions, when multiplied by millions, can transform the world.
`,

    date: "July 12, 2024",
    author: "John Antwerp",
    img: "../images/articles/article1.jpg",
  },
];

let storedData = localStorage.getItem("articles");
if (storedData !== null) {
  articleData = JSON.parse(storedData);
}
// All the inputs required
const addBtn = document.querySelector(".aside__link");
const add = document.querySelector(".add");
const title = document.querySelector("#title");
const submit = document.querySelector(".submit");
const content = document.querySelector("#article");
const img = document.querySelector("#image");
const author = document.querySelector("#author");
const articleContainer = document.querySelector(".article-grid");
const articlePage = document.querySelector(".article-page");

// Read the form filled out by the user and add it to the array
let added = false;
submit?.addEventListener("click", function (e) {
  const today = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = today.toLocaleDateString("en-US", options);
  added = true;
  e.preventDefault();
  const newArticle = {
    id: articleData.length + 1,
    title: title.value,
    content: content.value,
    date: formattedDate,
    author: author.value,
    img: img.value,
  };
  articleData = [...articleData, newArticle];
  localStorage.setItem("articles", JSON.stringify(articleData));
});

if (added) {
  let storedData = localStorage.getItem("articles");
  articleData = JSON.parse(storedData);
  console.log(articleData);
  added = false;
}

// addBtn?.addEventListener('click', function(){
//   add.classList.remove('hidden')
// })

// Display the correct number of articles in the page

articleData.forEach((article) => {
  const articleElement = document.createElement("article");
  articleElement.className = "article";
  articleElement.setAttribute("data-url", "./article1.html");
  articleElement.setAttribute("num", article.id);

  // Set the inner HTML of the article
  articleElement.innerHTML = `
  <div class="img-box">
  <img
  src='${article.img}'
  alt='${article.title}'
  class="article__img"
  />
  </div>
  <div class="text-box">
  <p class="article__date">${article.date}</p>
  <h3 class="article__heading">${article.title}</h3>
  <p class="article__author">-${article.author}</p>
  <p class="article__preview">${article.content.slice(0, 289)}...</p>
    </div>
    `;

  // Append the article to the content div
  articleContainer?.appendChild(articleElement);
});

// Directing user to the original article instead of a 'preview' version
const article = document.querySelectorAll(".article");

let articleNum;
article?.forEach((el) => {
  el.addEventListener("click", function () {
    // Direct the user to the article page
    document.location.href = el.getAttribute("data-url");

    // Article num
    articleNum = el.getAttribute("num");
    localStorage.setItem("articleNum", articleNum);
  });

  if (articlePage) {
    console.log(articleNum);
    const article = articleData[articleNum - 1];
    console.log(article);
    articlePage.innerHTML = `<div class="article-page__head">
        <h1 class="article-page__heading">
          ${article.title}
        </h1>
        <div class="article-page__details">
          <div>
            <span class="article-page__author">-${article.author}</span>
            <span class="article-page__date">${article.date}</span>
          </div>
          <div class="article-page__share">
            <i class="article-page__icon"
              ><?xml version="1.0" ?><!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>
              <svg
                height="100%"
                style="
                  fill-rule: evenodd;
                  clip-rule: evenodd;
                  stroke-linejoin: round;
                  stroke-miterlimit: 2;
                "
                version="1.1"
                viewBox="0 0 512 512"
                width="100%"
                xml:space="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:serif="http://www.serif.com/"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <path
                  d="M374.244,285.825l14.105,-91.961l-88.233,0l0,-59.677c0,-25.159 12.325,-49.682 51.845,-49.682l40.116,0l0,-78.291c0,0 -36.407,-6.214 -71.213,-6.214c-72.67,0 -120.165,44.042 -120.165,123.775l0,70.089l-80.777,0l0,91.961l80.777,0l0,222.31c16.197,2.541 32.798,3.865 49.709,3.865c16.911,0 33.511,-1.324 49.708,-3.865l0,-222.31l74.128,0Z"
                  style="fill-rule: nonzero"
                /></svg
            ></i>
            <i class="article-page__icon"
              ><?xml version="1.0" ?><!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>
              <svg
                height="100%"
                style="
                  fill-rule: evenodd;
                  clip-rule: evenodd;
                  stroke-linejoin: round;
                  stroke-miterlimit: 2;
                "
                version="1.1"
                viewBox="0 0 512 512"
                width="100%"
                xml:space="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:serif="http://www.serif.com/"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <path
                  d="M161.014,464.013c193.208,0 298.885,-160.071 298.885,-298.885c0,-4.546 0,-9.072 -0.307,-13.578c20.558,-14.871 38.305,-33.282 52.408,-54.374c-19.171,8.495 -39.51,14.065 -60.334,16.527c21.924,-13.124 38.343,-33.782 46.182,-58.102c-20.619,12.235 -43.18,20.859 -66.703,25.498c-19.862,-21.121 -47.602,-33.112 -76.593,-33.112c-57.682,0 -105.145,47.464 -105.145,105.144c0,8.002 0.914,15.979 2.722,23.773c-84.418,-4.231 -163.18,-44.161 -216.494,-109.752c-27.724,47.726 -13.379,109.576 32.522,140.226c-16.715,-0.495 -33.071,-5.005 -47.677,-13.148l0,1.331c0.014,49.814 35.447,93.111 84.275,102.974c-15.464,4.217 -31.693,4.833 -47.431,1.802c13.727,42.685 53.311,72.108 98.14,72.95c-37.19,29.227 -83.157,45.103 -130.458,45.056c-8.358,-0.016 -16.708,-0.522 -25.006,-1.516c48.034,30.825 103.94,47.18 161.014,47.104"
                  style="fill-rule: nonzero"
                /></svg
            ></i>
            <i class="article-page__icon"
              ><?xml version="1.0" ?><!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>
              <svg
                height="100%"
                style="
                  fill-rule: evenodd;
                  clip-rule: evenodd;
                  stroke-linejoin: round;
                  stroke-miterlimit: 2;
                "
                version="1.1"
                viewBox="0 0 600 600"
                width="100%"
                xml:space="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:serif="http://www.serif.com/"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <g transform="matrix(1.01619,0,0,1.01619,44,43.8384)">
                  <path
                    d="M251.921,0.159C183.503,0.159 174.924,0.449 148.054,1.675C121.24,2.899 102.927,7.157 86.902,13.385C70.336,19.823 56.287,28.437 42.282,42.442C28.277,56.447 19.663,70.496 13.225,87.062C6.997,103.086 2.739,121.399 1.515,148.213C0.289,175.083 0,183.662 0,252.08C0,320.497 0.289,329.076 1.515,355.946C2.739,382.76 6.997,401.073 13.225,417.097C19.663,433.663 28.277,447.712 42.282,461.718C56.287,475.723 70.336,484.337 86.902,490.775C102.927,497.002 121.24,501.261 148.054,502.484C174.924,503.71 183.503,504 251.921,504C320.338,504 328.917,503.71 355.787,502.484C382.601,501.261 400.914,497.002 416.938,490.775C433.504,484.337 447.553,475.723 461.559,461.718C475.564,447.712 484.178,433.663 490.616,417.097C496.843,401.073 501.102,382.76 502.325,355.946C503.551,329.076 503.841,320.497 503.841,252.08C503.841,183.662 503.551,175.083 502.325,148.213C501.102,121.399 496.843,103.086 490.616,87.062C484.178,70.496 475.564,56.447 461.559,42.442C447.553,28.437 433.504,19.823 416.938,13.385C400.914,7.157 382.601,2.899 355.787,1.675C328.917,0.449 320.338,0.159 251.921,0.159ZM251.921,45.551C319.186,45.551 327.154,45.807 353.718,47.019C378.28,48.14 391.619,52.244 400.496,55.693C412.255,60.263 420.647,65.723 429.462,74.538C438.278,83.353 443.737,91.746 448.307,103.504C451.757,112.381 455.861,125.72 456.981,150.282C458.193,176.846 458.45,184.814 458.45,252.08C458.45,319.345 458.193,327.313 456.981,353.877C455.861,378.439 451.757,391.778 448.307,400.655C443.737,412.414 438.278,420.806 429.462,429.621C420.647,438.437 412.255,443.896 400.496,448.466C391.619,451.916 378.28,456.02 353.718,457.14C327.158,458.352 319.191,458.609 251.921,458.609C184.65,458.609 176.684,458.352 150.123,457.14C125.561,456.02 112.222,451.916 103.345,448.466C91.586,443.896 83.194,438.437 74.378,429.621C65.563,420.806 60.103,412.414 55.534,400.655C52.084,391.778 47.98,378.439 46.859,353.877C45.647,327.313 45.391,319.345 45.391,252.08C45.391,184.814 45.647,176.846 46.859,150.282C47.98,125.72 52.084,112.381 55.534,103.504C60.103,91.746 65.563,83.353 74.378,74.538C83.194,65.723 91.586,60.263 103.345,55.693C112.222,52.244 125.561,48.14 150.123,47.019C176.687,45.807 184.655,45.551 251.921,45.551Z"
                    style="fill-rule: nonzero"
                  />
                  <path
                    d="M251.921,336.053C205.543,336.053 167.947,298.457 167.947,252.08C167.947,205.702 205.543,168.106 251.921,168.106C298.298,168.106 335.894,205.702 335.894,252.08C335.894,298.457 298.298,336.053 251.921,336.053ZM251.921,122.715C180.474,122.715 122.556,180.633 122.556,252.08C122.556,323.526 180.474,381.444 251.921,381.444C323.367,381.444 381.285,323.526 381.285,252.08C381.285,180.633 323.367,122.715 251.921,122.715Z"
                    style="fill: rgb(3, 4, 4); fill-rule: nonzero"
                  />
                  <path
                    d="M416.627,117.604C416.627,134.3 403.092,147.834 386.396,147.834C369.701,147.834 356.166,134.3 356.166,117.604C356.166,100.908 369.701,87.374 386.396,87.374C403.092,87.374 416.627,100.908 416.627,117.604Z"
                    style="fill: rgb(3, 4, 4); fill-rule: nonzero"
                  />
                </g></svg
            ></i>
          </div>
        </div>
      </div>

      <article class="article-page__content">
        <div class="article-page__img">
          <img
            src=${article.img}
            alt=${article.title}
            class="article-page__img-content"
          />
        </div>
        <div class="article-page__item">
          <div class="article-page__text">
            ${article.content}
          </div>
          <aside class="aside">
            <h3 class="aside__heading">Want to add your own article?</h3>
            <ol class="aside__list">
              <li class="aside__item">Gather Content. 💻</li>
              <li class="aside__item">Fill out the form. 📧</li>
              <li class="aside__item">Post! ✅</li>
            </ol>
            <a href="#" class="aside__link">Add Now!</a>
          </aside>
        </div>
      </article>`;
  }
});
