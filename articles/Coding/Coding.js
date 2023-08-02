// Create the section element for Blog
const blogSection = document.createElement('section');
blogSection.setAttribute('class', 'bg-gray-100 dark:bg-gray-900');
blogSection.setAttribute('id', 'Blog');

// Create the h3 element for the blog heading
const blogHeading = document.createElement('h3');
blogHeading.setAttribute('class', 'blog-head text-5xl text-white font-bold text-center');
blogHeading.textContent = "Coding Blog Post";

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
        <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="../../assests/images/blog-7.jpg" alt="" />
        <div class="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900">
            <img class="object-cover object-center w-10 h-10 rounded-full" src="../../assests/images/author1.png" alt="" />
            <div class="mx-4">
                <h1 class="text-sm text-gray-700 dark:text-gray-200">Anshul Soni</h1>
                <p class="text-sm text-gray-500 dark:text-gray-400">Coding</p>
            </div>
        </div>
    </div>
    <h1 class="mt-6 text-xl font-semibold text-gray-800 dark:text-white">What is Coding?</h1>
    <p class="text-sm text-gray-500 dark:text-gray-400 pt-4">Coding, sometimes called computer programming, is how we communicate with computers. Code tells a computer</p>
    <div class="text-center">
        <button type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-5">
            <a href="../Coding/what-is-coding.html">Explore this blog</a>
        </button>
    </div>
`;

// Blog Post 2
const blogPost2Div = document.createElement('div');
blogPost2Div.innerHTML = `
    <div class="relative">
        <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="https://www.mooc.org/hs-fs/hubfs/learn-programming-career-jpg.jpeg?width=750&name=learn-programming-career-jpg.jpeg" alt="" />
        <div class="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900">
            <img class="object-cover object-center w-10 h-10 rounded-full" src="../../assests/images/author1.png" alt="" />
            <div class="mx-4">
                <h1 class="text-sm text-gray-700 dark:text-gray-200">Anshul Soni</h1>
                <p class="text-sm text-gray-500 dark:text-gray-400">Coding</p>
            </div>
        </div>
    </div>
    <h1 class="mt-6 text-xl font-semibold text-gray-800 dark:text-white">Why Is Computer Programming Important?</h1>
    <p class="text-sm text-gray-500 dark:text-gray-400 pt-4">Computer programming is the lifeblood of modern life. Imagine for a moment what would happen if all computers</p>
    <div class="text-center">
        <button type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-5">
            <a href="./WhyIsComputerProgrammingImportant.html">Explore this blog</a>
        </button>
    </div>
`;

// Append blog posts to the grid div
gridDiv.appendChild(blogPost1Div);
gridDiv.appendChild(blogPost2Div);

// Append grid div to container-blog div
containerBlogDiv.appendChild(gridDiv);

// Append heading and container-blog div to the Blog section
blogSection.appendChild(blogHeading);
blogSection.appendChild(containerBlogDiv);

// Append the Blog section to the body
document.body.appendChild(blogSection);
