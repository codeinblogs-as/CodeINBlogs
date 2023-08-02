// Create the section element for Blog
const blogSection = document.createElement('section');
blogSection.setAttribute('class', 'bg-gray-100 dark:bg-gray-900');
blogSection.setAttribute('id', 'Blog');

// Create the h3 element for the blog heading
const blogHeading = document.createElement('h3');
blogHeading.setAttribute('class', 'blog-head text-5xl text-white font-bold text-center');

// Create the span elements for the desktop and mobile text
const desktopTextSpan = document.createElement('span');
desktopTextSpan.setAttribute('class', 'desktop-text');
desktopTextSpan.textContent = "Web Development Blog Post";

const mobileTextSpan = document.createElement('span');
mobileTextSpan.setAttribute('class', 'mobile-text');
mobileTextSpan.textContent = "Web Dev post";

// Append the spans to the h3 element
blogHeading.appendChild(desktopTextSpan);
blogHeading.appendChild(mobileTextSpan);

// Create the div element for container-blog
const containerBlogDiv = document.createElement('div');
containerBlogDiv.setAttribute('class', 'container-blog mx-auto py-8 lg:pl-28 lg:pr-28');

// Create the div element for grid layout
const gridDiv = document.createElement('div');
gridDiv.setAttribute('class', 'grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3');

// Blog Post 1
const blogPost1Div = document.createElement('div');
blogPost1Div.innerHTML = `
<div class="relative">
<img
  class="object-cover object-center w-full h-64 rounded-lg lg:h-80"
  src="../../assests/images/blog-5.png"
  alt=""
/>
<div class="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900">
  <img
    class="object-cover object-center w-10 h-10 rounded-full"
    src="../../assests/images/author1.png"
    alt=""
  />
  <div class="mx-4">
    <h1 class="text-sm text-gray-700 dark:text-gray-200">
      Anshul Soni
    </h1>
    <p class="text-sm text-gray-500 dark:text-gray-400">
      Web Development
    </p>
  </div>
</div>
</div>
<h1
class="mt-6 text-xl font-semibold text-gray-800 dark:text-white"
>
Adaptive loading: improving web performance on slow devices
</h1>
<p class="text-sm text-gray-500 dark:text-gray-400 pt-3">
Device capabilities and network connections vary a lot. Sites that
delight users on high-end devices can be unusable on low-end
</p>
<div class="text-center">
<button
  type="button"
  class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-5"
>
  <a href="./adaptive-learning.html">Explore this blog</a>
</button>
</div>
</div>
`;

// Blog Post 2
const blogPost2Div = document.createElement('div');
blogPost2Div.innerHTML = `
<div class="relative">
<img
  class="object-cover object-center w-full h-64 rounded-lg lg:h-80"
  src="https://cdn.discordapp.com/attachments/1052532080589946892/1068822153123856424/1674894312901.png"
  alt=""
/>
<div class="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900">
  <img
    class="object-cover object-center w-10 h-10 rounded-full"
    src="../../assests/images/avatar.jpg"
    alt=""
  />
  <div class="mx-4">
    <h1 class="text-sm text-gray-700 dark:text-gray-200">
      vineet Jadhav
    </h1>
    <p class="text-sm text-gray-500 dark:text-gray-400">
      Web Development
    </p>
  </div>
</div>
</div>
<h1
class="mt-6 text-xl font-semibold text-gray-800 dark:text-white"
>
How to Start with FrontEnd Development?
</h1>
<p class="text-sm text-gray-500 dark:text-gray-400 pt-10">
Frontend development is a crucial aspect of web development that
involves creating the visual and interactive elements
</p>
<div class="text-center">
<button
  type="button"
  class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-5"
>
  <a href="./How-to-start-with-frontend-development.html"
    >Explore this blog</a
  >
</button>
</div>
</div>

`;

// Blog Post 3
const blogPost3Div = document.createElement('div');
blogPost3Div.innerHTML = `
    <!-- Rest of the HTML code for Blog Post 3 -->
    <div class="relative">
              <img
                class="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                src="../../assests/images/blog-5.png"
                alt=""
              />
              <div class="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900">
                <img
                  class="object-cover object-center w-10 h-10 rounded-full"
                  src="../../assests/images/author1.png"
                  alt=""
                />
                <div class="mx-4">
                  <h1 class="text-sm text-gray-700 dark:text-gray-200">
                    Anshul Soni
                  </h1>
                  <p class="text-sm text-gray-500 dark:text-gray-400">
                    Web Development
                  </p>
                </div>
              </div>
            </div>
            <h1
              class="mt-6 text-xl font-semibold text-gray-800 dark:text-white"
            >
              Is SCSS better than CSS?
            </h1>
            <!-- <hr class="w-32 my-6 text-blue-500"> -->
            <p class="text-sm text-gray-500 dark:text-gray-400 pt-4">
              Back in the days, people used to have a number of problems while
              writing CSS. SCSS (Sassy CSS) which is the most commonly used
            </p>
            <div class="text-center">
              <button
                type="button"
                class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-5"
              >
                <a href="./is-scss-better-than-css.html"> Explore this blog</a>
              </button>
            </div>
          </div>
`;

// Blog Post 4
const blogPost4Div = document.createElement('div');
blogPost4Div.innerHTML = `
    <!-- Rest of the HTML code for Blog Post 4 -->
    <div class="relative">
    <img
      class="object-cover object-center w-full h-64 rounded-lg lg:h-80"
      src="https://motopress.com/wp-content/uploads/2020/03/woocommerce-payment-gateways.jpg"
      alt=""
    />
    <div class="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900">
      <img
        class="object-cover object-center w-10 h-10 rounded-full"
        src="../../assests/images/avatar.jpg"
        alt=""
      />
      <div class="mx-4">
        <h1 class="text-sm text-gray-700 dark:text-gray-200">
          Amrit Kumar
        </h1>
        <p class="text-sm text-gray-500 dark:text-gray-400">
          WordPress
        </p>
      </div>
    </div>
  </div>
  <h1
    class="mt-6 text-xl font-semibold text-gray-800 dark:text-white"
  >
    WordPress Payment Plugins
  </h1>
  <p class="text-sm text-gray-500 dark:text-gray-400 pt-10">
    There are plenty of websites suggesting the Best WordPress Payment
    Plugins but are they efficient enough to
  </p>
  <div class="text-center">
    <button
      type="button"
      class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-5"
    >
      <a href="./wordpress-payment-plugins.html">
        Explore this blog</a
      >
    </button>
  </div>
</div>

`;

// Append blog posts to the grid div
gridDiv.appendChild(blogPost1Div);
gridDiv.appendChild(blogPost2Div);
gridDiv.appendChild(blogPost3Div);
gridDiv.appendChild(blogPost4Div);

// Append grid div to container-blog div
containerBlogDiv.appendChild(gridDiv);

// Append heading and container-blog div to the Blog section
blogSection.appendChild(blogHeading);
blogSection.appendChild(containerBlogDiv);

// Append the Blog section to the body
document.body.appendChild(blogSection);
