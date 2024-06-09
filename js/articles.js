"use strict";

const addBtn = document.querySelector('.aside__link')
const add = document.querySelector('.add')
const articleData = [
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
    author: "-John Antwerp",
  },
];

// addBtn?.addEventListener('click', function(){
//   add.classList.remove('hidden')
// })

const article = document.querySelectorAll(".article");

article.forEach((el) =>
  el.addEventListener("click", function () {
    document.location.href = el.getAttribute("data-url");
  })
);
