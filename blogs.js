// Create the section element for Blog
const blogSection = document.createElement('section');
blogSection.setAttribute('class', 'bg-gray-100 dark:bg-gray-900');
blogSection.setAttribute('id', 'Blogs');

// Create the h3 element for the blog heading
const blogHeading = document.createElement('h3');
blogHeading.setAttribute('class', 'blog-head text-5xl text-white font-bold text-center');

// Create the span elements for the desktop and mobile text
const desktopTextSpan = document.createElement('span');
desktopTextSpan.setAttribute('class', 'desktop-text');
desktopTextSpan.textContent = "Latest Blog Post";

// Append the spans to the h3 element
blogHeading.appendChild(desktopTextSpan);
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
            <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80"
              src="https://www.totalphase.com/media/blog/2022/11/960x0.jpg" alt="" />
            <div class="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900">
              <img class="object-cover object-center w-10 h-10 rounded-full" src="./assests/images/avatarman.png"
                alt="" />
              <div class="mx-4">
                <h1 class="text-sm text-gray-700 dark:text-gray-200">
                  Siva Teja Cherukupalli
                </h1>
                <p class="text-sm text-gray-500 dark:text-gray-400">
                  Artificial Intelligence
                </p>
              </div>
            </div>
          </div>
          <h1 class="mt-6 text-xl font-semibold text-gray-800 dark:text-white">
            "Prompts" in AI is challenging task in Future.?
          </h1>
          <p class="text-sm text-gray-500 dark:text-gray-400 pt-6">
            In the context of AI, a "Prompt" is a piece of text or instruction
            provided to an AI model to guide its
          </p>
          <div class="text-center">
            <button type="button"
              class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-5">
              <a href="./articles/Machine Learning/PromptsinAIischallengingtaskinFuture.html">
                Explore this blog</a>
            </button>
          </div>
`;

// Blog Post 2
const blogPost2Div = document.createElement('div');
blogPost2Div.innerHTML = `
<div class="relative">
<img class="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="./assests/images/blog-5.png"
  alt="" />
<div class="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900">
  <img class="object-cover object-center w-10 h-10 rounded-full" src="./assests/images/author1.png"
    alt="" />
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
<h1 class="mt-6 text-xl font-semibold text-gray-800 dark:text-white">
Adaptive loading: improving web performance on slow devices
</h1>
<!-- <hr class="w-32 my-6 text-blue-500"> -->
<p class="text-sm text-gray-500 dark:text-gray-400 pt-6">
Device capabilities and network connections vary a lot. Sites that
delight users on high-end devices can be unusable on low-end
</p>
<div class="text-center">
<button type="button"
  class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-5">
  <a href="./articles/Web development/adaptive-learning.html">
    Explore this blog</a>
</button>
</div>

`;

// Blog Post 3
const blogPost3Div = document.createElement('div');
blogPost3Div.innerHTML = `
    <!-- Rest of the HTML code for Blog Post 3 -->
        <div class="relative">
            <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80"
              src="https://cdn.discordapp.com/attachments/1052532080589946892/1068822153123856424/1674894312901.png"
              alt="" />
            <div class="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900">
              <img class="object-cover object-center w-10 h-10 rounded-full" src="./assests/images/avatar.jpg" alt="" />
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
          <h1 class="mt-6 text-xl font-semibold text-gray-800 dark:text-white">
            How to Start with FrontEnd Development?
          </h1>
          <!-- <hr class="w-32 my-6 text-blue-500"> -->
          <p class="text-sm text-gray-500 dark:text-gray-400 pt-8">
            Frontend development is a crucial aspect of web development that
            involves creating the visual and interactive elements of a website
            or
          </p>
          <div class="text-center">
            <button type="button"
              class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-5">
              <a href="./articles/Web development/How-to-start-with-frontend-development.html">
                Explore this blog</a>
            </button>
          </div>
        </div>
`;

// Blog Post 4
const blogPost4Div = document.createElement('div');
blogPost4Div.innerHTML = `
<div>
<div class="relative">
  <img
    class="object-cover object-center w-full h-64 rounded-lg lg:h-80"
    src="https://codein-blogs.anshulsoni3.repl.co/assets/images/blog-6.jpg"
    alt=""
  />
  <div class="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900">
    <img
      class="object-cover object-center w-10 h-10 rounded-full"
      src="./assests/images/avatar.jpg"
      alt=""
    />
    <div class="mx-4">
      <h1 class="text-sm text-gray-700 dark:text-gray-200">
        Juhi Nagpure
      </h1>
      <p class="text-sm text-gray-500 dark:text-gray-400">
        Artificial Intelligence
      </p>
    </div>
  </div>
</div>
<h1
  class="mt-6 text-xl font-semibold text-gray-800 dark:text-white"
>
  Is ChatGPT Going to Replace Programmers?
</h1>
<p class="text-sm text-gray-500 dark:text-gray-400 pt-6">
  There are four major development approaches It is unlikely that
  ChatGPT or any other language model will
</p>
<div class="text-center">
  <button
    type="button"
    class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-5"
  >
    <a
      href="./articles/Machine Learning/is-chatgpt-going-to-replace-programmers.html"
    >
      Explore this blog</a
    >
  </button>
</div>
</div>

`;
const blogPost5Div = document.createElement('div');
blogPost5Div.innerHTML = `
<div class="relative">
<img class="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="./assests/images/blog-5.png"
  alt="" />
<div class="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900">
  <img class="object-cover object-center w-10 h-10 rounded-full" src="./assests/images/author1.png"
    alt="" />
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
<h1 class="mt-6 text-xl font-semibold text-gray-800 dark:text-white">
Is SCSS better than CSS?
</h1>
<!-- <hr class="w-32 my-6 text-blue-500"> -->
<p class="text-sm text-gray-500 dark:text-gray-400 pt-6">
Back in the days, people used to have a number of problems while
writing CSS. SCSS (Sassy CSS) which is the most commonly used
</p>
<div class="text-center">
<button type="button"
  class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-5">
  <a href="./articles/Web development/is-scss-better-than-css.html">
    Explore this blog</a>
</button>
</div>
`;

const blogPost6Div = document.createElement('div');
blogPost6Div.innerHTML = `
<div class="relative">
<img
  class="object-cover object-center w-full h-64 rounded-lg lg:h-80"
  src="./assests/images/blog-7.jpg"
  alt=""
/>
<div class="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900">
  <img
    class="object-cover object-center w-10 h-10 rounded-full"
    src="./assests/images/author1.png"
    alt=""
  />
  <div class="mx-4">
    <h1 class="text-sm text-gray-700 dark:text-gray-200">
      Anshul Soni
    </h1>
    <p class="text-sm text-gray-500 dark:text-gray-400">Coding</p>
  </div>
</div>
</div>
<h1
class="mt-6 text-xl font-semibold text-gray-800 dark:text-white"
>
What is Coding?
</h1>
<!-- <hr class="w-32 my-6 text-blue-500"> -->
<p class="text-sm text-gray-500 dark:text-gray-400 pt-6">
Coding, sometimes called computer programming, is how we
communicate with computers. Code tells a computer
</p>
<div class="text-center">
<button
  type="button"
  class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-5"
>
  <a href="./articles/Coding/what-is-coding.html">
    Explore this blog</a
  >
</button>
</div>
</div>\
`;
const blogPost7Div = document.createElement('div');
blogPost7Div.innerHTML = `
<div>
<div class="relative">
<img
  class="object-cover object-center w-full h-64 rounded-lg lg:h-80"
  src="./assests/images/blog-4.png"
  alt=""
/>
<div class="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900">
  <img
    class="object-cover object-center w-10 h-10 rounded-full"
    src="./assests/images/avatar.jpg"
    alt=""
  />
  <div class="mx-4">
    <h1 class="text-sm text-gray-700 dark:text-gray-200">
      Juhi Nagpure
    </h1>
    <p class="text-sm text-gray-500 dark:text-gray-400">
      Machine Learning
    </p>
  </div>
</div>
</div>
<h1
class="mt-6 text-xl font-semibold text-gray-800 dark:text-white"
>
What is machine learning?
</h1>
<p class="text-sm text-gray-500 dark:text-gray-400 pt-8">
Machine learning is an application of AI that enables systems to
learn and improve from experience without
</p>
<div class="text-center">
<button
  type="button"
  class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-5"
>
  <a
    href="./articles/Machine Learning/what-is-machine-learning.html"
    >Explore this blog</a
  >
</button>
</div>
</div>
`;
const blogPost8Div = document.createElement('div');
blogPost8Div.innerHTML = `
<div class="relative">
<img
  class="object-cover object-center w-full h-64 rounded-lg lg:h-80"
  src="./assests/images/blog-2.png"
  alt=""
/>
<div class="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900">
  <img
    class="object-cover object-center w-10 h-10 rounded-full"
    src="./assests/images/avatar.jpg"
    alt=""
  />
  <div class="mx-4">
    <h1 class="text-sm text-gray-700 dark:text-gray-200">
      Kushargra Pandey
    </h1>
    <p class="text-sm text-gray-500 dark:text-gray-400">
      Android & IOS Development
    </p>
  </div>
</div>
</div>
<h1
class="mt-6 text-xl font-semibold text-gray-800 dark:text-white"
>
What is Mobile App development
</h1>
<p class="text-sm text-gray-500 dark:text-gray-400 pt-8">
There are two dominant platforms in the modern smartphone market.
One is the iOS platform from Apple Inc
</p>
<div class="text-center">
<button
  type="button"
  class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-5"
>
  <a
    href="./articles/Android & IOS Development/what-is-mobile-app-development.html"
  >
    Explore this blog</a
  >
</button>
</div>
</div>
`;
const blogPost9Div = document.createElement('div');
blogPost9Div.innerHTML = `
<div class="relative">
<img
  class="object-cover object-center w-full h-64 rounded-lg lg:h-80"
  src="https://images.ctfassets.net/3viuren4us1n/2CsVyr5yjxEiSsNVcMmB7E/23685da16eefe83f355e43ccef90f3fd/How-do-you-train-AI.jpg?fm=webp&w=1920"
  alt=""
/>
<div class="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900">
  <img
    class="object-cover object-center w-10 h-10 rounded-full"
    src="./assests/images/avatar.jpg"
    alt=""
  />
  <div class="mx-4">
    <h1 class="text-sm text-gray-700 dark:text-gray-200">
      Prasad D Wilagama
    </h1>
    <p class="text-sm text-gray-500 dark:text-gray-400">
      Machine Learning
    </p>
  </div>
</div>
</div>
<h1
class="mt-6 text-xl font-semibold text-gray-800 dark:text-white"
>
What’s Machine Learning Done in the Last 20 Years?
</h1>
<p class="text-sm text-gray-500 dark:text-gray-400 pt-2">
In the past 20 years, machine learning has made significant
progress and has been applied to a wide range of applications.
</p>
<div class="text-center">
<button
  type="button"
  class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-5"
>
  <a
    href="./articles/Machine Learning/What-Machine-Learning-Done-in-the-Last-20-Year.html"
  >
    Explore this blog</a
  >
</button>
</div>
</div>
`;
const blogPost10Div = document.createElement('div');
blogPost10Div.innerHTML = `
<div class="relative">
<img
  class="object-cover object-center w-full h-64 rounded-lg lg:h-80"
  src="https://motopress.com/wp-content/uploads/2020/03/woocommerce-payment-gateways.jpg"
  alt=""
/>
<div class="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900">
  <img
    class="object-cover object-center w-10 h-10 rounded-full"
    src="./assests/images/avatar.jpg"
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
  <a
    href="./articles/Web development/wordpress-payment-plugins.html"
  >
    Explore this blog</a
  >
</button>
</div>
</div>

`;
const blogPost11Div = document.createElement('div');
blogPost11Div.innerHTML = `<div class="relative">
<img
  class="object-cover object-center w-full h-64 rounded-lg lg:h-80"
  src="https://www.mooc.org/hubfs/learn-mobile-app-development-jpg.jpeg"
  alt=""
/>
<div class="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900">
  <img
    class="object-cover object-center w-10 h-10 rounded-full"
    src="./assests/images/avatar.jpg"
    alt=""
  />
  <div class="mx-4">
    <h1 class="text-sm text-gray-700 dark:text-gray-200">
      Aaron Cook
    </h1>
    <p class="text-sm text-gray-500 dark:text-gray-400">
      Android & IOS Development
    </p>
  </div>
</div>
</div>
<h1
class="mt-6 text-xl font-semibold text-gray-800 dark:text-white"
>
IOS vs. Android App Development: What's the Difference?
</h1>
<p class="text-sm text-gray-500 dark:text-gray-400 pt-4">
The two most popular smartphone operating systems are Apple’s iOS
and Google’s Android. When making mobile
</p>
<div class="text-center">
<button
  type="button"
  class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-5"
>
  <a
    href="./articles/Android & IOS Development/IOSvsAndroiddiffernce.html"
  >
    Explore this blog</a
  >
</button>
</div>
</div>`;
const blogPost12Div = document.createElement('div');
blogPost12Div.innerHTML = `
<div class="relative">
<img
  class="object-cover object-center w-full h-64 rounded-lg lg:h-80"
  src="https://www.mooc.org/hubfs/learn-mobile-app-development-jpg.jpeg"
  alt=""
/>
<div class="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900">
  <img
    class="object-cover object-center w-10 h-10 rounded-full"
    src="./assests/images/avatar.jpg"
    alt=""
  />
  <div class="mx-4">
    <h1 class="text-sm text-gray-700 dark:text-gray-200">
      Ameet Talwalkar
    </h1>
    <p class="text-sm text-gray-500 dark:text-gray-400">
      Machine Learning
    </p>
  </div>
</div>
</div>
<h1
class="mt-6 text-xl font-semibold text-gray-800 dark:text-white"
>
Tackling Diverse Tasks with Neural Architecture Search
</h1>
<p class="text-sm text-gray-500 dark:text-gray-400 pt-4">
The past decade has witnessed the success of machine learning (ML)
in solving diverse real-world problems
</p>
<div class="text-center">
<button
  type="button"
  class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-5"
>
  <a
    href="./articles/Machine Learning/Tackling DiverseTaskswithNeuralArchitectureSearch.html"
  >
    Explore this blog</a
  >
</button>
</div>
</div>
`; const blogPost13Div = document.createElement('div');
blogPost13Div.innerHTML = `
<div class="relative">
<img
  class="object-cover object-center w-full h-64 rounded-lg lg:h-80"
  src="https://www.mooc.org/hs-fs/hubfs/learn-programming-career-jpg.jpeg?width=750&name=learn-programming-career-jpg.jpeg"
  alt=""
/>
<div class="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900">
  <img
    class="object-cover object-center w-10 h-10 rounded-full"
    src="./assests/images/author1.png"
    alt=""
  />
  <div class="mx-4">
    <h1 class="text-sm text-gray-700 dark:text-gray-200">
      Anshul Soni
    </h1>
    <p class="text-sm text-gray-500 dark:text-gray-400">Coding</p>
  </div>
</div>
</div>
<h1
class="mt-6 text-xl font-semibold text-gray-800 dark:text-white"
>
Why Is Computer Programming Important?
</h1>
<p class="text-sm text-gray-500 dark:text-gray-400 pt-10">
Computer programming is the lifeblood of modern life. Imagine for
a moment what would happen if all computers
</p>
<div class="text-center">
<button
  type="button"
  class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-5"
>
  <a
    href="./articles/Coding/WhyIsComputerProgrammingImportant.html"
  >
    Explore this blog</a
  >
</button>
</div>
</div>
`;

const blogPost14Div = document.createElement('div');
blogPost14Div.innerHTML = `
<div class="relative">
<img
  class="object-cover object-center w-full h-64 rounded-lg lg:h-80"
  src="https://www.mooc.org/hubfs/browser-programming-jpg.jpeg"
  alt=""
/>
<div class="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900">
  <img
    class="object-cover object-center w-10 h-10 rounded-full"
    src="./assests/images/author1.png"
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
Best Programming Languages for Web Development
</h1>
<p class="text-sm text-gray-500 dark:text-gray-400 pt-3">
It’s a great time to learn web development. U.S. News and World
Report recently ranked development as the
</p>
<div class="text-center">
<button
  type="button"
  class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-5"
>
  <a
    href="./articles/Web development/BestProgrammingLanguagesforWebDevelopment.html"
  >
    Explore this blog</a
  >
</button>
</div>
</div>`;

// Append blog posts to the grid div
gridDiv.appendChild(blogPost1Div);
gridDiv.appendChild(blogPost2Div);
gridDiv.appendChild(blogPost3Div);
gridDiv.appendChild(blogPost4Div);
gridDiv.appendChild(blogPost5Div);
gridDiv.appendChild(blogPost6Div);
gridDiv.appendChild(blogPost7Div);
gridDiv.appendChild(blogPost8Div);
gridDiv.appendChild(blogPost9Div);
gridDiv.appendChild(blogPost10Div);
gridDiv.appendChild(blogPost11Div);
gridDiv.appendChild(blogPost12Div);
gridDiv.appendChild(blogPost13Div);
gridDiv.appendChild(blogPost14Div);

// Append grid div to container-blog div
containerBlogDiv.appendChild(gridDiv);

// Append heading and container-blog div to the Blog section
blogSection.appendChild(blogHeading);
blogSection.appendChild(containerBlogDiv);

// Append the Blog section to the body
document.body.appendChild(blogSection);
